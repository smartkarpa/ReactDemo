const Product = ({ title, price, image }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} alt={title} />
    </div>
    <div className="product-details">
      <h3>{title}</h3>
      <span>Rs {price}</span>
    </div>
  </div>
);

export default Product;
