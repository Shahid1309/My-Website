import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-secondary text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Schedule a consultation to discuss your project and discover how we can transform your space.
        </p>
        <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
          Schedule Consultation
        </Link>
      </div>
    </section>
  );
}