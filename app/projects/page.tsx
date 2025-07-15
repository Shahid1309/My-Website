

"use client";

import ProjectsHero from '@/app/components/Projects/ProjectsHero';
import ProjectsFilter from '@/app/components/Projects/ProjectsFilter';
import ProjectsGrid from '@/app/components/Projects/ProjectsGrid';
import ProjectsStats from '@/app/components/Projects/ProjectsStats';
import ProjectsTestimonial from '@/app/components/Projects/ProjectsTestimonial';
import ProjectsCTA from '@/app/components/Projects/ProjectsCTA';
import { useState } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const projects: Project[] = [
 {
      id: 1,
      title: 'Modern Penthouse',
      category: 'Residential',
      location: 'Manhattan, NY',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A sophisticated urban retreat featuring clean lines, premium materials, and stunning city views.'
    },
    {
      id: 2,
      title: 'Executive Office Suite',
      category: 'Commercial',
      location: 'Downtown, NY',
      year: '2024',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A professional workspace designed to inspire productivity and impress clients.'
    },
    {
      id: 3,
      title: 'Luxury Family Home',
      category: 'Residential',
      location: 'Westchester, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A warm and inviting family home that balances elegance with everyday functionality.'
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      location: 'Brooklyn, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A welcoming lobby space that creates memorable first impressions for hotel guests.'
    },
    {
      id: 5,
      title: 'Contemporary Loft',
      category: 'Residential',
      location: 'SoHo, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An industrial loft transformed into a modern living space with artistic flair.'
    },
    {
      id: 6,
      title: 'Tech Startup Office',
      category: 'Commercial',
      location: 'Silicon Valley, CA',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A dynamic workspace that fosters creativity and collaboration for a growing tech company.'
    }
  ];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="pt-20">
      <ProjectsHero />
      
      <ProjectsFilter 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectsGrid projects={filteredProjects} />
      <ProjectsStats />
      <ProjectsTestimonial />
      <ProjectsCTA />
    </main>
  );
}