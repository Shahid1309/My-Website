export default function ProcessSection() {
  const phases = [
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
   
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">How We Work</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Our streamlined process ensures exceptional results while keeping you informed every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
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
  );
}