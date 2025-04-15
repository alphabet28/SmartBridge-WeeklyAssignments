import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8">
      <p className="text-gray-600">&copy; 2025 MyShop. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="text-blue-500 hover:underline">Facebook</a>
        <a href="#" className="text-blue-500 hover:underline">Twitter</a>
        <a href="#" className="text-blue-500 hover:underline">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
