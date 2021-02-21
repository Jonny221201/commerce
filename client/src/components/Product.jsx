import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product._id}`}>
        <img
          className="imageChangeHover"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <h6 className="lightGrey fontEleven">{product.brand}</h6>
      <Link to={`/products/${product._id}`}>
        <h5 className="darkGrey fontThirteen">{product.name}</h5>
      </Link>
      <p className="darkGrey fontEleven">${product.price}</p>
      <p>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </p>
      <p className="lighterGrey fontEleven">{product.description}</p>
    </>
  );
};

export default Product;
