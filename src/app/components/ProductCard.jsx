"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const getAltText = (product) => {
    return `${product.title} - ${product.category} product`;
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={getAltText(product)}
          className="product-image"
          loading="lazy"
        />
        <button className="heart-button" onClick={toggleLike}>
          {liked ? (
            <AiFillHeart className="heart-icon liked" />
          ) : (
            <AiOutlineHeart className="heart-icon" />
          )}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
