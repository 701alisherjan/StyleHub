import React from 'react';
import { useSelector } from 'react-redux';
import { Shirt, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { RootState } from '../store/store';
import { translations } from '../utils/translations';

const Footer: React.FC = () => {
  const { currentLanguage, darkMode } = useSelector((state: RootState) => state.language);
  const t = translations[currentLanguage];

  return (
    <footer className={`transition-colors ${
      darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-600'
    } border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shirt className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                StyleHub
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {t.footerDescription}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-pink-600 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-pink-600 text-gray-600 hover:text-white'
                } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-blue-500 text-gray-600 hover:text-white'
                } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.contactInfo}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">info@stylehub.uz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { label: t.home, href: '#' },
                { label: t.products, href: '#' },
                { label: t.about, href: '#' },
                { label: t.contact, href: '#' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block text-sm transition-colors ${
                    darkMode 
                      ? 'hover:text-blue-400' 
                      : 'hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        } flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0`}>
          <p className="text-sm">
            © {new Date().getFullYear()} StyleHub. {t.allRightsReserved}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;