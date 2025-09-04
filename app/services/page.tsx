
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
      
      <ServiceShowcase/>
      <AdditionalServices />
      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}