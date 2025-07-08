import React from 'react';

const Shop: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
          Welcome to Kioko Enterprise
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your premium destination for fine spirits and beverages. Experience the finest collection of drinks from around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Shop categories would go here */}
        </div>
      </div>
    </div>
  );
};

export default Shop;