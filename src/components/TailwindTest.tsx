import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="p-4 m-4 bg-blue-500 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Tailwind CSS Test</h2>
      <p className="text-sm">If you can see this styled with blue background and white text, Tailwind CSS is working correctly!</p>
      <div className="mt-4 flex space-x-2">
        <div className="w-10 h-10 bg-red-500 rounded-full"></div>
        <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
        <div className="w-10 h-10 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default TailwindTest;
