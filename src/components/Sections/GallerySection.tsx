import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockGalleryImages } from '../../data/mockData';
import clsx from 'clsx';

export const GallerySection: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { key: 'all', label: t('gallery.filter.all') },
    { key: 'journaling', label: t('gallery.filter.journaling') },
    { key: 'photography', label: t('gallery.filter.photography') },
    { key: 'cyanotype', label: t('gallery.filter.cyanotype') },
    { key: 'painting', label: t('gallery.filter.painting') },
    { key: 'ceramics', label: t('gallery.filter.ceramics') },
  ];

  const filteredImages = activeFilter === 'all' 
    ? mockGalleryImages 
    : mockGalleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-gray-200 mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={clsx(
                'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                activeFilter === filter.key
                  ? 'bg-green-600 dark:bg-green-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ height: `${250 + (index % 3) * 50}px` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};