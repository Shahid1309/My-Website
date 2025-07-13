
import AboutHero from '@/app/components/About/AboutHero';
import ValuesSection from '@/app/components/About/ValuesSection';
import TeamSection from '@/app/components/About/TeamSection';
import ProcessSection from '@/app/components/About/ProcessSection';

export default function About() {
  return (
    <main className="pt-20">
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <ProcessSection />
    </main>
  );
}