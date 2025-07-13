export default function AdditionalServices() {
  const services = [
    {
      title: 'Space Planning',
      description: 'Optimize your layout for maximum functionality and flow.',
      features: ['Floor plan design', 'Traffic flow analysis', 'Furniture placement', 'Storage solutions']
    },
    // ... other services
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Additional Services</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Comprehensive design solutions to support every aspect of your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
}