import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield, Lock, Zap } from 'lucide-react';
import { Logo } from './Logo';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-page-bg">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-mist/30 blur-3xl opacity-50" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-mint/20 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest leading-tight mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-pine mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {t('hero.subheadline')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <a 
                href="#audit" 
                className="w-full sm:w-auto bg-emerald hover:bg-pine text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a 
                href="#how-it-works" 
                className="w-full sm:w-auto bg-transparent border-2 border-emerald text-emerald hover:bg-emerald/5 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 text-center"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-medium text-pine/80">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇨🇭</span>
                <span>{t('hero.badge1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald" />
                <span>{t('hero.badge2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald" />
                <span>{t('hero.badge3')}</span>
              </div>
            </div>
          </motion.div>

          {/* Visual / Illustration */}
          <motion.div 
            className="flex-1 w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square rounded-full bg-gradient-to-tr from-mist/40 to-mint/20 flex items-center justify-center p-12 shadow-2xl shadow-emerald/10 border border-white/50 backdrop-blur-sm">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-full h-full"
              >
                <Logo className="w-full h-full drop-shadow-xl" />
              </motion.div>
              
              {/* Radar sweep effect */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-emerald/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 80%, rgba(61, 122, 95, 0.1) 100%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
