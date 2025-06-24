import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Contact from './pages/contact';
import Login from './pages/login';

import './styles/App.css';

function App() {
  return (
    <AuthProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Layout>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
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
