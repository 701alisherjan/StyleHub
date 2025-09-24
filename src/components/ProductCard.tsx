import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Check } from 'lucide-react';
import { RootState } from '../store/store';
import { addToCart, removeFromCart, Product } from '../store/cartSlice';
import { translations } from '../utils/translations';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { currentLanguage, darkMode } = useSelector((state: RootState) => state.language);
  const cart = useSelector((state: RootState) => state.cart);
  const t = translations[currentLanguage];

  const isInCart = cart.items.some(item => item.id === product.id);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <Link to={'/contact'}>
    <div className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border`}>
      {/* Product Image */}
      
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className={`font-semibold text-lg leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {product.name}
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {product.category}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className={`text-2xl font-bold ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              ${product.price}
            </span>
                 
            <button
              onClick={handleCartAction}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isInCart
                  ? darkMode
                    ? 'bg-green-700 hover:bg-green-600 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                  : darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
              } hover:scale-105 hover:shadow-lg`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm">{t.inCart}</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
          
                  <span className="text-sm">{t.addToCart}</span>
              
                </>
              )}
            </button>
            
          </div>
        </div>
      </div>

      {/* Hover overlay for better interaction */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        darkMode 
          ? 'ring-blue-500/50 group-hover:ring-2' 
          : 'ring-blue-500/30 group-hover:ring-2'
      }`} />
    </div>
    </Link>
  );
};

export default ProductCard;