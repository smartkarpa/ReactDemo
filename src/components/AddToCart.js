import { useDispatch, useSelector } from "react-redux";
import { useCartContext } from "../context/cart";
import { addToCartRedux, removeFromCartRedux } from "../store/cart";

function AddToCart({ product }) {
  // const { cart, addToCart, removeFromCart } = useCartContext();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const productInCart = cart[product.id];
  const handleRemoveFromCart = () => {
    // console.log("handle remove to cart in reducer");
    // console.log(product);
    dispatch(removeFromCartRedux(product));
  };
  const handleAddToCart = () => {
    // console.log(product);
    dispatch(addToCartRedux(product));
  };
  // console.log("product", product)
  if (!productInCart) {
    return (
      <div className="add-to-cart" onClick={handleAddToCart}>
        Add To Cart{" "}
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div className="add" onClick={handleRemoveFromCart}>
          -
        </div>
        <div className="quantity">{productInCart.quantity}</div>
        <div className="add" onClick={handleAddToCart}>
          +
        </div>
      </div>
    );
  }
}

export default AddToCart;
