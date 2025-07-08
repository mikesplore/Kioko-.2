import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, Plus, ChevronDown } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Whisky Reserve',
      category: 'whisky',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=300&fit=crop',
      description: 'Aged 12 years, smooth and rich flavor profile'
    },
    {
      id: '2',
      name: 'Bordeaux Red Wine',
      category: 'wine',
      price: 45.50,
      image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=300&h=300&fit=crop',
      description: 'Full-bodied red wine with complex tannins'
    },
    {
      id: '3',
      name: 'Craft IPA Beer',
      category: 'beer',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=300&fit=crop',
      description: 'Hoppy and refreshing craft beer'
    },
    {
      id: '4',
      name: 'Premium Vodka',
      category: 'vodka',
      price: 35.99,
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=300&fit=crop',
      description: 'Crystal clear, smooth finish vodka'
    },
    {
      id: '5',
      name: 'London Dry Gin',
      category: 'gin',
      price: 42.75,
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop',
      description: 'Botanical blend with juniper notes'
    },
    {
      id: '6',
      name: 'Caribbean Rum',
      category: 'rum',
      price: 38.99,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=300&fit=crop',
      description: 'Smooth golden rum with vanilla notes'
    },
    {
      id: '7',
      name: 'Single Malt Scotch',
      category: 'whisky',
      price: 125.00,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=300&fit=crop',
      description: 'Aged 18 years, peaty and complex'
    },
    {
      id: '8',
      name: 'Champagne Brut',
      category: 'wine',
      price: 68.99,
      image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=300&h=300&fit=crop',
      description: 'Crisp and elegant sparkling wine'
    }
  ];

  const categories = [
    { name: 'All Drinks', value: 'all' },
    { name: 'Whisky', value: 'whisky' },
    { name: 'Wine', value: 'wine' },
    { name: 'Beer', value: 'beer' },
    { name: 'Vodka', value: 'vodka' },
    { name: 'Gin', value: 'gin' },
    { name: 'Rum', value: 'rum' }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const KiokoLogo = () => (
    <div className="flex items-center relative">
      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg relative overflow-hidden">
        <span className="text-white font-bold text-lg z-10">KE</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
        <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-80 animate-ping"></div>
      </div>
      <div className="relative">
        <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Kioko Enterprise
        </span>
        <div className="absolute -top-2 -right-6 text-xs text-amber-400 opacity-70 transform rotate-12 animate-bounce">
          ✨
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 opacity-60"></div>
      </div>
    </div>
  );

  const ShopPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Drinks Collection</h1>
        <p className="text-gray-600">Discover our curated selection of fine spirits and beverages</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {product.category.toUpperCase()}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <button onClick={() => setCurrentPage('home')} className="flex items-center hover:scale-105 transition-transform duration-200">
                <KiokoLogo />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === 'home'
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Home
              </button>
              
              {/* Shop with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                    currentPage === 'shop'
                      ? 'text-amber-600 border-b-2 border-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  <span>Shop</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isShopDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => {
                          setCurrentPage('shop');
                          setIsShopDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setCurrentPage('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === 'about'
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                About
              </button>
              
              <button
                onClick={() => setCurrentPage('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === 'contact'
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search drinks..."
                      className="w-64 pl-4 pr-10 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* User Account */}
              <button className="text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>

              {/* Shopping Cart */}
              <button className="relative text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5" />
                {getTotalCartItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {getTotalCartItems() > 9 ? '9+' : getTotalCartItems()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-amber-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('shop');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
                >
                  Shop
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                  Welcome to Kioko Enterprise
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Your premium destination for fine spirits and beverages. Experience the finest collection of drinks from around the world.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-50 transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
        {currentPage === 'about' && (
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
            </div>
          </div>
        )}
        {currentPage === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
              <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
                <p>
                  Get in touch with our team for any inquiries about our products or services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-amber-600 mb-2">Email</h3>
                    <p>info@kiokoenterprise.com</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-amber-600 mb-2">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-amber-600 mb-2">Address</h3>
                    <p>123 Premium Street<br />Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Navbar;