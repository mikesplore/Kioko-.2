
const DebugStyles = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Tailwind CSS Debug Page</h1>
      
      {/* CSS Test Element */}
      <div className="css-test">
        This element should have a red border, yellow background, and bold black text if CSS is loading.
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text styles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Text Styles</h2>
          <p className="text-red-500">This text should be red</p>
          <p className="text-green-500 font-bold">This text should be green and bold</p>
          <p className="text-blue-500 italic">This text should be blue and italic</p>
          <p className="text-purple-500 underline">This text should be purple and underlined</p>
        </div>
        
        {/* Background and spacing */}
        <div className="bg-yellow-100 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Background & Spacing</h2>
          <div className="bg-blue-200 p-4 mb-2">Blue background with padding</div>
          <div className="bg-green-200 p-2 mb-2">Green background with less padding</div>
          <div className="bg-red-200 p-6">Red background with more padding</div>
        </div>
        
        {/* Flex and Grid */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flex Layout</h2>
          <div className="flex space-x-4 mb-4">
            <div className="bg-indigo-500 text-white p-4 rounded">Item 1</div>
            <div className="bg-indigo-600 text-white p-4 rounded">Item 2</div>
            <div className="bg-indigo-700 text-white p-4 rounded">Item 3</div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Buttons</h2>
          <div className="space-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Blue Button
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Green Button
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Red Button
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsive Test</h2>
        <p className="hidden sm:block text-green-600">This should only show on sm screens and up</p>
        <p className="hidden md:block text-blue-600">This should only show on md screens and up</p>
        <p className="hidden lg:block text-purple-600">This should only show on lg screens and up</p>
      </div>
    </div>
  );
};

export default DebugStyles;
