
import Link from 'next/link';
import ServicesHero from '@/app/components/Services/ServicesHero';
import ServiceShowcase from '@/app/components/Services/ServiceShowcase';
import AdditionalServices from '@/app/components/Services/AdditionalServices';
import ProcessSection from '@/app/components/Services/ProcessSection';
import ServicesCTA from '@/app/components/Services/ServicesCTA';

export default function Services() {
  return (
    <main className="pt-20">
      <ServicesHero />
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ServiceShowcase
            title="Residential Design"
            description="Transform your home into a sanctuary that reflects your personality and enhances your daily life. Our residential design services cover everything from single rooms to complete home renovations."
            features={[
              'Living rooms and family spaces',
              'Bedrooms and private retreats',
              'Kitchens and dining areas',
              'Home offices and studies'
            ]}
            image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Residential interior design"
            ctaText="Start Your Project"
          />

          <ServiceShowcase
            title="Commercial Design"
            description="Create inspiring work environments that boost productivity and leave lasting impressions on clients and employees alike. Our commercial design expertise spans various industries."
            features={[
              'Corporate offices and headquarters',
              'Retail spaces and showrooms',
              'Restaurants and hospitality',
              'Healthcare and wellness centers'
            ]}
            image="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Commercial interior design"
            ctaText="Discuss Your Space"
            reverse
          />
        </div>
      </section>

      <AdditionalServices />
      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}