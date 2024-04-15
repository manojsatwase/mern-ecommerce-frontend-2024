import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SkeletonLoading } from "../components/loading";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";

const Home = () => {

  const {data,isLoading,isError} = useLatestProductsQuery("");

  const dispatch = useDispatch();

  const addTocartHandler = (cartItems:CartItem) => {
    if(cartItems.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItems));
    toast.success(`Added to cart ${cartItems.name}`);
  }

  if(isError) toast.error("Cannot Featch the Products");

  return (
    <div className="home">
      <section></section>
      <h1>Latest Products</h1>
      <Link to="/search" className="findmore">More</Link>
      {isLoading &&  <SkeletonLoading />}
      <main>
    
       {
          data?.products.map(product => (
            <ProductCard
              key={product._id}
              productId={product._id}
              name={product.name}
              price={Number(product.price)} 
              stock={Number(product.stock)}
              handler={addTocartHandler}
              photo={product.photo}
            />
          ))
       
       }
      </main>
    </div>
  )
}

export default Home;