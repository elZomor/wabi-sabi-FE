import React from 'react';
import { useTranslation } from 'react-i18next';
import { Coffee, Palette, Monitor, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: Coffee,
      title: t('features.kitchen.title'),
      description: t('features.kitchen.desc'),
    },
    {
      icon: Palette,
      title: t('features.workshops.title'),
      description: t('features.workshops.desc'),
    },
    {
      icon: Monitor,
      title: t('features.projection.title'),
      description: t('features.projection.desc'),
    },
    {
      icon: Heart,
      title: t('features.atmosphere.title'),
      description: t('features.atmosphere.desc'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-gray-200 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-green-600 dark:bg-green-400" />
              <p className="text-green-700 dark:text-green-400 font-medium italic">
                {t('about.philosophy')}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Art space interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-100 dark:bg-amber-200 rounded-full opacity-80" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-green-100 dark:bg-green-200 rounded-full opacity-60" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-amber-100 dark:from-green-200 dark:to-amber-200 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-green-700 dark:text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};