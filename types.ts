export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'estetica' | 'capilar' | 'tatuagem';
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HOME = 'hero',
  ABOUT = 'quem-somos',
  SERVICES = 'servicos',
  BENEFITS = 'beneficios',
  TESTIMONIALS = 'depoimentos',
  LOCATION = 'localizacao',
}