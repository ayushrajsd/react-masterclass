import { useCartContext } from "../context/cart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart";
const AddToCart = ({ product }) => {
  // const { cart, addToCart, removeFromCart } = useCartContext();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const productInCart = cart[product.id];

  const handleAdd = () => {
    // addToCart(product);
    dispatch(addToCart(product));
  };
  const handleRemove = () => {
    // removeFromCart(product);
    dispatch(removeFromCart(product));
  };
  if (!productInCart) {
    return (
      <div>
        <button className="add-to-cart" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div onClick={handleRemove} className="add">
          -
        </div>
        {productInCart.quantity}
        <div className="add" onClick={handleAdd}>
          +
        </div>
        ;
      </div>
    );
  }
};

export default AddToCart;
