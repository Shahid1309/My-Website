import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPreview() {
  const services = [
    {
                title: 'Residential Design',
                description: 'Complete home transformations that reflect your personal style and enhance daily living.',
                image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Commercial Spaces',
                description: 'Professional environments that inspire productivity and leave lasting impressions.',
                image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Space Planning',
                description: 'Optimize your space with strategic layouts that maximize functionality and flow.',
                image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Our Services</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design services tailored to your unique vision and lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8">
              <div className="aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className=" object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <h3 className="text-2xl font-playfair font-medium mb-4">{service.title}</h3>
              <p className="text-body mb-6">{service.description}</p>
              <Link href="/services" className="text-black font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}