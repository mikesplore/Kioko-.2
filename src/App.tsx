import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/contact';
import LoginComponent from './pages/login';
import Cart from './pages/Cart';
import DebugStyles from './components/DebugStyles';
import TailwindTest from './components/TailwindTest';
import { useState } from 'react';

import './styles/App.css';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // Changed to number to store raw price
  image: string;
  description: string;
  formattedPrice?: string; // Optional formatted price display
}

function App() {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  // Currency formatting function for Kenyan Shillings
  const formatKES = (amount: number): string => {
    // Format number with commas and 2 decimal places
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true
    }).format(amount);
    
    return `KES ${formatted}`;
  };

  // Expanded products data with Kenya drinks (prices in Kenyan Shillings)
  const products: Product[] = [
    // WHISKY
    {
      id: '1',
      name: 'Johnnie Walker Black Label',
      category: 'whisky',
      price: 4500, // Store as raw number
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=300&fit=crop',
      description: 'Premium Scotch whisky, aged 12 years with rich smoky flavor'
    },
    {
      id: '2',
      name: 'Jack Daniels Old No.7',
      category: 'whisky',
      price: 3800,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/06/Greenspoon-Kenya-Jack-Daniels-Whiskey.jpg',
      description: 'Tennessee whiskey with smooth vanilla and caramel notes'
    },
    {
      id: '3',
      name: 'Jameson Irish Whiskey',
      category: 'whisky',
      price: 3200,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/09/Greenspoon-Jameson-Irish-Whiskey.jpg',
      description: 'Triple distilled Irish whiskey, smooth and approachable'
    },
    {
      id: '4',
      name: 'Macallan 12 Year Old',
      category: 'whisky',
      price: 8500,
      image: 'https://villagemarketcellar.co.ke/cdn/shop/products/macallan-12-year-old-double-cask-p258-6268_image.jpg?v=1633093049',
      description: 'Single malt Scotch whisky, aged in sherry oak casks'
    },
    {
      id: '5',
      name: 'Chivas Regal 12',
      category: 'whisky',
      price: 4200,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/09/Greenspoon-Chivas-Regal-12-Year.jpg',
      description: 'Blended Scotch whisky with honey and vanilla flavors'
    },

    // WINE
    {
      id: '6',
      name: 'Nederburg Cabernet Sauvignon',
      category: 'wine',
      price: 2100,
      image: 'https://res.cloudinary.com/dyc0ieeyu/image/upload/c_fit,f_auto/v1/products/nederburg-cabernet-sauvignon.jpg',
      description: 'South African red wine with bold berry flavors'
    },
    {
      id: '7',
      name: 'Drostdy-Hof Sauvignon Blanc',
      category: 'wine',
      price: 1800,
      image: 'https://www.oaks.delivery/wp-content/uploads/Copy-of-Copy-of-Social-Media-Product-Ad-800-x-800-px-93.png',
      description: 'Crisp white wine with tropical fruit aromas'
    },
    {
      id: '8',
      name: 'Boschendal Brut',
      category: 'wine',
      price: 2800,
      image: 'https://shop.boschendal.com/cdn/shop/files/BEV0000212_2728927d-234c-4d49-b8fc-a9a7a5d05b2f.jpg?v=1685541372',
      description: 'Elegant sparkling wine with fine bubbles'
    },
    {
      id: '9',
      name: 'Amarula Cream Liqueur',
      category: 'wine',
      price: 2200,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/07/Greenspoon-Kenya-Amarula.jpg',
      description: 'Creamy liqueur made from African marula fruit'
    },
    {
      id: '10',
      name: 'Stellenbosch Merlot',
      category: 'wine',
      price: 1900,
      image: 'https://farmersbar.com.my/cdn/shop/products/IMG_8256_467x700.jpg?v=1679022076',
      description: 'Medium-bodied red wine with plum and cherry notes'
    },

    // BEER
    {
      id: '11',
      name: 'Tusker Lager',
      category: 'beer',
      price: 180,
      image: 'https://villagemarketcellar.co.ke/cdn/shop/products/TUSKERLAGERBOTTLE500ML.png?v=1627644842',
      description: 'Kenya\'s finest lager beer - "Bia yangu, Nchi yangu"'
    },
    {
      id: '12',
      name: 'White Cap Lager',
      category: 'beer',
      price: 170,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2023/02/Greenspoon-Kenya-White-Cap-Can.jpg',
      description: 'Premium Kenyan lager named after Mount Kenya'
    },
    {
      id: '13',
      name: 'Tusker Malt',
      category: 'beer',
      price: 200,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2023/02/Greenspoon-Kenya-Tusker-Malt-Can.jpg',
      description: 'Premium malt lager with rich, smooth flavor'
    },
    {
      id: '14',
      name: 'Pilsner Lager',
      category: 'beer',
      price: 160,
      image: 'https://www.havenwines.co.ke/wp-content/uploads/2021/08/Pilsner-Lager-Beer-500ml.jpg',
      description: 'Classic Kenyan pilsner with crisp, clean taste'
    },
    {
      id: '15',
      name: 'Heineken',
      category: 'beer',
      price: 220,
      image: 'https://jayswines.com/wp-content/uploads/2022/08/Heineken-Zero-330ml.png',
      description: 'International premium lager beer'
    },
    {
      id: '16',
      name: 'Tusker Ndimu',
      category: 'beer',
      price: 190,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2023/12/greenspoon-Tusker-Ndimu-5425.jpg',
      description: 'Refreshing lemon-flavored beer with citrus burst'
    },

    // VODKA
    {
      id: '17',
      name: 'Smirnoff Red Label',
      category: 'vodka',
      price: 1400,
      image: 'https://jayswines.com/wp-content/uploads/2015/04/smirnoff-350ml.jpg',
      description: 'World\'s most popular vodka, triple distilled'
    },
    {
      id: '18',
      name: 'Absolut Vodka',
      category: 'vodka',
      price: 2100,
      image: 'https://res.cloudinary.com/dyc0ieeyu/image/upload/c_fit,f_auto,h_700,w_700/v1/products/absolut-raspberri.jpg',
      description: 'Premium Swedish vodka with clean, crisp taste'
    },
    {
      id: '19',
      name: 'Ciroc Premium Vodka',
      category: 'vodka',
      price: 4800,
      image: 'https://www.oaks.delivery/wp-content/uploads/ciroc-pineapple.jpg',
      description: 'Ultra-premium vodka made from French grapes'
    },
    {
      id: '20',
      name: 'Grey Goose Vodka',
      category: 'vodka',
      price: 5200,
      image: 'https://soys.co.ke/PImages/PFHPF-0.jpg',
      description: 'French premium vodka with exceptional smoothness'
    },
    {
      id: '21',
      name: 'Belvedere Vodka',
      category: 'vodka',
      price: 4500,
      image: 'https://www.oaks.delivery/wp-content/uploads/Copy-of-Copy-of-Social-Media-Product-Ad-800-x-800-px-62-1.png',
      description: 'Polish luxury vodka with pure, clean character'
    },

    // GIN
    {
      id: '22',
      name: 'Tanqueray London Dry Gin',
      category: 'gin',
      price: 2800,
      image: 'https://res.cloudinary.com/dyc0ieeyu/image/upload/c_fit,f_auto,h_700,w_700/v1/products/mjumzgiueaxkl7wifhnp.png',
      description: 'Classic London Dry Gin with juniper and citrus'
    },
    {
      id: '23',
      name: 'Bombay Sapphire',
      category: 'gin',
      price: 3200,
      image: 'https://jayswines.com/wp-content/uploads/2015/04/Bombay-Sapphire-750ml.jpeg',
      description: 'Premium gin with 10 botanicals for complex flavor'
    },
    {
      id: '24',
      name: 'Hendricks Gin',
      category: 'gin',
      price: 4100,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/06/Greenspoon-hendricks-gin-2-of-1.jpg',
      description: 'Unique gin infused with cucumber and rose petals'
    },
    {
      id: '25',
      name: 'Gordon\'s London Dry Gin',
      category: 'gin',
      price: 1800,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/07/Greenspoon-Kenya-Gordons-London-Dry-Gin.jpg',
      description: 'Triple-distilled gin with distinctive juniper taste'
    },
    {
      id: '26',
      name: 'Beefeater London Dry Gin',
      category: 'gin',
      price: 2200,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/09/Greenspoon-Beefeater-London-Dry-Gin.jpg',
      description: 'Traditional London Dry Gin with bold juniper flavor'
    },

    // RUM
    {
      id: '27',
      name: 'Captain Morgan Spiced Rum',
      category: 'rum',
      price: 2100,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2022/06/GREENSPOON-Captain-morgan-spiced-gold-1-of-1.jpg',
      description: 'Golden spiced rum with vanilla and caramel notes'
    },
    {
      id: '28',
      name: 'Bacardi Superior White Rum',
      category: 'rum',
      price: 1800,
      image: 'https://aem.lcbo.com/content/dam/lcbo/products/0/0/0/5/000596.jpg.thumb.1280.1280.jpg',
      description: 'Light, crisp white rum perfect for cocktails'
    },
    {
      id: '29',
      name: 'Havana Club 3 Year',
      category: 'rum',
      price: 2400,
      image: 'https://shreeramkenya.com/wp-content/uploads/2021/10/IMG_8467-scaled.jpg',
      description: 'Cuban rum aged for 3 years with smooth character'
    },
    {
      id: '30',
      name: 'Malibu Coconut Rum',
      category: 'rum',
      price: 1900,
      image: 'https://www.montyskenya.com/wp-content/uploads/2020/05/Malibu-coconut.jpg',
      description: 'Caribbean rum with natural coconut flavor'
    },
    {
      id: '31',
      name: 'Appleton Estate Signature Blend',
      category: 'rum',
      price: 2600,
      image: 'https://content.thirtyonewhiskey.com/wp-content/uploads/2022/04/03095307/PXL_20220403_134709219.PORTRAIT-880x660.jpg',
      description: 'Premium Jamaican rum with rich, complex flavor'
    },
    {
      id: '32',
      name: 'Lamb\'s Navy Rum',
      category: 'rum',
      price: 2000,
      image: 'https://soys.co.ke/PImages/LATLE-0.png',
      description: 'Dark navy rum with bold, full-bodied taste'
    },

    // WATER
    {
      id: '33',
      name: 'Dasani Drinking Water 500ml',
      category: 'water',
      price: 50,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2024/06/Greenspoon-dasani-1L-1-of-1.jpg',
      description: 'Pure, refreshing drinking water in convenient bottle'
    },
    {
      id: '34',
      name: 'Keringet Natural Mineral Water 500ml',
      category: 'water',
      price: 80,
      image: 'https://www.oaks.delivery/wp-content/uploads/keringet-natural.jpg',
      description: 'Natural mineral water from the Kenyan highlands'
    },
    {
      id: '35',
      name: 'Aquafina Purified Water 500ml',
      category: 'water',
      price: 60,
      image: 'https://cdn.mafrservices.com/sys-master-root/ha4/hfb/13723583840286/870051_main.jpg?im=Resize=480',
      description: 'Pure, crisp taste with 7-step purification process'
    },
    {
      id: '36',
      name: 'Evian Natural Spring Water 500ml',
      category: 'water',
      price: 150,
      image: 'https://barkeeper.co.za/wp-content/uploads/2024/06/Evian-500ml-Natural-Spring-Water.png',
      description: 'Premium natural spring water from French Alps'
    },
    {
      id: '37',
      name: 'Highlands Natural Mineral Water 1.5L',
      category: 'water',
      price: 120,
      image: 'https://digitalcontent.api.tesco.com/v2/media/ghs/d2e0a0c1-f235-41b0-a7d3-7e9969195007/2baaf7bb-0331-4f92-a7aa-4fd2bd5366a0_1767530515.jpeg?h=960&w=960',
      description: 'Large bottle of natural mineral water for sharing'
    },
    {
      id: '38',
      name: 'Maji Safi Bottled Water 500ml',
      category: 'water',
      price: 45,
      image: 'https://nordlys.co.ke/wp-content/uploads/2023/10/download-29-1.jpeg',
      description: 'Clean, affordable bottled water for everyday hydration'
    },

    // SOFT DRINKS
    {
      id: '39',
      name: 'Coca-Cola Original 500ml',
      category: 'soft-drinks',
      price: 100,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=300&fit=crop',
      description: 'The original and iconic cola with that classic taste'
    },
    {
      id: '40',
      name: 'Pepsi Cola 500ml',
      category: 'soft-drinks',
      price: 95,
      image: 'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?w=300&h=300&fit=crop',
      description: 'Bold cola taste with a refreshing twist'
    },
    {
      id: '41',
      name: 'Fanta Orange 500ml',
      category: 'soft-drinks',
      price: 90,
      image: 'https://www.myccba.africa/media/catalog/product/cache/5479647258cfabec4d973a924b24e3d0/1/1/11278.jpg',
      description: 'Bright orange soda with natural citrus flavor'
    },
    {
      id: '42',
      name: 'Sprite Lemon-Lime 500ml',
      category: 'soft-drinks',
      price: 90,
      image: 'https://i0.wp.com/liquorsquare.store/wp-content/uploads/2024/03/Sprite-Lemon-Lime-Flavoured-Soda-500ml.jpg?fit=1000%2C1000&ssl=1',
      description: 'Clear, crisp lemon-lime soda with no caffeine'
    },
    {
      id: '43',
      name: 'Stoney Tangawizi Ginger Ale 500ml',
      category: 'soft-drinks',
      price: 85,
      image: 'https://www.oaks.delivery/wp-content/uploads/stoney-zero-sugar-500ml.jpg',
      description: 'Spicy ginger ale with authentic African ginger taste'
    },
    {
      id: '44',
      name: 'Schweppes Tonic Water 500ml',
      category: 'soft-drinks',
      price: 110,
      image: 'https://www.oaks.delivery/wp-content/uploads/2017/09/schweppes-tonic-500.jpg',
      description: 'Classic tonic water with distinctive bitter taste'
    },
    {
      id: '45',
      name: 'Krest Bitter Lemon 500ml',
      category: 'soft-drinks',
      price: 95,
      image: 'https://www.vintageliquorkenya.com/wp-content/uploads/2021/12/Krest-Bitter-Lemon-500ml.jpg',
      description: 'Refreshing bitter lemon drink with citrus zest'
    },
    {
      id: '46',
      name: 'Mountain Dew 500ml',
      category: 'soft-drinks',
      price: 105,
      image: 'https://media.edgexm.co.ke/photos/products/Mountain_Dew_Pet_Bottle_500ml.jpg',
      description: 'Citrus soda with bold, energizing taste'
    },
    {
      id: '47',
      name: '7UP Lemon Lime 500ml',
      category: 'soft-drinks',
      price: 88,
      image: 'https://www.drinksupermarket.com/media/catalog/product/cache/5f04ab24719be9ed8cd6e7041fccd020/7/u/7up-lemon-lime-500ml.jpg',
      description: 'Clean, refreshing lemon-lime soda'
    },
    {
      id: '48',
      name: 'Mirinda Orange 500ml',
      category: 'soft-drinks',
      price: 92,
      image: 'https://foodbazaar.co.uk/cdn/shop/products/MIRINDA-ORANGE-BOTTLE-500ml-1.png?v=1671449350',
      description: 'Fruity orange soda with vibrant citrus flavor'
    },

    // ENERGY DRINKS
    {
      id: '49',
      name: 'Red Bull Energy Drink 250ml',
      category: 'energy-drinks',
      price: 250,
      image: 'https://www.mrprice.online/cdn/shop/files/mrprice-online-fitness-equipment-accessories-default-title-red-bull-energy-drink-250ml-can-56428835045712.jpg?v=1742818498',
      description: 'Original energy drink with caffeine, taurine and B-vitamins'
    },
    {
      id: '50',
      name: 'Monster Energy Green 500ml',
      category: 'energy-drinks',
      price: 280,
      image: 'https://cdn.mafrservices.com/sys-master-root/h73/h53/16872066547742/33440_main.jpg?im=Resize=480',
      description: 'High-energy drink with bold flavor and maximum boost'
    },
    {
      id: '51',
      name: 'Power Horse Energy Drink 250ml',
      category: 'energy-drinks',
      price: 180,
      image: 'https://cdn.mafrservices.com/sys-master-root/h62/hf8/12618778542110/123067_Main.jpg?im=Resize=1700',
      description: 'Energy drink with vitamins and natural caffeine'
    },
    {
      id: '55',
      name: 'Predator Energy Drink 250ml',
      category: 'energy-drinks',
      price: 160,
      image: 'https://www.tawalasupermarket.co.ke/1733-large_default/predator-energy-drink-pet-400ml.jpg',
      description: 'Affordable energy drink with great taste'
    },
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

  // Add formatted prices to products
  const productsWithFormattedPrices = products.map(product => ({
    ...product,
    formattedPrice: formatKES(product.price)
  }));

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar cartItemCount={getTotalCartItems()} />
        <main className="flex-1">
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/shop" element={<Shop products={productsWithFormattedPrices} addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/cart" element={
                 
                <Cart 
                  cart ={cart} 
                  products={productsWithFormattedPrices} 
                  updateCartQuantity={updateCartQuantity} 
                  removeFromCart={removeFromCart} 
                />
              } />
              <Route path="/debug-styles" element={<DebugStyles />} />
              <Route path="/tailwind-test" element={<TailwindTest />} />
            </Routes>
          </Layout>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;