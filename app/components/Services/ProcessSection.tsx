// export default function ProcessSection() {
//   const phases = [
//      {
//                 step: '01',
//                 title: 'Initial Consultation',
//                 description: 'We discuss your vision, needs, and budget to understand your project goals.',
//                 duration: '1-2 hours'
//               },
//               {
//                 step: '02',
//                 title: 'Design Development',
//                 description: 'Our team creates detailed plans, mood boards, and 3D visualizations.',
//                 duration: '2-3 weeks'
//               },
//               {
//                 step: '03',
//                 title: 'Implementation',
//                 description: 'We coordinate with contractors and manage all aspects of the project.',
//                 duration: '4-12 weeks'
//               },
//               {
//                 step: '04',
//                 title: 'Final Styling',
//                 description: 'We add the finishing touches and ensure every detail is perfect.',
//                 duration: '1-2 days'
//               }
   
//   ];

//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="heading-secondary mb-4">How We Work</h2>
//           <p className="text-body text-lg max-w-2xl mx-auto">
//             Our streamlined process ensures exceptional results while keeping you informed every step of the way.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {phases.map((phase, index) => (
//             <div key={index} className="text-center">
//               <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                 {phase.step}
//               </div>
//               <h3 className="text-xl font-playfair font-medium mb-2">{phase.title}</h3>
//               <p className="text-body text-sm mb-2">{phase.description}</p>
//               <span className="text-xs text-gray-500 uppercase tracking-wide">{phase.duration}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from 'react';

// export default function ProcessSection() {
//   const phases = [
//     {
//       step: '01',
//       title: 'Initial Consultation',
//       description: 'We discuss your vision, needs, and budget to understand your project goals.',
//       duration: '1-2 hours'
//     },
//     {
//       step: '02',
//       title: 'Design Development',
//       description: 'Our team creates detailed plans, mood boards, and 3D visualizations.',
//       duration: '2-3 weeks'
//     },
//     {
//       step: '03',
//       title: 'Implementation',
//       description: 'We coordinate with contractors and manage all aspects of the project.',
//       duration: '4-12 weeks'
//     },
//     {
//       step: '04',
//       title: 'Final Styling',
//       description: 'We add the finishing touches and ensure every detail is perfect.',
//       duration: '1-2 days'
//     }
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-block bg-black text-white px-6 py-2 text-sm font-medium mb-8 tracking-wider">
//             OUR PROCESS
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
//             How We Work
//           </h2>
//           <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Our streamlined process ensures exceptional results while keeping you informed every step of the way.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative mb-16">
//           {/* Timeline Line - Desktop Only */}
//           <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-300"></div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {phases.map((phase, index) => (
//               <div key={index} className="relative group">
                
//                 {/* Timeline Dot */}
//                 <div className="hidden lg:flex absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                   <div className="w-4 h-4 bg-black border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
//                 </div>

//                 {/* Card */}
//                 <div className="bg-gray-50 p-8 text-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                  
//                   {/* Step Number */}
//                   <div className="w-20 h-20 bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-300">
//                     {phase.step}
//                   </div>
                  
//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800">
//                     {phase.title}
//                   </h3>
                  
//                   {/* Divider */}
//                   <div className="w-12 h-1 bg-gray-400 mx-auto mb-6 group-hover:bg-black group-hover:w-16 transition-all duration-300"></div>
                  
//                   {/* Description */}
//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     {phase.description}
//                   </p>
                  
//                   {/* Duration Badge */}
//                   <div className="bg-white border-2 border-gray-200 px-4 py-2 inline-block group-hover:border-black transition-colors duration-300">
//                     <span className="text-sm font-medium text-gray-700 group-hover:text-black tracking-wide">
//                       {phase.duration}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Bottom Accent */}
//                 <div className="h-2 bg-gray-200 group-hover:bg-black transition-colors duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="bg-gray-50 p-12 text-center">
//           <h3 className="text-2xl font-bold text-black mb-4">Ready to Get Started?</h3>
//           <div className="w-16 h-1 bg-gray-400 mx-auto mb-6"></div>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//             Each project is unique, and timelines may vary based on scope and complexity. 
//             Let's discuss your specific needs and create a custom timeline for your project.
//           </p>
          
//           <div className="flex items-center justify-center group cursor-pointer">
//             <div className="bg-black text-white px-8 py-4 font-semibold tracking-wide group-hover:bg-gray-800 transition-colors duration-300">
//               Start Your Project
//             </div>
//             <div className="w-12 h-12 bg-gray-200 text-black flex items-center justify-center group-hover:translate-x-2 group-hover:bg-gray-300 transition-all duration-300">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-black text-white px-6 py-2 text-sm font-medium mb-8 tracking-wider">
            OUR PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
            How We Work
          </h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our streamlined process ensures exceptional results while keeping you informed every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative group flex flex-col">
                
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-black border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                {/* Card - Made all cards same height with flex and flex-col */}
                <div className="bg-gray-50 p-8 text-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300 flex flex-col flex-grow">
                  
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                    {phase.step}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800">
                    {phase.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-12 h-1 bg-gray-400 mx-auto mb-6 group-hover:bg-black group-hover:w-16 transition-all duration-300"></div>
                  
                  {/* Description - Added min-h class for consistent text container height */}
                  <div className="min-h-[120px] mb-6 flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="mt-auto bg-white border-2 border-gray-200 px-4 py-2 inline-block group-hover:border-black transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-black tracking-wide">
                      {phase.duration}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-2 bg-gray-200 group-hover:bg-black transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </section>
  );
}