export default function TeamSection() {
  return (
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
  );
}