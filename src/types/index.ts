export interface NavItem {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
