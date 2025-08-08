import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Camera } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Art studio interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo Symbol */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-white">和</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-2">
              Wabi Sabi
            </h1>
            <div className="w-24 h-px bg-white/60 mx-auto" />
          </div>

          {/* Main Tagline */}
          <h2 className={`text-xl md:text-2xl font-light leading-relaxed mb-6 ${
            isRTL ? 'text-right' : 'text-left'
          } max-w-3xl mx-auto`}>
            {t('hero.tagline')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <button
            onClick={onExploreClick}
            className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-3">
              <Camera className="w-5 h-5" />
              <span>{t('hero.cta')}</span>
            </span>
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-16 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-700" />
    </section>
  );
};