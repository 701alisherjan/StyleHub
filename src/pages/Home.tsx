import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowRight, Star, Users, Truck, Shield } from 'lucide-react';
import { RootState } from '../store/store';
import { translations } from '../utils/translations';
import ProductCard from '../components/ProductCard';
import { Product } from '../store/cartSlice';

// Sample featured products
const featuredProducts: Product[] = [
 {
    id: 1,
    name: 'Modeler design ko`ylagi',
    price: 145,
    image: 'https://i.pinimg.com/736x/7d/5b/e7/7d5be7e39e17d472c44fefb40653d65f.jpg',
    category: ''
  },
   {
    id: 2,
    name: 'Oq qaqnus modeli',
    price: 200,
    image: 'https://i.pinimg.com/736x/f6/92/f9/f692f9006f7853f14d17fe577cc8996e.jpg',
    category: ''
  },
  {
    id: 3,
    name: 'Qizil KIMONO',
    price: 120,
    image: 'https://i.pinimg.com/736x/de/af/4f/deaf4f402c7512c477d3e5cfd7a3aa71.jpg',
    category: ''
  },
  {
    id: 4,
    name: 'Luan Flipe ko`ylagi',
    price: 100,
    image: 'https://i.pinimg.com/1200x/6e/0b/f9/6e0bf9eb421cee08d68fdd924508258b.jpg',
    category: ''
  }
];

const Home: React.FC = () => {
  const { currentLanguage, darkMode } = useSelector((state: RootState) => state.language);
  const t = translations[currentLanguage];

  return (
    <div className={`min-h-screen transition-colors ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-pink-600 opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {t.heroDescription}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <span>{t.shopNow}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Premium Quality', desc: 'High-quality materials and craftsmanship' },
              { icon: Users, title: 'Expert Team', desc: 'Professional fashion designers' },
              { icon: Truck, title: 'Fast Shipping', desc: 'Free delivery on orders over $50' },
              { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout process' }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.featuredProducts}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover our handpicked selection of trending styles and timeless classics
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className={`inline-flex items-center space-x-2 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-pink-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in Style
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for exclusive offers and latest fashion trends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;