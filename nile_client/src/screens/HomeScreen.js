import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from "axios";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      // send ajax request to the inside url and send the results in variable result
      setProducts(result.data); // result.data is the products in the backend
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products </h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                width="200"
                height="250"
              />
            </Link>
            <div className="prod-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>

              <p>
                <strong>{product.price} ₪</strong>
              </p>
              <button> Add to cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
