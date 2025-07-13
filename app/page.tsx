
import HeroSection from '@/app/components/Home/HeroSection';
import ServicesPreview from '@/app/components/Home/ServicesPreview';
import FeaturedProjects from '@/app/components/Home/FeaturedProjects';

import CtaSection from '@/app/components/Home/CtaSection';
import PartnerLogos from './components/PartnerLogos';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <FeaturedProjects />
      <PartnerLogos  />
      <CtaSection />
    </main>
  );
}