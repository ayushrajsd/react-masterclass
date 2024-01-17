import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import Logo from "../logo.png";
import { useCartContext } from "../context/cart";
import { useSelector } from "react-redux";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const [data, setData] = useState([]);
  // const { cart } = useCartContext();
  const cart = useSelector((state) => state.cart);

  const total = () => {
    let count = 0;
    for(let item in cart){
      count += cart[item].quantity;
    }
    return count;
  }

  useEffect(() => {
    fetch("http://localhost:3300/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="header-items">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      {data.map((category) => (
        <div
          onClick={() => setSelectedCategory(category)}
          className={
            "header-item " +
            (category === selectedCategory ? "header-item--selected" : "")
          }
        >
          {category}
        </div>
      ))}
      <div className="shopping-cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-length">{total()}</span>
      </div>
    </div>
  );
};

export default Header;
