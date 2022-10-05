import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from "axios";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
  // used when a state depends on previous one
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payloz, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payloz };
    default:
      return state; // current state
  }
};

export default function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  //   const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payloz: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payloz: err.message });
      }

      // send ajax request to the inside url and send the results in variable result
      // setProducts(result.data); // result.data is the products in the backend
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products </h1>
      <div className="products">
        {loading ? (
          <div> Loading ... </div>
        ) : error ? (
          <div> {error} </div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}
