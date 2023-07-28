import { useEffect, useState } from "react";
import Product from "./ProductCard";

const ProductList = ({ selectedCategory, setSelectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (selectedCategory.length > 0) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  let loadError = null;

  if (loading) {
    return <div className="loading">Fetching Products ... </div>;
  } else if (loadError) {
    return <div>Please try again ... </div>;
  } else {
    return (
      <div className="products">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    );
  }
};
export default ProductList;
