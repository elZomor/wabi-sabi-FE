import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.about': 'About',
      'nav.gallery': 'Gallery',
      'nav.workshops': 'Workshops',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.tagline': 'Your safe space to discover beauty in imperfection and simplicity',
      'hero.subtitle': 'Where art meets philosophy in the heart of authentic creativity',
      'hero.cta': 'Explore Our Workshops',
      
      // About Section
      'about.title': 'About Wabi Sabi',
      'about.description': 'Wabi Sabi is more than an art space—it\'s a philosophy in action. Inspired by the Japanese concept of finding beauty in imperfection, our studio provides a nurturing environment where creativity flourishes without judgment. Here, every brushstroke, every photograph, and every moment of artistic exploration is honored as part of your unique journey.',
      'about.philosophy': 'Embracing the imperfect, impermanent, and incomplete',
      
      // Features
      'features.kitchen.title': 'Kitchen & Cafeteria',
      'features.kitchen.desc': 'Cozy space for breaks and community bonding',
      'features.workshops.title': 'Diverse Workshops',
      'features.workshops.desc': 'From journaling to cyanotype, explore various art forms',
      'features.projection.title': 'Projection Screen',
      'features.projection.desc': 'Modern equipment for presentations and tutorials',
      'features.atmosphere.title': 'Cozy Atmosphere',
      'features.atmosphere.desc': 'Warm, welcoming space that inspires creativity',
      
      // Gallery
      'gallery.title': 'Our Gallery',
      'gallery.subtitle': 'Moments captured from our workshops and creative sessions',
      'gallery.filter.all': 'All',
      'gallery.filter.journaling': 'Journaling',
      'gallery.filter.photography': 'Photography',
      'gallery.filter.cyanotype': 'Cyanotype',
      'gallery.filter.painting': 'Painting',
      'gallery.filter.ceramics': 'Ceramics',
      
      // Workshops
      'workshops.title': 'Upcoming Workshops',
      'workshops.subtitle': 'Join us for transformative creative experiences',
      'workshops.available': 'spots available',
      'workshops.bookNow': 'Book Now',
      'workshops.price': 'EGP',
      
      // Testimonials
      'testimonials.title': 'Stories from Our Community',
      'testimonials.subtitle': 'Hear from participants who found their creative voice with us',
      
      // Booking Form
      'booking.title': 'Book Your Workshop',
      'booking.name': 'Full Name',
      'booking.email': 'Email Address',
      'booking.phone': 'Phone Number',
      'booking.workshop': 'Select Workshop',
      'booking.payment': 'Payment Method',
      'booking.payment.cash': 'Cash on Site',
      'booking.payment.paymob': 'Paymob',
      'booking.payment.fawry': 'Fawry',
      'booking.payment.paypal': 'PayPal',
      'booking.requests': 'Special Requests (Optional)',
      'booking.submit': 'Complete Booking',
      'booking.success': 'Booking submitted successfully! We\'ll contact you soon.',
      
      // Contact
      'contact.title': 'Get in Touch',
      'contact.address': 'Address',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.hours': 'Hours',
      'contact.hours.value': 'Daily 10:00 AM - 8:00 PM',
      
      // Common
      'common.close': 'Close',
      'common.loading': 'Loading...',
      'common.error': 'Something went wrong. Please try again.',
    }
  },
  ar: {
    translation: {
      // Navigation
      'nav.about': 'عنا',
      'nav.gallery': 'المعرض',
      'nav.workshops': 'ورش العمل',
      'nav.contact': 'اتصل بنا',
      
      // Hero Section
      'hero.tagline': 'مساحتك الآمنة لاكتشاف الجمال في عدم الكمال والبساطة',
      'hero.subtitle': 'حيث يلتقي الفن بالفلسفة في قلب الإبداع الأصيل',
      'hero.cta': 'استكشف ورش العمل',
      
      // About Section
      'about.title': 'عن وابي سابي',
      'about.description': 'وابي سابي أكثر من مجرد مساحة فنية—إنها فلسفة في العمل. مستوحاة من المفهوم الياباني لإيجاد الجمال في عدم الكمال، يوفر استوديونا بيئة رعاية حيث يزدهر الإبداع بدون أحكام. هنا، كل ضربة فرشاة، كل صورة، وكل لحظة من الاستكشاف الفني مكرمة كجزء من رحلتك الفريدة.',
      'about.philosophy': 'احتضان غير الكامل والمؤقت وغير المكتمل',
      
      // Features
      'features.kitchen.title': 'مطبخ ومقهى',
      'features.kitchen.desc': 'مساحة مريحة للاستراحة والتواصل المجتمعي',
      'features.workshops.title': 'ورش متنوعة',
      'features.workshops.desc': 'من كتابة اليوميات إلى السيانوتايب، استكشف أشكال فنية متنوعة',
      'features.projection.title': 'شاشة عرض',
      'features.projection.desc': 'معدات حديثة للعروض التقديمية والدروس',
      'features.atmosphere.title': 'أجواء مريحة',
      'features.atmosphere.desc': 'مساحة دافئة ومرحبة تلهم الإبداع',
      
      // Gallery
      'gallery.title': 'معرضنا',
      'gallery.subtitle': 'لحظات مُلتقطة من ورش العمل وجلساتنا الإبداعية',
      'gallery.filter.all': 'الكل',
      'gallery.filter.journaling': 'كتابة اليوميات',
      'gallery.filter.photography': 'التصوير',
      'gallery.filter.cyanotype': 'السيانوتايب',
      'gallery.filter.painting': 'الرسم',
      'gallery.filter.ceramics': 'الخزف',
      
      // Workshops
      'workshops.title': 'ورش العمل القادمة',
      'workshops.subtitle': 'انضم إلينا في تجارب إبداعية تحويلية',
      'workshops.available': 'مقعد متاح',
      'workshops.bookNow': 'احجز الآن',
      'workshops.price': 'جنيه',
      
      // Testimonials
      'testimonials.title': 'قصص من مجتمعنا',
      'testimonials.subtitle': 'اسمع من المشاركين الذين وجدوا صوتهم الإبداعي معنا',
      
      // Booking Form
      'booking.title': 'احجز ورشة العمل',
      'booking.name': 'الاسم الكامل',
      'booking.email': 'عنوان البريد الإلكتروني',
      'booking.phone': 'رقم الهاتف',
      'booking.workshop': 'اختر ورشة العمل',
      'booking.payment': 'طريقة الدفع',
      'booking.payment.cash': 'نقداً في الموقع',
      'booking.payment.paymob': 'بايموب',
      'booking.payment.fawry': 'فوري',
      'booking.payment.paypal': 'باي بال',
      'booking.requests': 'طلبات خاصة (اختياري)',
      'booking.submit': 'إكمال الحجز',
      'booking.success': 'تم إرسال الحجز بنجاح! سنتواصل معك قريباً.',
      
      // Contact
      'contact.title': 'تواصل معنا',
      'contact.address': 'العنوان',
      'contact.phone': 'الهاتف',
      'contact.email': 'البريد الإلكتروني',
      'contact.hours': 'ساعات العمل',
      'contact.hours.value': 'يومياً من 10:00 صباحاً - 8:00 مساءً',
      
      // Common
      'common.close': 'إغلاق',
      'common.loading': 'جاري التحميل...',
      'common.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;