import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, CreditCard, DollarSign, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

// Types for the checkout data
interface DeliveryInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  area: string;
  deliveryInstructions: string;
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutProps {
  cartItems?: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({
  cartItems: propCartItems = [],
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || propCartItems;

  // Debug logs
  console.log('Location state:', location.state);
  console.log('Cart items:', cartItems);

  // Redirect to cart if no items
  React.useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      console.log('No cart items found, redirecting to cart');
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  // Prevent rendering if no items
  if (!cartItems || cartItems.length === 0) {
    return null; // Don't render anything while redirecting
  }
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: '',
    deliveryInstructions: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [deliveryTime, setDeliveryTime] = useState('asap');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Currency formatting function for Kenyan Shillings
  const formatKES = (amount: number): string => {
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true
    }).format(amount);
    return `KES ${formatted}`;
  };

  const deliveryFee = 200;

  const subtotal = (cartItems || []).reduce(
    (sum: number, item: CartItem) => sum + (item?.price || 0) * (item?.quantity || 0),
    0
  );
  const grandTotal = subtotal + deliveryFee;

  const handleInputChange = (field: keyof DeliveryInfo, value: string) => {
    setDeliveryInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitOrder = async () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order submitted successfully! You will receive a confirmation SMS shortly.');
    }, 2000);
  };

  const coastalAreas = [
    'Mombasa Island', 'Nyali', 'Bamburi', 'Kisauni', 'Likoni', 'Diani',
    'Ukunda', 'Msambweni', 'Kilifi', 'Malindi', 'Watamu', 'Lamu',
    'Shimoni', 'Kwale', 'Vipingo', 'Mtwapa', 'Shanzu', 'Kanamai',
    'Kikambala', 'Other Coastal Area'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate('/cart')}
            className="flex items-center text-gray-600 hover:text-amber-600 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Cart
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                <h2 className="text-xl font-semibold">Delivery Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={deliveryInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={deliveryInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="0712345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={deliveryInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coastal Area *
                  </label>
                  <select
                    value={deliveryInfo.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select Coastal Area</option>
                    {coastalAreas.map(area => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address *
                  </label>
                  <input
                    type="text"
                    value={deliveryInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Building name, floor, apartment number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Instructions
                  </label>
                  <input
                    type="text"
                    value={deliveryInfo.deliveryInstructions}
                    onChange={(e) => handleInputChange('deliveryInstructions', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Special delivery instructions"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Time */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-amber-600 mr-2" />
                <h2 className="text-xl font-semibold">Delivery Time</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="asap"
                    checked={deliveryTime === 'asap'}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2">
                    <span className="font-medium">ASAP</span>
                    <span className="block text-sm text-gray-500">30-90 minutes</span>
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    value="scheduled"
                    checked={deliveryTime === 'scheduled'}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2">
                    <span className="font-medium">Schedule Delivery</span>
                    <span className="block text-sm text-gray-500">Choose specific time</span>
                  </span>
                </label>
              </div>

              {deliveryTime === 'scheduled' && (
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
                      <option>9:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 1:00 PM</option>
                      <option>1:00 PM - 2:00 PM</option>
                      <option>2:00 PM - 3:00 PM</option>
                      <option>3:00 PM - 4:00 PM</option>
                      <option>4:00 PM - 5:00 PM</option>
                      <option>5:00 PM - 6:00 PM</option>
                      <option>6:00 PM - 7:00 PM</option>
                      <option>7:00 PM - 8:00 PM</option>
                      <option>8:00 PM - 9:00 PM</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-5 w-5 text-amber-600 mr-2" />
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    value="mpesa"
                    checked={paymentMethod === 'mpesa'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <div className="flex items-center ml-3">
                    <img 
                      src="https://png.co.ke/wp-content/uploads/2023/02/Mpesa-Logo.png" 
                      alt="M-Pesa Logo" 
                      className="h-8 w-auto mr-2"
                    />
                    <span className="font-medium">M-Pesa</span>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">Pay via mobile money</span>
                </label>

                <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <DollarSign className="h-5 w-5 text-blue-600 ml-3 mr-2" />
                  <span className="font-medium">Cash on Delivery</span>
                  <span className="ml-auto text-sm text-gray-500">Pay when delivered</span>
                </label>

                <label className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <div className="flex items-center ml-3 space-x-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
                      alt="Visa Logo" 
                      className="h-6 w-auto"
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                      alt="Mastercard Logo" 
                      className="h-6 w-auto"
                    />
                    <span className="font-medium ml-2">Credit/Debit Card</span>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">Pay with card</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              {/* Cart Items */}
              <div className="mb-4">
                {cartItems.length === 0 ? (
                  <div className="text-gray-500 text-sm">No items in cart.</div>
                ) : (
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((item: CartItem, idx: number) => (
                      <li key={idx} className="flex justify-between py-2 text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span>{formatKES(item.price * item.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">{formatKES(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="text-gray-900">{formatKES(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">{formatKES(grandTotal)}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-amber-50 p-3 rounded-md mb-6">
                <div className="flex items-center text-amber-800 text-sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <span>Delivery to Coastal Areas: 30-90min</span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-amber-600 hover:underline">terms and conditions</a>
                    {' '}and{' '}
                    <a href="#" className="text-amber-600 hover:underline">privacy policy</a>
                  </span>
                </label>
              </div>

              {/* Place Order Button */}
              <button 
                onClick={handleSubmitOrder}
                disabled={isProcessing || !agreeToTerms}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  isProcessing || !agreeToTerms
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-amber-600 text-white hover:bg-amber-700'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    Place Order
                  </div>
                )}
              </button>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                  <Shield className="h-3 w-3 mr-1" />
                  Secure checkout powered by SSL encryption
                </div>
                <p className="text-xs text-gray-400">
                  Your payment information is safe and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;