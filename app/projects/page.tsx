export default function Projects() {
  const projects = [
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

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">
            Our
            <span className="text-gray-600"> Projects</span>
          </h1>
          <p className="text-body text-xl max-w-3xl mx-auto">
            Explore our portfolio of exceptional interior design projects that showcase our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200 focus:outline-none focus:border-black focus:text-black"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card overflow-hidden group">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.location}</p>
                  <p className="text-body text-sm mb-6">{project.description}</p>
                  <button className="text-black font-medium hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '12+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '25+', label: 'Design Awards' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-playfair font-light text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-8 leading-relaxed">
            "Luxe Interiors transformed our home into something we never imagined possible. Their attention to detail and understanding of our lifestyle created spaces that are both beautiful and functional."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Client testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-medium">Jennifer Martinez</div>
              <div className="text-gray-600 text-sm">Homeowner, Westchester</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary text-white mb-6">
            Start Your Project Today
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to create your own stunning interior? Let's discuss your vision and bring it to life.
          </p>
          <a href="/contact" className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}