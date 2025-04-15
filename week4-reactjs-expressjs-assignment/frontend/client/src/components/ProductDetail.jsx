import React from 'react';

const ProductDetail = ({ product, onBack }) => {
  if (!product) return null;

  return (
    <div className="p-6">
      <button className="text-blue-500 mb-4" onClick={onBack}>← Back</button>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-blue-600 text-lg mb-4">{product.price}</p>
        <p className="text-gray-700">This is a detailed description of the product. More features, specs, etc.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
