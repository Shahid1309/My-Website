export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Our Process</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            We follow a proven methodology to ensure every project exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Discovery', description: 'We learn about your lifestyle, preferences, and vision for the space.' },
            { step: '02', title: 'Design', description: 'Our team creates detailed plans and 3D visualizations of your new space.' },
            { step: '03', title: 'Development', description: 'We source materials, coordinate with contractors, and manage the project.' },
            { step: '04', title: 'Delivery', description: 'We install and style your space, ensuring every detail is perfect.' }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-playfair font-medium mb-4">{phase.title}</h3>
              <p className="text-body text-sm">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}