import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/contact';
import Login from './pages/login';
import Cart from './pages/Cart';
import DebugStyles from './components/DebugStyles';
import TailwindTest from './components/TailwindTest';
import { useState } from 'react';

import './styles/App.css';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

function App() {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  // Sample products data
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

  // Cart functions
  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateCartQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => ({
      ...prev,
      [productId]: newQuantity
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar cartItemCount={getTotalCartItems()} />
        <main className="flex-1">
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/shop" element={<Shop products={products} addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={
                <Cart 
                  cart={cart} 
                  products={products}
                  updateQuantity={updateCartQuantity} 
                  removeFromCart={removeFromCart} 
                />
              } />
              <Route path="/debug-styles" element={<DebugStyles />} />
              <Route path="/tailwind-test" element={<TailwindTest />} />
              {/* Add more routes here as you create more pages */}
            </Routes>
          </Layout>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
