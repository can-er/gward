import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Zap, Clock, MessageSquareText, LineChart, MapPin, FileCheck } from 'lucide-react';

export const Promises = () => {
  const { t } = useTranslation();

  const promises = [
    {
      icon: <Zap className="w-6 h-6 text-emerald" />,
      title: t('promises.p1.title'),
      desc: t('promises.p1.desc'),
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald" />,
      title: t('promises.p2.title'),
      desc: t('promises.p2.desc'),
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-emerald" />,
      title: t('promises.p3.title'),
      desc: t('promises.p3.desc'),
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald" />,
      title: t('promises.p4.title'),
      desc: t('promises.p4.desc'),
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald" />,
      title: t('promises.p5.title'),
      desc: t('promises.p5.desc'),
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald" />,
      title: t('promises.p6.title'),
      desc: t('promises.p6.desc'),
    }
  ];

  return (
    <section className="py-24 bg-page-bg" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-forest mb-6"
          >
            {t('promises.title')}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-mist/50 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-mist/30 flex items-center justify-center mb-6">
                {promise.icon}
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">{promise.title}</h3>
              <p className="text-pine leading-relaxed flex-1">{promise.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
