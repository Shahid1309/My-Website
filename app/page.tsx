import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-primary mb-6">
              Transform Your Space Into Something
              <span className="text-gray-600"> Extraordinary</span>
            </h1>
            <p className="text-body text-xl mb-8 max-w-lg">
              We create timeless, elegant interiors that reflect your personality and enhance your lifestyle through thoughtful design and premium craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="btn-primary text-center">
                View Our Work
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Start Your Project
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern living room interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Our Services</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive interior design services tailored to your unique vision and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <div key={index} className="card p-8">
                <div className="aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
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

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Featured Projects</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Discover our latest interior design projects that showcase our commitment to excellence and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Modern Penthouse',
                category: 'Residential',
                image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                title: 'Executive Office',
                category: 'Commercial',
                image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((project, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                  <h3 className="text-2xl font-playfair font-medium mt-2 mb-4">{project.title}</h3>
                  <Link href="/projects" className="text-black font-medium hover:underline">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a space that truly reflects your style and enhances your lifestyle.
          </p>
          <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}