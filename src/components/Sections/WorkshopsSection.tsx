import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Users, Tag } from 'lucide-react';
import { mockWorkshops } from '../../data/mockData';
import { BookingModal } from '../Modals/BookingModal';
import { Workshop } from '../../types';

export const WorkshopsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      journaling: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      photography: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      cyanotype: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      painting: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      ceramics: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="workshops" className="py-20 bg-stone-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-gray-200 mb-6">
            {t('workshops.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('workshops.subtitle')}
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Workshop Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={workshop.image}
                  alt={isRTL ? workshop.nameAr : workshop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(workshop.category)}`}>
                    {t(`gallery.filter.${workshop.category}`)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Workshop Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {isRTL ? workshop.nameAr : workshop.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {isRTL ? workshop.descriptionAr : workshop.description}
                </p>

                {/* Workshop Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-3" />
                    <span className="text-sm">{formatDate(workshop.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-3" />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-3" />
                    <span className="text-sm">
                      {workshop.availableSpots} {t('workshops.available')}
                    </span>
                  </div>
                </div>

                {/* Price and Booking */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {workshop.price} {t('workshops.price')}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedWorkshop(workshop)}
                    disabled={workshop.availableSpots === 0}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    {workshop.availableSpots === 0 ? 'Sold Out' : t('workshops.bookNow')}
                  </button>
                </div>

                {/* Instructor */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">
                      {isRTL ? 'المدرب: ' : 'Instructor: '}
                    </span>
                    {isRTL ? workshop.instructorAr : workshop.instructor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedWorkshop && (
        <BookingModal
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </section>
  );
};