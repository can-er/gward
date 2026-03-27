import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-mist/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-widest text-forest leading-none">GWARD</span>
                <span className="text-[9px] text-pine tracking-wider uppercase">{t('footer.tagline')}</span>
              </div>
            </div>
            <p className="text-sm text-pine/80 leading-relaxed max-w-xs mb-6">
              {t('hero.subheadline')}
            </p>
            <div className="inline-flex items-center gap-2 bg-page-bg border border-mist px-3 py-1.5 rounded-md text-xs font-medium text-forest">
              <span>{t('footer.hosted')}</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1">
            <h4 className="font-bold text-forest mb-6 uppercase tracking-wider text-sm">{t('footer.product')}</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.features')}</a></li>
              <li><a href="#waitlist" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.pricing')}</a></li>
              <li><a href="#" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.security')}</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-forest mb-6 uppercase tracking-wider text-sm">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.about')}</a></li>
              <li><a href="#contact" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.contact')}</a></li>
              <li><a href="#" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.blog')}</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-forest mb-6 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-pine hover:text-emerald transition-colors text-sm">{t('footer.legalNotice')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mist/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-pine/60">
            © {new Date().getFullYear()} GWARD — <a href="https://le-dahu.ch" target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors underline">Le Dahu Sàrl</a> / <a href="https://ictlab.io" target="_blank" rel="noopener noreferrer" className="hover:text-emerald transition-colors underline">ICTLAB</a>
          </p>
          <div className="flex items-center gap-4 text-sm text-pine/60">
            <span>{t('footer.madeIn')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
