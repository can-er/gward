import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ShieldAlert, FileWarning, Scale } from 'lucide-react';

export const Problem = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <FileWarning className="w-8 h-8 text-alert-red" />,
      title: t('problem.card1.title'),
      desc: t('problem.card1.desc'),
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-alert-red" />,
      title: t('problem.card2.title'),
      desc: t('problem.card2.desc'),
    },
    {
      icon: <Scale className="w-8 h-8 text-alert-red" />,
      title: t('problem.card3.title'),
      desc: t('problem.card3.desc'),
    }
  ];

  return (
    <section className="py-24 bg-white" id="problem">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-forest mb-6"
          >
            {t('problem.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-pine leading-relaxed"
          >
            {t('problem.intro')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-page-bg rounded-2xl p-8 border border-mist/50 hover:shadow-lg hover:border-mist transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-forest mb-4">{card.title}</h3>
              <p className="text-pine leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
