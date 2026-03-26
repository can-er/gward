import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ShieldCheck, AlertTriangle, Activity, CheckCircle2 } from 'lucide-react';

export const Solution = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-forest text-white overflow-hidden" id="solution">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-mint mb-6"
          >
            {t('solution.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-mist leading-relaxed"
          >
            {t('solution.intro')}
          </motion.p>
        </div>

        {/* Dashboard Mock */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Mock Browser Header */}
          <div className="bg-black/20 px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-alert-red/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald/80" />
            </div>
            <div className="mx-auto bg-black/20 text-mist/50 text-xs px-3 py-1 rounded-md font-mono">
              app.gward.ch/dashboard
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
            
            {/* Score Gauge */}
            <div className="md:col-span-1 bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center">
              <h4 className="text-mist text-sm font-medium mb-4 uppercase tracking-wider">{t('solution.dashboard.score')}</h4>
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    stroke="#8FC1AA" 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.78) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-mint">78</span>
                  <span className="text-xs text-mist/70">/ 100</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-emerald text-sm font-medium">
                <Activity className="w-4 h-4" />
                <span>+5 pts (7 jours)</span>
              </div>
            </div>

            {/* KPIs & Activity */}
            <div className="md:col-span-2 flex flex-col gap-6">
              
              {/* Top KPIs */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-mist/70 text-xs uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald" />
                    {t('solution.dashboard.protected')}
                  </div>
                  <div className="text-2xl font-bold text-white">18</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-mist/70 text-xs uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-4 h-4 text-alert-red" />
                    {t('solution.dashboard.threats')}
                  </div>
                  <div className="text-2xl font-bold text-white">0</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-mist/70 text-xs uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    {t('solution.dashboard.actions')}
                  </div>
                  <div className="text-2xl font-bold text-white">2</div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 flex-1">
                <h4 className="text-mist text-sm font-medium mb-4 uppercase tracking-wider">{t('solution.dashboard.activity')}</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald mt-1.5" />
                    <div>
                      <p className="text-sm text-white">{t('solution.dashboard.alert1')}</p>
                      <span className="text-xs text-mist/50">Il y a 2 heures</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald mt-1.5" />
                    <div>
                      <p className="text-sm text-white">{t('solution.dashboard.alert2')}</p>
                      <span className="text-xs text-mist/50">Hier, 14:30</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5" />
                    <div>
                      <p className="text-sm text-white">{t('solution.dashboard.alert3')}</p>
                      <span className="text-xs text-mist/50">Hier, 09:15</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
