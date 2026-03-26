import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'essential',
      features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
      highlighted: false
    },
    {
      key: 'pro',
      features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
      highlighted: true
    },
    {
      key: 'enterprise',
      features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-page-bg" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-forest mb-6"
          >
            {t('pricing.title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'bg-forest text-white shadow-2xl border-2 border-emerald md:-my-4 md:py-12 z-10' 
                  : 'bg-white text-forest border border-mist shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                  {t(`pricing.${plan.key}.badge`)}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-lg font-bold mb-2 ${plan.highlighted ? 'text-mint' : 'text-pine'}`}>
                  {t(`pricing.${plan.key}.name`)}
                </h3>
                <div className={`text-sm font-medium mb-6 ${plan.highlighted ? 'text-mist' : 'text-pine/70'}`}>
                  {t(`pricing.${plan.key}.target`)}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{t(`pricing.${plan.key}.price`)}</span>
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-mist/80' : 'text-pine/60'}`}>
                  {t(`pricing.${plan.key}.priceSub`)}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-emerald' : 'text-emerald'}`} />
                    <span className={`text-sm leading-relaxed ${plan.highlighted ? 'text-white/90' : 'text-pine'}`}>
                      {t(`pricing.${plan.key}.${f}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-colors duration-300 ${
                  plan.highlighted 
                    ? 'bg-emerald hover:bg-mint text-white hover:text-forest' 
                    : 'bg-page-bg hover:bg-mist text-forest border border-mist'
                }`}
              >
                {t(`pricing.${plan.key}.cta`)}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
