import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { HeroSection } from './components/Sections/HeroSection';
import { AboutSection } from './components/Sections/AboutSection';
import { GallerySection } from './components/Sections/GallerySection';
import { WorkshopsSection } from './components/Sections/WorkshopsSection';
import { TestimonialsSection } from './components/Sections/TestimonialsSection';

// Initialize i18n
import './i18n';

const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('about');

  // Handle RTL/LTR direction
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  const handleExploreClick = () => {
    scrollToSection('workshops');
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'gallery', 'workshops'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar 
          activeSection={activeSection}
          onSectionChange={scrollToSection}
        />
        
        <main>
          <HeroSection onExploreClick={handleExploreClick} />
          <AboutSection />
          <GallerySection />
          <TestimonialsSection />
          <WorkshopsSection />
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;