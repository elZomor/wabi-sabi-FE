import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: isRTL ? 'القاهرة، مصر' : 'Cairo, Egypt'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+20 123 456 789'
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'hello@wabisabi.com'
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hours.value')
    }
  ];

  return (
    <footer className="bg-stone-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-green-100 dark:from-amber-200 dark:to-green-200 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-amber-800 dark:text-amber-900">和</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Wabi Sabi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.philosophy')}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('hero.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {t('contact.title')}
            </h4>
            <div className="space-y-3">
              {contactInfo.slice(0, 2).map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {t('contact.hours')}
            </h4>
            <div className="space-y-3">
              {contactInfo.slice(2).map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Wabi Sabi Art Space. {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};