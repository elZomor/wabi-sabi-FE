import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { mockTestimonials } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-gray-200 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-green-600 dark:bg-green-500 text-white p-3 rounded-full">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="mt-4">
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{isRTL ? testimonial.quoteAr : testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={isRTL ? testimonial.nameAr : testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {isRTL ? testimonial.nameAr : testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {isRTL ? testimonial.workshopAr : testimonial.workshop}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-green-100 to-amber-100 dark:from-green-200 dark:to-amber-200 rounded-full opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};