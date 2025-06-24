import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface NavbarProps {
  cartCount?: number;
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Shop',
      href: '/shop/',
      children: [
        { label: 'Whisky', href: '/category/whisky/' },
        { label: 'Wine', href: '/category/wine/' },
        { label: 'Beer', href: '/category/beer/' },
        { label: 'Vodka', href: '/category/vodka/' },
        { label: 'Gin', href: '/category/gin/' },
        { label: 'Rum', href: '/category/rum/' },
      ]
    },
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">O&C</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Oaks & Corks</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.label}
                      <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search drinks..."
                    className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </form>
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
            <a
              href="/account/"
              className="text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
            >
              <User className="h-5 w-5" />
            </a>

            {/* Shopping Cart */}
            <a
              href="/cart/"
              className="relative text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </a>

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
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;