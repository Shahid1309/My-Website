import Link from 'next/link';

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">
            Our
            <span className="text-gray-600"> Services</span>
          </h1>
          <p className="text-body text-xl max-w-3xl mx-auto">
            From initial consultation to final installation, we offer comprehensive interior design services that transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-secondary mb-6">Residential Design</h2>
              <p className="text-body text-lg mb-6">
                Transform your home into a sanctuary that reflects your personality and enhances your daily life. Our residential design services cover everything from single rooms to complete home renovations.
              </p>
              <ul className="space-y-3 text-body mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Living rooms and family spaces
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Bedrooms and private retreats
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Kitchens and dining areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Home offices and studies
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Residential interior design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl lg:order-first">
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial interior design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="heading-secondary mb-6">Commercial Design</h2>
              <p className="text-body text-lg mb-6">
                Create inspiring work environments that boost productivity and leave lasting impressions on clients and employees alike. Our commercial design expertise spans various industries.
              </p>
              <ul className="space-y-3 text-body mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Corporate offices and headquarters
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Retail spaces and showrooms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Restaurants and hospitality
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Healthcare and wellness centers
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Discuss Your Space
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Additional Services</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Comprehensive design solutions to support every aspect of your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Space Planning',
                description: 'Optimize your layout for maximum functionality and flow.',
                features: ['Floor plan design', 'Traffic flow analysis', 'Furniture placement', 'Storage solutions']
              },
              {
                title: 'Color Consultation',
                description: 'Expert guidance on color schemes that enhance your space.',
                features: ['Color psychology', 'Paint selection', 'Accent coordination', 'Lighting considerations']
              },
              {
                title: 'Furniture Selection',
                description: 'Curated furniture pieces that perfectly complement your design.',
                features: ['Custom sourcing', 'Quality assessment', 'Style coordination', 'Budget optimization']
              },
              {
                title: 'Project Management',
                description: 'End-to-end coordination to ensure smooth project execution.',
                features: ['Contractor coordination', 'Timeline management', 'Quality control', 'Budget tracking']
              },
              {
                title: 'Styling & Staging',
                description: 'Final touches that bring your space to life.',
                features: ['Accessory selection', 'Art curation', 'Plant styling', 'Final installation']
              },
              {
                title: '3D Visualization',
                description: 'See your space before it\'s built with detailed renderings.',
                features: ['Photorealistic renders', 'Virtual walkthroughs', 'Design revisions', 'Material previews']
              }
            ].map((service, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-playfair font-medium mb-4">{service.title}</h3>
                <p className="text-body mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">How We Work</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Our streamlined process ensures exceptional results while keeping you informed every step of the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your vision, needs, and budget to understand your project goals.',
                duration: '1-2 hours'
              },
              {
                step: '02',
                title: 'Design Development',
                description: 'Our team creates detailed plans, mood boards, and 3D visualizations.',
                duration: '2-3 weeks'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We coordinate with contractors and manage all aspects of the project.',
                duration: '4-12 weeks'
              },
              {
                step: '04',
                title: 'Final Styling',
                description: 'We add the finishing touches and ensure every detail is perfect.',
                duration: '1-2 days'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-playfair font-medium mb-2">{phase.title}</h3>
                <p className="text-body text-sm mb-2">{phase.description}</p>
                <span className="text-xs text-gray-500 uppercase tracking-wide">{phase.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </main>
  );
}