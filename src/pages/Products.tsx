import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Filter, Grid, List } from 'lucide-react';
import { RootState } from '../store/store';
import { translations } from '../utils/translations';
import ProductCard from '../components/ProductCard';
import { Product } from '../store/cartSlice';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Yashil villur',
    price: 105,
    image: 'https://i.pinimg.com/736x/b1/93/10/b1931002a833d4c5ec451dce886d61d4.jpg',
    category: 'Moda'
  },
  {
    id: 2,
    name: 'Qora plashovka',
    price: 225,
    image: 'https://i.pinimg.com/736x/1a/96/26/1a9626f9522aeb4b6b9d3ca77e780868.jpg',
    category: 'Model'
  },
  {
    id: 3,
    name: 'Ko`k Hashamli ko`ylak',
    price: 175,
    image: 'https://i.pinimg.com/736x/d2/28/e5/d228e54c01fe9b83f49bba72cc979955.jpg',
    category: 'Klassik'
  },
  {
    id: 4,
    name: 'Qizil atlas ko`ylak',
    price: 145,
    image: 'https://i.pinimg.com/1200x/fe/7f/6c/fe7f6c579a1f0d5425a8636bc0fe8bb1.jpg',
    category: 'Moda'
  },
  {
    id: 5,
    name: 'Bej rangli shoyi ko`ylak',
    price: 160,
    image: 'https://i.pinimg.com/736x/ab/10/4c/ab104cae548aea21d7d6d01b2d135cb3.jpg',
    category: 'Klassik'
  },
  {
    id: 6,
    name: 'Qora klassik ko`ylak',
    price: 190,
    image: 'https://i.pinimg.com/736x/de/8e/4b/de8e4bb91206a0e78c220317b3055122.jpg',
    category: 'Klassik'
  },
  {
    id: 7,
    name: 'Moviy zamonaviy ko`ylak',
    price: 130,
    image: 'https://i.pinimg.com/736x/82/b0/d8/82b0d8f448c2e371fc356a8e7ae25388.jpg',
    category: 'Model'
  },
  {
    id: 8,
    name: 'Yumshoq pushti ko`ylak',
    price: 155,
    image: 'https://i.pinimg.com/736x/52/af/c0/52afc0800ca7a75e943f9d6a4396df27.jpg',
    category: 'Moda'
  },
  {
    id: 9,
    name: 'Oq uzun ko`ylak',
    price: 210,
    image: 'https://i.pinimg.com/736x/21/09/18/21091830919d755733c19876e499ad65.jpg',
    category: 'Klassik'
  },
  {
    id: 10,
    name: 'Zangori atlas ko`ylak',
    price: 180,
    image: 'https://i.pinimg.com/1200x/83/3e/07/833e07e1b8588a3645d6d567e4c26934.jpg',
    category: 'Model'
  },
  {
    id: 11,
    name: 'Yashil zamonaviy ko`ylak',
    price: 120,
    image: 'https://i.pinimg.com/736x/a3/35/a5/a335a5d7f9df3209a0075bf7a8682e44.jpg',
    category: 'Moda'
  },
  {
    id: 12,
    name: 'To`q sariq ko`ylak',
    price: 170,
    image: 'https://i.pinimg.com/736x/34/11/cb/3411cb4b04f31a8d12257fa71f2debca.jpg',
    category: 'Klassik'
  },
  {
    id: 13,
    name: 'Kumush rangli ko`ylak',
    price: 140,
    image: 'https://i.pinimg.com/1200x/15/14/50/151450c0e803c0eeb5539c2adcb7ac2e.jpg',
    category: 'Model'
  },
  {
    id: 14,
    name: 'Binafsha shoyi ko`ylak',
    price: 185,
    image: 'https://i.pinimg.com/736x/dd/8b/05/dd8b05196f64da3e7b5f8057f059f7e9.jpg',
    category: 'Moda'
  },
  {
    id: 15,
    name: 'Krem rangli uzun ko`ylak',
    price: 195,
    image: 'https://i.pinimg.com/736x/61/19/bd/6119bd9766a3855951a3f9885d68a4ae.jpg',
    category: 'Klassik'
  },
  {
    id: 16,
    name: 'Jigar rangli atlas ko`ylak',
    price: 160,
    image: 'https://i.pinimg.com/736x/c5/bc/b9/c5bcb91e94703317f1f289de4e5e62c6.jpg',
    category: 'Model'
  },
  {
    id: 17,
    name: 'Och pushti ko`ylak',
    price: 110,
    image: 'https://i.pinimg.com/736x/50/2c/ab/502cab090e2641a315a0f0c07f8a5ec4.jpg',
    category: 'Moda'
  },
  {
    id: 18,
    name: 'Qora oq kombinatsiya ko`ylak',
    price: 230,
    image: 'https://i.pinimg.com/736x/5b/09/af/5b09af1345c7496300256f3645f1080d.jpg',
    category: 'Klassik'
  },
  {
    id: 19,
    name: 'To`q ko`k ko`ylak',
    price: 145,
    image: 'https://i.pinimg.com/736x/c6/e6/5f/c6e65fe260b6449ca4bd89002b4b10fe.jpg',
    category: 'Model'
  },
  {
    id: 20,
    name: 'Pushti zamonaviy ko`ylak',
    price: 135,
    image: 'https://i.pinimg.com/1200x/e7/ff/67/e7ff67ab432061a237854668fbc8c79e.jpg',
    category: 'Moda'
  },
  {
    id: 21,
    name: 'Oq Klassik ko`ylak',
    price: 220,
    image: 'https://i.pinimg.com/736x/75/91/20/759120c3486ccfb5fc9775605300f6e2.jpg',
    category: 'Klassik'
  }
];




const categories = ['All', 'Klasik ', 'Moda', 'Model'];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  
  const { currentLanguage, darkMode } = useSelector((state: RootState) => state.language);
  const t = translations[currentLanguage];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className={`min-h-screen transition-colors ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className={`text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t.products}
          </h1>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover our complete collection of premium clothing
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 space-y-6">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`font-semibold text-lg mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category
                        ? darkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-600 text-white'
                        : darkMode
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Showing {sortedProducts.length} products
              </p>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>

                <div className={`flex rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors ${
                      viewMode === 'grid'
                        ? darkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-600 text-white'
                        : darkMode
                          ? 'text-gray-400 hover:bg-gray-700'
                          : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${
                      viewMode === 'list'
                        ? darkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-600 text-white'
                        : darkMode
                          ? 'text-gray-400 hover:bg-gray-700'
                          : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={`text-center py-16 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Filter className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;