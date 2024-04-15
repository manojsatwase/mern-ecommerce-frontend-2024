import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { VscError } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart-item";
import {
  addToCart,
  calculatePrice,
  discountApplied,
  removeCartItem,
} from "../redux/reducer/cartReducer";
import { CartReducerInitialState } from "../types/reducer-types";
import { CartItem } from "../types/types";
import axios from "axios";
import { server } from "../redux/store";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, subtotal, tax, total, shippingCharges, discount } =
    useSelector(
      (state: { cartReducer: CartReducerInitialState }) => state.cartReducer
    );

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  const incrementHandler = (cartItem: CartItem) => {
    if (Number(cartItem.quantity) >= cartItem.stock) return;
    dispatch(
      addToCart({
        ...cartItem,
        quantity: String(Number(cartItem.quantity) + 1),
      })
    );
  };
  const decrementHandler = (cartItem: CartItem) => {
    if (Number(cartItem.quantity) <= 1) return;
    dispatch(
      addToCart({
        ...cartItem,
        quantity: String(Number(cartItem.quantity) - 1),
      })
    );
  };
  const removeHandler = (productId: string) => {
    dispatch(removeCartItem(productId));
    toast.success("remove item from cart");
  };

  useEffect(() => {
   
    const { token: cancelToken, cancel } = axios.CancelToken.source();

     const timeOutId = setTimeout(() => {
        axios
          .get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {
            cancelToken,
          })
          .then((res) => {
            dispatch(discountApplied(res.data.discount));
            setIsValidCouponCode(true);
            dispatch(calculatePrice());
          })
          .catch(() => {
            dispatch(discountApplied(0));
            cancel();
            setIsValidCouponCode(false);
            dispatch(calculatePrice());
          });
      }, 1000);

    return () => clearTimeout(timeOutId);
  }, [couponCode]);

  useEffect(() => {
    dispatch(calculatePrice());
  }, [cartItems]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal : ₹{subtotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          {" "}
          Discount : <em className="red"> - ₹{discount}</em>{" "}
        </p>
        <p>
          <b>Total : ₹{total}</b>
        </p>
        <input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          type="text"
          placeholder="Coupon Code"
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              {discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />{" "}
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
