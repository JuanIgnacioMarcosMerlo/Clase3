import React from 'react';
import ProductDetail from '../components/ProductDetail';

const productData = {
  name: 'Producto Ejemplo',
  description: 'Esta es la descripción del producto de ejemplo.',
  price: 19.99,
  sku: '123456789',
  quantity: 50,
};

const ProductDetailPage = () => {
  return (
    <div className="product-detail-page">
      <h1>Detalle del Producto</h1>
      <ProductDetail product={productData} />
    </div>
  );
};

export default ProductDetailPage;
