import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Download, Eye, ShieldCheck } from 'lucide-react';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Download className="w-8 h-8 text-white" />,
      title: t('howItWorks.step1.title'),
      desc: t('howItWorks.step1.desc'),
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: t('howItWorks.step2.title'),
      desc: t('howItWorks.step2.desc'),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: t('howItWorks.step3.title'),
      desc: t('howItWorks.step3.desc'),
    }
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-forest mb-6"
          >
            {t('howItWorks.title')}
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-mist/50 z-0" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-mint text-forest font-bold flex items-center justify-center shadow-sm z-20">
                  {index + 1}
                </div>
                
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-emerald flex items-center justify-center mb-8 shadow-lg shadow-emerald/20 border-4 border-white relative z-10">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-forest mb-4">{step.title}</h3>
                <p className="text-pine leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
