import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Kioko Enterprise</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
          <p>
            We are dedicated to providing the finest selection of premium spirits and beverages. 
            Our curated collection features exceptional quality drinks from around the world.
          </p>
          <p>
            Founded on the principles of quality, authenticity, and customer satisfaction, 
            Kioko Enterprise has become a trusted name in the premium beverage industry.
          </p>
          <p>
            Whether you're a connoisseur or just beginning your journey into fine spirits, 
            we have something special for every palate.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Selection</h3>
            <p className="text-gray-600">We source our products from the finest distilleries and wineries across the globe to bring you authentic flavors.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
            <p className="text-gray-600">Every product undergoes rigorous quality checks to ensure you receive only the best beverages.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">We pride ourselves on quick and reliable delivery service across Coastal Kenya.</p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-xl text-white">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">
            To provide exceptional spirits and beverages while creating memorable experiences for our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
