import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface SocialPost {
  id: number;
  thumbnailUrl: string;
  caption: string;
  likes: number;
  type: 'video' | 'image';
}

export interface NavItem {
  label: string;
  href: string;
}