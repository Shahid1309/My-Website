export default function ProjectsStats() {
  return (
    <section className="section-padding bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '7+', label: 'Years Experience' },
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
  );
}