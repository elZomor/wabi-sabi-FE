import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Calendar, Clock, Users, Tag, CreditCard, Banknote } from 'lucide-react';
import { Workshop, BookingForm } from '../../types';
import clsx from 'clsx';

interface BookingModalProps {
  workshop: Workshop;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ workshop, onClose }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    workshopId: workshop.id,
    paymentMethod: 'cash',
    specialRequests: ''
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleInputChange = (field: keyof BookingForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {t('booking.success')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {isRTL ? 'سنتواصل معك قريباً لتأكيد الحجز.' : 'We\'ll contact you soon to confirm your booking.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {t('booking.title')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Workshop Summary */}
          <div className="bg-stone-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex space-x-4">
              <img
                src={workshop.image}
                alt={isRTL ? workshop.nameAr : workshop.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {isRTL ? workshop.nameAr : workshop.name}
                </h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(workshop.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{workshop.availableSpots} {t('workshops.available')}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {workshop.price} {t('workshops.price')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('booking.name')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('booking.email')} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('booking.phone')} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {t('booking.payment')} *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { key: 'cash', label: t('booking.payment.cash'), icon: Banknote },
                  { key: 'paymob', label: t('booking.payment.paymob'), icon: CreditCard },
                  { key: 'fawry', label: t('booking.payment.fawry'), icon: CreditCard },
                  { key: 'paypal', label: t('booking.payment.paypal'), icon: CreditCard }
                ].map((method) => (
                  <label
                    key={method.key}
                    className={clsx(
                      'flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all',
                      formData.paymentMethod === method.key
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                    )}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.key}
                      checked={formData.paymentMethod === method.key}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      className="sr-only"
                    />
                    <method.icon className="w-5 h-5 mb-2" />
                    <span className="text-xs font-medium">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('booking.requests')}
              </label>
              <textarea
                rows={3}
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                placeholder={isRTL ? 'أي طلبات خاصة...' : 'Any special requests...'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-3"
            >
              <CreditCard className="w-5 h-5" />
              <span>{t('booking.submit')}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};