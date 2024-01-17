import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ShimmerCard = () => (
  <div className="loading-card">
    <div className="image loading-shimmer"></div>
    <div
      className="title loading-shimmer"
      style={{ marginTop: "1rem", height: "1rem" }}
    ></div>
    <div
      className="title loading-shimmer"
      style={{ marginTop: "0.5rem", height: "1rem", width: "80%" }}
    ></div>
    {/* Add more shimmering lines or shapes as needed */}
  </div>
);

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = selectedCategory || "electronics";

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3300/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, [selectedCategory]);
  // if (loading) {
  //   return <div className="loading">Fetching Products ...</div>;
  // }
  if (loading) {
    return (
      <div className="products">
        {Array.from({ length: 6 }, (_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
