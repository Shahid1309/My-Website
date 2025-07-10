import Image from 'next/image';

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-primary mb-6">
                About
                <span className="text-gray-600"> Luxe Interiors</span>
              </h1>
              <p className="text-body text-xl mb-8">
                Founded on the belief that exceptional design has the power to transform lives, we've been creating stunning interior spaces for over a decade.
              </p>
              <p className="text-body mb-8">
                Our team of passionate designers combines creativity with functionality to deliver spaces that are not only beautiful but also perfectly suited to how you live and work.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Interior design studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Meet Our Team</h2>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Our talented designers bring diverse perspectives and expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Principal Designer',
                image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'With 15 years of experience, Sarah leads our residential design projects with her keen eye for detail and passion for creating personalized spaces.'
              },
              {
                name: 'Michael Chen',
                role: 'Commercial Design Lead',
                image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Michael specializes in commercial spaces, bringing innovative solutions that enhance productivity and create inspiring work environments.'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Senior Designer',
                image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Emma\'s expertise in sustainable design and space planning helps clients create beautiful, environmentally conscious interiors.'
              }
            ].map((member, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-playfair font-medium mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-body text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
    </main>
  );
}