export interface Workshop {
  id: string;
  name: string;
  nameAr: string;
  date: string;
  time: string;
  availableSpots: number;
  totalSpots: number;
  price: number;
  currency: string;
  description: string;
  descriptionAr: string;
  image: string;
  category: 'journaling' | 'photography' | 'cyanotype' | 'painting' | 'ceramics';
  instructor: string;
  instructorAr: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameAr: string;
  quote: string;
  quoteAr: string;
  image: string;
  workshop: string;
  workshopAr: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  workshopId: string;
  paymentMethod: 'cash' | 'paymob' | 'fawry' | 'paypal';
  specialRequests?: string;
}