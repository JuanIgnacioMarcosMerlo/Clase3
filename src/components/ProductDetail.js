import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>SKU: {product.sku}</p>
      <p>Cantidad disponible: {product.quantity}</p>
    </div>
  );
};

export default ProductDetail;
