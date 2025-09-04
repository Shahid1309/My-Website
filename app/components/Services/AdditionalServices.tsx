// export default function AdditionalServices() {
//   const services = [
//     {
//                 title: 'Space Planning',
//                 description: 'Optimize your layout for maximum functionality and flow.',
//                 features: ['Floor plan design', 'Traffic flow analysis', 'Furniture placement', 'Storage solutions']
//               },
//               {
//                 title: 'Color Consultation',
//                 description: 'Expert guidance on color schemes that enhance your space.',
//                 features: ['Color psychology', 'Paint selection', 'Accent coordination', 'Lighting considerations']
//               },
//               {
//                 title: 'Furniture Selection',
//                 description: 'Curated furniture pieces that perfectly complement your design.',
//                 features: ['Custom sourcing', 'Quality assessment', 'Style coordination', 'Budget optimization']
//               },
//               {
//                 title: 'Project Management',
//                 description: 'End-to-end coordination to ensure smooth project execution.',
//                 features: ['Contractor coordination', 'Timeline management', 'Quality control', 'Budget tracking']
//               },
//               {
//                 title: 'Styling & Staging',
//                 description: 'Final touches that bring your space to life.',
//                 features: ['Accessory selection', 'Art curation', 'Plant styling', 'Final installation']
//               },
//               {
//                 title: '3D Visualization',
//                 description: 'See your space before it\'s built with detailed renderings.',
//                 features: ['Photorealistic renders', 'Virtual walkthroughs', 'Design revisions', 'Material previews']
//               }
   
//   ];

//   return (
//     <section className="section-padding bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="heading-secondary mb-4">Additional Services</h2>
//           <p className="text-body text-lg max-w-2xl mx-auto">
//             Comprehensive design solutions to support every aspect of your project.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="card p-8">
//               <h3 className="text-xl font-playfair font-medium mb-4">{service.title}</h3>
//               <p className="text-body mb-6">{service.description}</p>
//               <ul className="space-y-2">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center text-sm text-gray-600">
//                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';

export default function AdditionalServices() {
  const services = [
    {
      title: 'Space Planning',
      description: 'Optimize your layout for maximum functionality and flow.',
      features: ['Floor plan design', 'Traffic flow analysis', 'Furniture placement', 'Storage solutions'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      )
    },
    {
      title: 'Color Consultation',
      description: 'Expert guidance on color schemes that enhance your space.',
      features: ['Color psychology', 'Paint selection', 'Accent coordination', 'Lighting considerations'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        </svg>
      )
    },
    {
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that perfectly complement your design.',
      features: ['Custom sourcing', 'Quality assessment', 'Style coordination', 'Budget optimization'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      )
    },
    {
      title: 'Project Management',
      description: 'End-to-end coordination to ensure smooth project execution.',
      features: ['Contractor coordination', 'Timeline management', 'Quality control', 'Budget tracking'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: 'Styling & Staging',
      description: 'Final touches that bring your space to life.',
      features: ['Accessory selection', 'Art curation', 'Plant styling', 'Final installation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      )
    },
    {
      title: '3D Visualization',
      description: 'See your space before it\'s built with detailed renderings.',
      features: ['Photorealistic renders', 'Virtual walkthroughs', 'Design revisions', 'Material previews'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
            Additional Services
            
          </h2>
          <div className="w-40 h-1 bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive design solutions to support every aspect of your project, 
            from initial planning to final installation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              
              {/* Card */}
              <div className="bg-gray-50 p-10 h-full relative overflow-hidden group-hover:bg-white group-hover:shadow-2xl transition-all duration-300">
                
                {/* Background Pattern */}
                {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 group-hover:bg-black transition-colors duration-300"></div> */}
                
                {/* Icon */}
                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Service Number */}
                  <div className="text-gray-300 font-bold text-sm mb-4 tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800">
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gray-400 mb-6 group-hover:bg-black group-hover:w-16 transition-all duration-300"></div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group/feature">
                        <div className="w-6 h-6 border border-gray-400 mr-3 flex items-center justify-center group-hover:border-black group-hover/feature:bg-black transition-all duration-200">
                          <div className="w-2 h-2 bg-gray-400 group-hover:bg-black group-hover/feature:bg-white transition-colors duration-200"></div>
                        </div>
                        <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 group-hover:bg-black transition-colors duration-300"></div>
              </div>

              {/* Hover Shadow */}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}