import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  const { image, title, price } = product;
  return (
    <div className="product">
      <div className="product-top">
        <img src={image} className="image" />
        <div className="title">{title}</div>
      </div>
      <div className="product-body">
        <span>${price}</span>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
