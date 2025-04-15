import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        <ProductList onProductClick={setSelectedProduct} />
      )}
      <Footer />
    </div>
  );
};

export default App;