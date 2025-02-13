import React from 'react';
import { Link } from 'react-router-dom';

const BestsellerProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      oldPrice: 6.48,
      image: '/product1.jpg'
    },
    {
      id: 2,
      name: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      oldPrice: 6.48,
      image: '/product2.jpg'
    },
    {
      id: 3,
      name: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      oldPrice: 6.48,
      image: '/product3.jpg'
    },
    {
      id: 4,
      name: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      oldPrice: 6.48,
      image: '/product1.jpg'
    },
    {
      id: 5,
      name: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      oldPrice: 6.48,
      image: '/product2.jpg'
    },
    {
      id: 6,
      name: 'Graphic Design',
      description: 'English Department',
      price: 16.48,
      oldPrice: 6.48,
      image: '/product3.jpg'
    }
  ];

  const popularProduct = {
    id: 7,
    name: 'English Department',
    price: 16.48,
    image: '/popular-product.jpg'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Bestseller Products Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Men</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Women</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Accessories</Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="space-x-4">
                    <button className="text-white hover:text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-2">
                  <span className="text-gray-400 line-through mr-2">${product.oldPrice}</span>
                  <span className="text-blue-600">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Popular Section */}
      <div>
        <h2 className="text-2xl font-bold mb-8">MOST POPULAR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Delivery Info */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <img 
              src="/delivery-image.jpg" 
              alt="Delivery Service"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-xl">1.</div>
                <p className="text-sm mt-2">Easy to use</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-xl">2.</div>
                <p className="text-sm mt-2">Fast Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-xl">3.</div>
                <p className="text-sm mt-2">Best Quality</p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-xl">4.</div>
                <p className="text-sm mt-2">Best Price</p>
              </div>
            </div>
          </div>

          {/* Right Side - Popular Product */}
          <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src={popularProduct.image} 
                alt={popularProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium">{popularProduct.name}</h3>
                <p className="text-blue-600 mt-2">${popularProduct.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProducts;
