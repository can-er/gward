import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Waitlist = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Waitlist submission:', data);
    setSubmitted(true);
  };

  const roleKeys = ['ceo', 'cto', 'ciso', 'it', 'legal', 'other'] as const;
  const sizeKeys = ['1-10', '11-50', '51-200', '201-500', '500+'] as const;
  const industryKeys = ['legal', 'finance', 'health', 'tech', 'consulting', 'manufacturing', 'other'] as const;
  const solutionKeys = ['none', 'antivirus', 'managed', 'internal', 'mssp'] as const;

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-mist bg-white text-forest placeholder:text-pine/40 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-colors text-sm";
  const selectClasses = "w-full px-4 py-3 rounded-xl border border-mist bg-white text-forest focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-colors text-sm appearance-none";
  const labelClasses = "block text-sm font-medium text-forest mb-1.5";

  return (
    <section className="py-24 bg-page-bg" id="waitlist">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="bg-emerald/10 text-emerald px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald/20">
              {t('waitlist.badge')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-forest mb-6"
          >
            {t('waitlist.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-pine leading-relaxed"
          >
            {t('waitlist.subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="bg-white rounded-3xl shadow-lg border border-mist p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald" />
              </div>
              <p className="text-xl font-semibold text-forest">
                {t('waitlist.form.success')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg border border-mist p-8 md:p-10 space-y-6">
              {/* Name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>{t('waitlist.form.firstName')}</label>
                  <input type="text" id="firstName" name="firstName" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>{t('waitlist.form.lastName')}</label>
                  <input type="text" id="lastName" name="lastName" required className={inputClasses} />
                </div>
              </div>

              {/* Email + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClasses}>{t('waitlist.form.email')}</label>
                  <input type="email" id="email" name="email" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="company" className={labelClasses}>{t('waitlist.form.company')}</label>
                  <input type="text" id="company" name="company" required className={inputClasses} />
                </div>
              </div>

              {/* Role + Company Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className={labelClasses}>{t('waitlist.form.role')}</label>
                  <select id="role" name="role" required className={selectClasses} defaultValue="">
                    <option value="" disabled>{t('waitlist.form.rolePlaceholder')}</option>
                    {roleKeys.map((key) => (
                      <option key={key} value={key}>{t(`waitlist.form.roleOptions.${key}`)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="companySize" className={labelClasses}>{t('waitlist.form.companySize')}</label>
                  <select id="companySize" name="companySize" required className={selectClasses} defaultValue="">
                    <option value="" disabled>{t('waitlist.form.companySizePlaceholder')}</option>
                    {sizeKeys.map((key) => (
                      <option key={key} value={key}>{t(`waitlist.form.companySizeOptions.${key}`)}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Industry + Current Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="industry" className={labelClasses}>{t('waitlist.form.industry')}</label>
                  <select id="industry" name="industry" required className={selectClasses} defaultValue="">
                    <option value="" disabled>{t('waitlist.form.industryPlaceholder')}</option>
                    {industryKeys.map((key) => (
                      <option key={key} value={key}>{t(`waitlist.form.industryOptions.${key}`)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="currentSolution" className={labelClasses}>{t('waitlist.form.currentSolution')}</label>
                  <select id="currentSolution" name="currentSolution" required className={selectClasses} defaultValue="">
                    <option value="" disabled>—</option>
                    {solutionKeys.map((key) => (
                      <option key={key} value={key}>{t(`waitlist.form.currentSolutionOptions.${key}`)}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald hover:bg-pine text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {t('waitlist.form.submit')}
                </button>
                <p className="text-center text-sm text-pine/60 mt-4">
                  {t('waitlist.form.reassurance')}
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
