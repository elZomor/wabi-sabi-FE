import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import clsx from 'clsx';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isRTL = i18n.language === 'ar';

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'gallery', label: t('nav.gallery') },
    { key: 'workshops', label: t('nav.workshops') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className={clsx(
      'fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300',
      isRTL ? 'font-arabic' : 'font-english'
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-green-100 dark:from-amber-200 dark:to-green-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-amber-800 dark:text-amber-900">和</span>
            </div>
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Wabi Sabi
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onSectionChange(item.key)}
                className={clsx(
                  'px-3 py-2 text-sm font-medium transition-colors duration-200 relative',
                  activeSection === item.key
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                )}
              >
                {item.label}
                {activeSection === item.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700 dark:bg-green-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};