import { FaPlus } from "react-icons/fa";
import { CartItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItems: CartItem) => string | undefined;
};

const server = import.meta.env.VITE_SERVER;

const ProductCard = ({
  productId,
  name,
  price,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product__card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      {/* overlap div */}
      <div>
        <button
          onClick={() =>
            handler({
              productId,
              name,
              price: price.toString(), 
              photo,
              stock,
              quantity: "1", 
            })
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
