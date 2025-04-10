"use client";

const ProductCard = ({ product }) => {
  const getAltText = (product) => {
    return `${product.title} - ${product.category} product`;
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
