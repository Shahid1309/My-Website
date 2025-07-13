export default function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Our Values</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            These core principles guide every project we undertake and every relationship we build.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Excellence',
              description: 'We pursue perfection in every detail, from initial concept to final installation.',
              icon: '✨'
            },
            {
              title: 'Innovation',
              description: 'We stay ahead of trends while creating timeless designs that stand the test of time.',
              icon: '💡'
            },
            {
              title: 'Collaboration',
              description: 'We work closely with our clients to ensure their vision becomes reality.',
              icon: '🤝'
            }
          ].map((value, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-playfair font-medium mb-4">{value.title}</h3>
              <p className="text-body">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}