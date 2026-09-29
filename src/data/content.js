import { Smartphone, Monitor, Database, ChartBar, Globe, Shield, Cpu, PlaySquare } from 'lucide-react';

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Tech & AI', href: '#technology' },
  { name: 'Company', href: '#about' },
  { name: 'Team', href: '#team' },
];

export const stats = [
  { id: 1, name: 'Lines of Code', value: '32M+', exactValue: 32387122, icon: 'code' },
  { id: 2, name: 'Happy Clients', value: '350+', exactValue: 350, icon: 'users' },
  { id: 3, name: 'Projects Completed', value: '390+', exactValue: 390, icon: 'briefcase' },
  { id: 4, name: 'Coffee With Clients', value: '1500+', exactValue: 1500, icon: 'coffee' },
];

export const services = [
  {
    title: 'App Development',
    description: 'Custom mobile application development to help you capture the rapidly growing mobile segment with engaging, native-feeling experiences.',
    icon: Smartphone,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Web Design & Development',
    description: 'Custom-built websites developed from the ground up—no pre-designed templates. We meet the exacting standards your brand demands.',
    icon: Monitor,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'ERP Solutions',
    description: 'Streamline your business operations by integrating back and front office applications into a single, cohesive enterprise system.',
    icon: Database,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  }
];

export const timeline = [
  {
    year: '2019',
    title: 'Foundational Growth',
    description: 'A year of foundational growth and learning. We focused on building a strong foundation and establishing our identity.'
  },
  {
    year: '2020',
    title: 'Solidifying Presence',
    description: 'Solidifying our presence, we diversified our services and remained committed to quality and customer satisfaction.'
  },
  {
    year: '2021',
    title: 'Momentum & Expansion',
    description: 'We gained momentum and recognition, expanding our client base and embracing new technologies and methodologies.'
  },
  {
    year: '2022',
    title: 'Matured Organization',
    description: 'A milestone year, we grew into a matured organization, taking on ambitious projects and delivering greater value.'
  }
];

export const capabilities = [
  {
    title: 'Artificial Intelligence',
    description: 'Advanced surveillance models, predictive analytics, and custom AI implementations.',
    icon: Cpu
  },
  {
    title: '3D Animation & Video',
    description: 'High-end 3D product animations, advertisement videos, and brand visualizations.',
    icon: PlaySquare
  },
  {
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems to scalable, cloud-native architectures.',
    icon: Globe
  },
  {
    title: 'Cloud & Cyber Security',
    description: 'Robust cloud infrastructure deployments with enterprise-grade security protocols.',
    icon: Shield
  }
];

export const team = [
  {
    name: 'Ramesh Singh',
    role: 'Co-founder & Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Ashi Gupta',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Akshay Gupta',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400'
  }
];
