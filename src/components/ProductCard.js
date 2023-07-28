import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => (
  <div className="product">
    <img src={product.image} className="image" alt={product.title} />
    <div className="title">{product.title}</div>

    <div className="product-body">
      <span style={{ marginTop: 10 }}>$ {product.price}</span>
      <AddToCart product={product} />
    </div>
  </div>
);

export default ProductCard;
