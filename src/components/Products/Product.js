const Product = ({ image, price, title }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} />
    </div>
    <div className="product-details">
      <h3>{title}</h3>
      <span>{price}</span>
    </div>
  </div>
);

export default Product;
