// export default function TeamSection() {
//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="heading-secondary mb-4">Meet Our Team</h2>
//           <p className="text-body text-lg max-w-2xl mx-auto">
//             Our talented designers bring diverse perspectives and expertise to every project.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               name: 'Sarah Johnson',
//               role: 'Principal Designer',
//               image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
//               bio: 'With 15 years of experience, Sarah leads our residential design projects with her keen eye for detail and passion for creating personalized spaces.'
//             },
//             {
//               name: 'Michael Chen',
//               role: 'Commercial Design Lead',
//               image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
//               bio: 'Michael specializes in commercial spaces, bringing innovative solutions that enhance productivity and create inspiring work environments.'
//             },
//             {
//               name: 'Emma Rodriguez',
//               role: 'Senior Designer',
//               image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
//               bio: 'Emma\'s expertise in sustainable design and space planning helps clients create beautiful, environmentally conscious interiors.'
//             }
//           ].map((member, index) => (
//             <div key={index} className="card p-8 text-center">
//               <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-xl font-playfair font-medium mb-2">{member.name}</h3>
//               <p className="text-gray-600 mb-4">{member.role}</p>
//               <p className="text-body text-sm">{member.bio}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Principal Designer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years of experience, Sarah leads our residential design projects with her keen eye for detail and passion for creating personalized spaces.',
      specialty: 'Residential Design'
    },
    {
      name: 'Michael Chen',
      role: 'Commercial Design Lead',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael specializes in commercial spaces, bringing innovative solutions that enhance productivity and create inspiring work environments.',
      specialty: 'Commercial Spaces'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Senior Designer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emma\'s expertise in sustainable design and space planning helps clients create beautiful, environmentally conscious interiors.',
      specialty: 'Sustainable Design'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center">
            
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
              Meet Our Architects
              
            </h2>
            <div className="w-40 h-1 bg-gray-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our talented designers bring diverse perspectives and expertise to every project, 
              crafting spaces that inspire and transform.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <div className={`absolute w-full h-full ${
                  index % 2 === 0 ? '-top-8 -left-8 bg-gray-200' : '-top-8 -right-8 bg-black'
                }`}></div>
                <div className="relative bg-white p-8 shadow-2xl">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Specialty Badge */}
                  <div className={`absolute -bottom-4 ${
                    index % 2 === 0 ? 'left-8' : 'right-8'
                  } bg-white px-6 py-3 shadow-lg border-l-4 border-black`}>
                    <span className="text-black font-semibold text-sm tracking-wide">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2">
                <div className={`${
                  index % 2 === 0 ? 'bg-white border-l-8 border-black' : 'bg-black text-white border-r-8 border-gray-400'
                } p-12 shadow-xl`}>
                  
                  <div className="mb-8">
                    <h3 className={`text-4xl font-bold mb-3 ${
                      index % 2 === 0 ? 'text-black' : 'text-white'
                    }`}>
                      {member.name}
                    </h3>
                    <div className={`w-16 h-1 mb-4 ${
                      index % 2 === 0 ? 'bg-gray-400' : 'bg-gray-600'
                    }`}></div>
                    <p className={`text-xl font-medium ${
                      index % 2 === 0 ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                      {member.role}
                    </p>
                  </div>
                  
                  <p className={`text-lg leading-relaxed ${
                    index % 2 === 0 ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {member.bio}
                  </p>
                  
                  {/* Quote mark decoration */}
                  <div className={`mt-8 w-16 h-16 ${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-800'
                  } flex items-center justify-center`}>
                    <svg className={`w-8 h-8 ${
                      index % 2 === 0 ? 'text-gray-400' : 'text-gray-500'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}