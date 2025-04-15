import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$24.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$29.99', image: 'https://via.placeholder.com/150' },
];

const ProductList = ({ onProductClick }) => {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
          onClick={() => onProductClick(product)}
        >
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-600">{product.price}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
