import React, { useState, useEffect } from 'react';
import { User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Check current route to highlight active nav item
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const categories = [
    { name: 'All Drinks', value: 'all' },
    { name: 'Whisky', value: 'whisky' },
    { name: 'Wine', value: 'wine' },
    { name: 'Beer', value: 'beer' },
    { name: 'Vodka', value: 'vodka' },
    { name: 'Gin', value: 'gin' },
    { name: 'Rum', value: 'rum' }
  ];

  // Empty space for future handlers if needed

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isShopDropdownOpen) {
        setIsShopDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isShopDropdownOpen]);

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

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
              <KiokoLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Shop with Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/shop');
                  setIsShopDropdownOpen(!isShopDropdownOpen);
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  isActive('/shop')
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
                        navigate(`/shop?category=${category.value}`);
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

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/dashboard"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/dashboard')
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Dashboard
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">

            {/* User Account */}
            <Link 
              to="/login"
              className="text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
            >
              <div className="flex items-center">
                <User className="h-5 w-5" />
                {isAuthenticated && user && (
                  <span className="ml-2 text-sm font-medium">{user.name}</span>
                )}
              </div>
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Link>

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


              <Link
                to="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
              >
                Shop
              </Link>
              
              {/* Mobile Categories */}
              <div className="px-3 py-2">
                <div className="text-xs text-gray-500 mb-1">Shop Categories:</div>
                <div className="flex flex-wrap gap-1">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => {
                        navigate(`/shop?category=${category.value}`);
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-600 rounded transition-colors duration-200"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
              >
                Cart {cartItemCount > 0 && `(${cartItemCount})`}
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
              >
                {isAuthenticated ? 'Account' : 'Login'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;