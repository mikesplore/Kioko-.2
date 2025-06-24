import { useState, useEffect } from 'react';
import { Clock, Shield, Award, Star, Phone, MapPin, Truck, Gift } from 'lucide-react';

export default function OaksLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      name: "Premium Whisky Collection",
      originalPrice: "12,589/-",
      currentPrice: "10,469/-",
      rating: 4.67,
      discount: true,
      savingsPercent: 17
    },
    {
      name: "Local Tusker Beer",
      originalPrice: "4,800/-",
      currentPrice: "4,159/-", 
      rating: 4.72,
      discount: true,
      savingsPercent: 13
    },
    {
      name: "Premium Wine Selection",
      currentPrice: "2,999/-",
      rating: 4.50,
      discount: false
    },
    {
      name: "Vodka Premium",
      currentPrice: "2,499/-",
      rating: 4.75,
      discount: false
    }
  ];

  const slides = [
    {
      title: "24/7 Alcohol Delivery in Nairobi",
      subtitle: "Fastest delivery in 10-50 minutes",
      description: "Premium wines, beer, spirits & mixers delivered to your doorstep",
      cta: "Order Now",
      bgGradient: "from-emerald-900 via-emerald-800 to-teal-800"
    },
    {
      title: "Over 600 Drinks in Stock",
      subtitle: "Largest selection in Kenya",
      description: "Local and imported drinks available anytime, anywhere",
      cta: "Browse Collection",
      bgGradient: "from-amber-900 via-orange-800 to-red-800"
    },
    {
      title: "Average Delivery: 23 Minutes",
      subtitle: "Number 1 alcohol delivery service",
      description: "Professional service you can trust",
      cta: "Call 0700 245 245",
      bgGradient: "from-purple-900 via-indigo-800 to-blue-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">OAKS</h1>
                <p className="text-xs text-gray-500">Premium Delivery</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">0700 245 245</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Nairobi Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                🚀 Fastest Alcohol Delivery in Nairobi
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl mb-4 text-emerald-100 font-medium">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-8 text-gray-200 max-w-2xl">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                {slides[currentSlide].cta}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Oaks?</h2>
            <p className="text-xl text-gray-600">Experience the best alcohol delivery service in Nairobi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Average delivery time: 23 minutes anywhere in Nairobi</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Available</h3>
              <p className="text-gray-600">Available every day, any time - even past midnight</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Huge Selection</h3>
              <p className="text-gray-600">600+ products including local and imported drinks</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders above KSH 3,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Drink Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🍷 Shop by Category</h2>
            <p className="text-xl text-gray-600">Explore our complete collection of premium drinks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Wine", icon: "🍷", count: "200+", color: "from-red-500 to-red-700", bgColor: "from-red-50 to-red-100" },
              { name: "Whiskey", icon: "🥃", count: "150+", color: "from-amber-600 to-amber-800", bgColor: "from-amber-50 to-amber-100" },
              { name: "Beer", icon: "🍺", count: "80+", color: "from-yellow-500 to-yellow-700", bgColor: "from-yellow-50 to-yellow-100" },
              { name: "Vodka", icon: "🍸", count: "60+", color: "from-blue-500 to-blue-700", bgColor: "from-blue-50 to-blue-100" },
              { name: "Gin", icon: "🍹", count: "45+", color: "from-emerald-500 to-emerald-700", bgColor: "from-emerald-50 to-emerald-100" },
              { name: "Rum", icon: "🥤", count: "40+", color: "from-purple-500 to-purple-700", bgColor: "from-purple-50 to-purple-100" }
            ].map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`relative w-36 h-44 bg-gradient-to-br ${category.bgColor} rounded-2xl mx-auto mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                  {/* Bottle */}
                  <div className={`absolute inset-4 bg-gradient-to-b ${category.color} rounded-xl flex items-center justify-center shadow-inner`}>
                    <div className="text-white opacity-95">
                      <div className="w-10 h-20 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xs font-bold text-white transform -rotate-90">OAKS</span>
                      </div>
                      <div className="w-8 h-10 bg-white/30 rounded-lg mx-auto backdrop-blur-sm"></div>
                    </div>
                  </div>
                  {/* Icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  {/* Count Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {category.count}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Deals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold mb-4">
              <span>🔥</span>
              <span>Hot Deals</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Deals</h2>
            <p className="text-xl text-gray-600">Limited time offers you don't want to miss</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                    {product.savingsPercent}% OFF
                  </div>
                )}
                
                <div className="aspect-square bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-28 h-36 bg-gradient-to-b from-amber-800 to-amber-900 rounded-xl shadow-2xl flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-20 h-8 bg-white/20 rounded-lg mb-3 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-xs font-bold">PREMIUM</span>
                        </div>
                        <div className="text-3xl">🥃</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg flex items-center justify-center">
                      <Gift className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      {product.rating}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{product.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {product.discount && (
                        <span className="text-gray-500 line-through text-sm mr-2">
                          KSH {product.originalPrice}
                        </span>
                      )}
                      <span className="text-emerald-600 font-bold text-xl">
                        KSH {product.currentPrice}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-5xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-2xl mb-8 text-emerald-100">Get your favorite drinks delivered in 23 minutes</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-xl shadow-2xl transform hover:scale-105">
              🛒 Start Shopping
            </button>
            <div className="flex items-center space-x-3 text-xl">
              <Phone className="w-6 h-6" />
              <span className="font-bold">Call: 0700 245 245</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <h3 className="text-2xl font-bold">OAKS</h3>
              </div>
              <p className="text-gray-400">Premium alcohol delivery service in Nairobi. Fast, reliable, and available 24/7.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Menu</li>
                <li>Delivery Areas</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wine</li>
                <li>Whiskey</li>
                <li>Beer</li>
                <li>Spirits</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0700 245 245</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Oaks Premium Delivery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}