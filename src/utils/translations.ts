export const translations = {
  uz: {
    // Navbar
    home: 'Bosh sahifa',
    products: 'Mahsulotlar',
    about: 'Haqimizda',
    contact: 'Bog\'lanish',
    cart: 'Savat',
    
    // Home page
    heroTitle: 'Zamonaviy Kiyim Kolleksiyasi',
    heroDescription: 'Eng yangi va sifatli kiyim-kechaklar bilan tanishing. Har bir zamon uchun mukammal uslub.',
    shopNow: 'Products ga o`ting',
    featuredProducts: 'Mashhur Mahsulotlar',
    
    // Products
    addToCart: 'Aloqaga chiqish',
    removeFromCart: 'Savatdan olib tashlash',
    inCart: 'Savatda',
    
    // About
    aboutTitle: 'Bizning Missiyamiz',
    aboutDescription: 'Biz yuqori sifatli kiyim-kechaklar yetkazib berishga intilamiz. Har bir mijozimiz uchun mukammal xizmat ko\'rsatish bizning asosiy maqsadimizdir.',
    
    // Contact
    contactTitle: 'Biz bilan bog\'laning',
    name: 'Ism',
    email: 'Email',
    message: 'Xabar',
    send: 'Yuborish',
    contactInfo: 'Aloqa ma\'lumotlari',
    address: 'Manzil: Jizzax viloyati Zarbdor tumani',
    phone: 'Telefon: +998 ',
    
    // Footer
    footerDescription: 'Yuqori sifatli kiyim-kechaklar va mukammal xizmat.',
    allRightsReserved: 'Barcha huquqlar himoyalangan.',
    
    // Language names
    uzbek: 'O\'zbek',
    english: 'English',
    russian: 'Русский'
  },
  en: {
    // Navbar
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact Us',
    cart: 'Cart',
    
    // Home page
    heroTitle: 'Modern Clothing Collection',
    heroDescription: 'Discover the latest and highest quality clothing. Perfect style for every occasion.',
    shopNow: 'Shop Now',
    featuredProducts: 'Featured Products',
    
    // Products
    addToCart: 'Contact us',
    removeFromCart: 'Remove',
    inCart: 'In Cart',
    
    // About
    aboutTitle: 'Our Mission',
    aboutDescription: 'We strive to deliver high-quality clothing and exceptional service. Providing perfect experience for each of our customers is our main goal.',
    
    // Contact
    contactTitle: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    contactInfo: 'Contact Information',
    address: 'Address: Jizzax viloyati Zarbdor tumani',
    phone: 'Phone: +998 ',
    
    // Footer
    footerDescription: 'High-quality clothing and exceptional service.',
    allRightsReserved: 'All rights reserved.',
    
    // Language names
    uzbek: 'Uzbek',
    english: 'English',
    russian: 'Russian'
  },
  ru: {
    // Navbar
    home: 'Главная',
    products: 'Товары',
    about: 'О нас',
    contact: 'Контакты',
    cart: 'Корзина',
    
    // Home page
    heroTitle: 'Современная Коллекция Одежды',
    heroDescription: 'Откройте для себя новейшую и качественную одежду. Идеальный стиль для любого случая.',
    shopNow: 'Купить сейчас',
    featuredProducts: 'Популярные Товары',
    
    // Products
    addToCart: 'В корзину',
    removeFromCart: 'Убрать из корзины',
    inCart: 'В корзине',
    
    // About
    aboutTitle: 'Наша Миссия',
    aboutDescription: 'Мы стремимся предоставить высококачественную одежду и исключительный сервис. Обеспечение идеального опыта для каждого клиента - наша главная цель.',
    
    // Contact
    contactTitle: 'Свяжитесь с нами',
    name: 'Имя',
    email: 'Email',
    message: 'Сообщение',
    send: 'Отправить',
    contactInfo: 'Контактная информация',
    address: 'Адрес: Jizzax viloyati Zarbdor tumani',
    phone: 'Телефон: +998 ',
    
    // Footer
    footerDescription: 'Высококачественная одежда и исключительный сервис.',
    allRightsReserved: 'Все права защищены.',
    
    // Language names
    uzbek: 'Узбекский',
    english: 'Английский',
    russian: 'Русский'
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;