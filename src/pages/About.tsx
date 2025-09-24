import React from 'react';
import { useSelector } from 'react-redux';
import { Heart, Award, Users, Globe } from 'lucide-react';
import { RootState } from '../store/store';
import { translations } from '../utils/translations';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { currentLanguage, darkMode } = useSelector((state: RootState) => state.language);
  const t = translations[currentLanguage];

  return (
    <div className={`min-h-screen transition-colors ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-pink-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.aboutTitle}
            </h1>
            <p className={`text-xl md:text-2xl leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.aboutDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Story
              </h2>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Founded in 2020, StyleHub began as a small boutique with a simple vision: to make high-quality, 
                  fashionable clothing accessible to everyone. What started as a local store has grown into a 
                  global brand that serves customers worldwide.
                </p>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our commitment to quality, sustainability, and customer satisfaction has been the driving 
                  force behind our success. Every piece in our collection is carefully selected or designed 
                  with attention to detail and craftsmanship.
                </p>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Today, we're proud to offer a diverse range of clothing that caters to different styles, 
                  occasions, and budgets, while maintaining our core values of quality and accessibility.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full blur-xl opacity-60" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full blur-xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Values
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'We love fashion and it shows in every piece we create and curate.'
              },
              {
                icon: Award,
                title: 'Quality',
                description: 'Premium materials and exceptional craftsmanship in every product.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building lasting relationships with our customers and partners.'
              },
              {
                icon: Globe,
                title: 'Sustainability',
                description: 'Committed to ethical practices and environmental responsibility.'
              }
            ].map((value, index) => (
              <div key={index} className={`text-center p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
              }`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-pink-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the StyleHub Family
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience fashion that combines quality, style, and affordability
          </p>
          <Link to={'/contact'}>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105">
            Biz bilan bog`laning
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;