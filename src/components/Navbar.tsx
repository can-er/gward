import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-widest text-forest leading-none">GWARD</span>
            <span className="text-[10px] text-pine tracking-wider uppercase">{t('footer.tagline')}</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-forest hover:text-emerald font-medium transition-colors">
            {t('navbar.features')}
          </a>
          <a href="#waitlist" className="text-forest hover:text-emerald font-medium transition-colors">
            {t('navbar.pricing')}
          </a>
          <a href="#about" className="text-forest hover:text-emerald font-medium transition-colors">
            {t('navbar.about')}
          </a>
          
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1 text-forest hover:text-emerald font-medium transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{i18n.language}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 min-w-[120px] border border-mist">
                <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-2 hover:bg-page-bg text-forest">Français</button>
                <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 hover:bg-page-bg text-forest">English</button>
                <button onClick={() => changeLanguage('nl')} className="block w-full text-left px-4 py-2 hover:bg-page-bg text-forest">Nederlands</button>
              </div>
            )}
          </div>

          <a 
            href="#waitlist" 
            className="bg-emerald hover:bg-pine text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg animate-pulse hover:animate-none"
          >
            {t('navbar.cta')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-forest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-mist shadow-lg py-4 px-4 flex flex-col gap-4"
        >
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-forest font-medium py-2 border-b border-mist/50">
            {t('navbar.features')}
          </a>
          <a href="#waitlist" onClick={() => setIsMobileMenuOpen(false)} className="text-forest font-medium py-2 border-b border-mist/50">
            {t('navbar.pricing')}
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-forest font-medium py-2 border-b border-mist/50">
            {t('navbar.about')}
          </a>
          
          <div className="flex gap-4 py-2">
            <button onClick={() => changeLanguage('fr')} className={`font-medium ${i18n.language === 'fr' ? 'text-emerald' : 'text-forest'}`}>FR</button>
            <button onClick={() => changeLanguage('en')} className={`font-medium ${i18n.language === 'en' ? 'text-emerald' : 'text-forest'}`}>EN</button>
            <button onClick={() => changeLanguage('nl')} className={`font-medium ${i18n.language === 'nl' ? 'text-emerald' : 'text-forest'}`}>NL</button>
          </div>

          <a 
            href="#waitlist" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-emerald text-white text-center px-6 py-3 rounded-full font-medium mt-2"
          >
            {t('navbar.cta')}
          </a>
        </motion.div>
      )}
    </nav>
  );
};
