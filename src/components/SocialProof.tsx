import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Quote, ShieldCheck, Server, Code } from 'lucide-react';

export const SocialProof = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Founder Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-forest text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden mb-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pine/40 rounded-full blur-3xl -ml-10 -mb-10" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-mint/50 mb-6" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-mist">
                "{t('socialProof.quote')}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald/30 border border-emerald/50 flex items-center justify-center text-lg font-bold">
                  G
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">GWARD Team</div>
                  <div className="text-sm text-mint">{t('socialProof.founder')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-page-bg flex items-center justify-center text-forest">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-forest">Hébergé chez Infomaniak</h4>
              <p className="text-sm text-pine">Infrastructure 100% suisse</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-page-bg flex items-center justify-center text-forest">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-forest">Conforme LPD / RGPD</h4>
              <p className="text-sm text-pine">Prêt pour vos audits</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-page-bg flex items-center justify-center text-forest">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-forest">Technologies Open Source</h4>
              <p className="text-sm text-pine">Transparence et auditabilité</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <span className="inline-block bg-mist/30 text-forest px-4 py-2 rounded-full text-sm font-medium border border-mist">
              {t('socialProof.adopted')}
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
