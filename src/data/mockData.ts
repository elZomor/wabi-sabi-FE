import { Workshop, GalleryImage, Testimonial } from '../types';

export const mockWorkshops: Workshop[] = [
  {
    id: '1',
    name: 'Mindful Journaling Workshop',
    nameAr: 'ورشة كتابة اليوميات الواعية',
    date: '2025-01-15',
    time: '2:00 PM - 4:00 PM',
    availableSpots: 8,
    totalSpots: 12,
    price: 350,
    currency: 'EGP',
    description: 'Discover the therapeutic power of journaling in a supportive environment. Learn techniques for self-reflection and creative expression through guided writing exercises.',
    descriptionAr: 'اكتشف القوة العلاجية لكتابة اليوميات في بيئة داعمة. تعلم تقنيات التفكر الذاتي والتعبير الإبداعي من خلال تمارين الكتابة الموجهة.',
    image: 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'journaling',
    instructor: 'Sara Ahmed',
    instructorAr: 'سارة أحمد'
  },
  {
    id: '2',
    name: 'Analog Photography Basics',
    nameAr: 'أساسيات التصوير التناظري',
    date: '2025-01-18',
    time: '10:00 AM - 1:00 PM',
    availableSpots: 5,
    totalSpots: 8,
    price: 450,
    currency: 'EGP',
    description: 'Explore the art of film photography using vintage cameras. Learn composition, lighting, and the meditative process of analog photography.',
    descriptionAr: 'استكشف فن التصوير الفيلمي باستخدام الكاميرات القديمة. تعلم التكوين والإضاءة والعملية التأملية للتصوير التناظري.',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'photography',
    instructor: 'Omar Hassan',
    instructorAr: 'عمر حسن'
  },
  {
    id: '3',
    name: 'Cyanotype Printing Experience',
    nameAr: 'تجربة طباعة السيانوتايب',
    date: '2025-01-22',
    time: '3:00 PM - 6:00 PM',
    availableSpots: 10,
    totalSpots: 10,
    price: 400,
    currency: 'EGP',
    description: 'Create stunning blue prints using the historic cyanotype process. Combine photography with botanical elements to create unique artistic pieces.',
    descriptionAr: 'أنشئ مطبوعات زرقاء مذهلة باستخدام عملية السيانوتايب التاريخية. ادمج التصوير مع العناصر النباتية لإنشاء قطع فنية فريدة.',
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'cyanotype',
    instructor: 'Layla Mansour',
    instructorAr: 'ليلى منصور'
  },
  {
    id: '4',
    name: 'Watercolor Meditation',
    nameAr: 'تأمل الألوان المائية',
    date: '2025-01-25',
    time: '11:00 AM - 2:00 PM',
    availableSpots: 6,
    totalSpots: 10,
    price: 320,
    currency: 'EGP',
    description: 'Find peace through watercolor painting. A gentle introduction to watercolors focusing on mindful creation rather than perfect technique.',
    descriptionAr: 'اعثر على السلام من خلال الرسم بالألوان المائية. مقدمة لطيفة للألوان المائية تركز على الإبداع الواعي بدلاً من التقنية المثالية.',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'painting',
    instructor: 'Nour El-Din',
    instructorAr: 'نور الدين'
  }
];

export const mockGalleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'journaling',
    title: 'Journaling Session',
    titleAr: 'جلسة كتابة اليوميات',
    description: 'Participants exploring their thoughts through mindful writing',
    descriptionAr: 'المشاركون يستكشفون أفكارهم من خلال الكتابة الواعية'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'photography',
    title: 'Photography Workshop',
    titleAr: 'ورشة التصوير',
    description: 'Learning the art of capturing moments with intention',
    descriptionAr: 'تعلم فن التقاط اللحظات بقصد'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'cyanotype',
    title: 'Cyanotype Creations',
    titleAr: 'إبداعات السيانوتايب',
    description: 'Beautiful blue prints created by our participants',
    descriptionAr: 'مطبوعات زرقاء جميلة أنشأها المشاركون'
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'painting',
    title: 'Watercolor Magic',
    titleAr: 'سحر الألوان المائية',
    description: 'Expressive watercolor paintings from our meditation sessions',
    descriptionAr: 'لوحات ألوان مائية تعبيرية من جلسات التأمل'
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ceramics',
    title: 'Ceramic Workshop',
    titleAr: 'ورشة الخزف',
    description: 'Hands-on pottery and ceramic creation',
    descriptionAr: 'صناعة الفخار والخزف بالأيدي'
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/8981177/pexels-photo-8981177.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'journaling',
    title: 'Creative Writing',
    titleAr: 'الكتابة الإبداعية',
    description: 'Exploring stories and personal narratives',
    descriptionAr: 'استكشاف القصص والسرد الشخصي'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maya Khalil',
    nameAr: 'مايا خليل',
    quote: 'Wabi Sabi taught me to embrace my imperfect art. The journaling workshop was transformative, helping me find my authentic voice through writing.',
    quoteAr: 'علمني وابي سابي أن أحتضن فني غير المثالي. كانت ورشة كتابة اليوميات تحويلية، ساعدتني في العثور على صوتي الأصيل من خلال الكتابة.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    workshop: 'Mindful Journaling',
    workshopAr: 'كتابة اليوميات الواعية'
  },
  {
    id: '2',
    name: 'Ahmed Farouk',
    nameAr: 'أحمد فاروق',
    quote: 'The photography workshop opened my eyes to seeing beauty in everyday moments. The supportive environment made all the difference.',
    quoteAr: 'فتحت ورشة التصوير عيني لرؤية الجمال في اللحظات اليومية. البيئة الداعمة أحدثت كل الفرق.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    workshop: 'Photography Basics',
    workshopAr: 'أساسيات التصوير'
  },
  {
    id: '3',
    name: 'Dina Mostafa',
    nameAr: 'دينا مصطفى',
    quote: 'Creating cyanotype prints felt like magic. The process taught me patience and the beauty of unexpected results.',
    quoteAr: 'إنشاء مطبوعات السيانوتايب شعرت وكأنها سحر. علمتني العملية الصبر وجمال النتائج غير المتوقعة.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    workshop: 'Cyanotype Workshop',
    workshopAr: 'ورشة السيانوتايب'
  }
];