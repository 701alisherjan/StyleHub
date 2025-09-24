import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown } from 'lucide-react';
import { RootState } from '../store/store';
import { setLanguage } from '../store/languageSlice';
import { Language, translations } from '../utils/translations';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'uz', name: 'uzbek', flag: '🇺🇿' },
  { code: 'en', name: 'english', flag: '🇬🇧' },
  { code: 'ru', name: 'russian', flag: '🇷🇺' }
];

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { currentLanguage, darkMode } = useSelector((state: RootState) => state.language);
  const [isOpen, setIsOpen] = React.useState(false);
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[1];
  const t = translations[currentLanguage];

  const handleLanguageChange = (langCode: Language) => {
    dispatch(setLanguage(langCode));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
          darkMode 
            ? 'border-gray-600 bg-gray-800 text-white hover:bg-gray-700' 
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium">{t[currentLang.name as keyof typeof t]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute top-full right-0 mt-1 w-48 rounded-lg border shadow-lg z-50 ${
          darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors hover:bg-opacity-80 ${
                currentLanguage === lang.code
                  ? darkMode 
                    ? 'bg-blue-900 text-blue-200' 
                    : 'bg-blue-50 text-blue-600'
                  : darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{t[lang.name as keyof typeof t]}</span>
            </button>
          ))}
        </div>
      )}
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSelector;