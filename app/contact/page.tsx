
import ContactHero from '@/app/components/Contact/ContactHero';
import ContactForm from '@/app/components/Contact/ContactForm';
import ContactInfo from '@/app/components/Contact/ContactInfo';
import ContactMap from '@/app/components/Contact/ContactMap';

export default function Contact() {
  return (
    <main className="pt-20">
      <ContactHero />
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}