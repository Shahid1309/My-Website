// export default function ValuesSection() {
//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="heading-secondary mb-4">Our Values</h2>
//           <p className="text-body text-lg max-w-2xl mx-auto">
//             These core principles guide every project we undertake and every relationship we build.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: 'Excellence',
//               description: 'We pursue perfection in every detail, from initial concept to final installation.',
//               icon: '✨'
//             },
//             {
//               title: 'Innovation',
//               description: 'We stay ahead of trends while creating timeless designs that stand the test of time.',
//               icon: '💡'
//             },
//             {
//               title: 'Collaboration',
//               description: 'We work closely with our clients to ensure their vision becomes reality.',
//               icon: '🤝'
//             }
//           ].map((value, index) => (
//             <div key={index} className="card p-8 text-center">
//               <div className="text-4xl mb-4">{value.icon}</div>
//               <h3 className="text-2xl font-playfair font-medium mb-4">{value.title}</h3>
//               <p className="text-body">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function ValuesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
            Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The principles that drive our architectural excellence and client relationships.
          </p>
        </div>

        {/* Values Grid - Horizontal Layout */}
        <div className="space-y-16">
          
          {/* WHAT WE DO - Left Aligned */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white p-10 rounded-none shadow-2xl border-l-8 border-black">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">WHAT WE DO</h3>
                    <div className="w-20 h-1 bg-gray-400"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black mr-4"></div>
                    <span className="text-gray-700 text-lg">Site Analysis & Concept Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black mr-4"></div>
                    <span className="text-gray-700 text-lg">Client Coordination & Requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black mr-4"></div>
                    <span className="text-gray-700 text-lg">Quality Site Execution</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  We create spaces that inspire and connect. Our commitment to excellence ensures every project leaves a lasting impact on the built environment.
                </p>
                
                <p className="text-gray-500 leading-relaxed">
                  Client satisfaction is our priority. We coordinate closely to fulfill requirements and provide luxurious, nature-integrated living experiences.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gray-200"></div>
                <img
                  src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Architectural planning"
                  className="relative w-full h-96 object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* OUR MISSION - Right Aligned */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-black text-white p-10 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-white flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">OUR MISSION</h3>
                    <div className="w-20 h-1 bg-gray-400"></div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  To deliver exceptional architectural solutions that enhance quality of life through collaboration, creativity, and relentless pursuit of design excellence.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 border-2 border-white mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white"></div>
                      </div>
                      <span className="text-gray-200">Architectural Solutions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 border-2 border-white mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white"></div>
                      </div>
                      <span className="text-gray-200">Client Needs Fulfillment</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 border-2 border-white mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white"></div>
                      </div>
                      <span className="text-gray-200">Quality of Life Enhancement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 border-2 border-white mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white"></div>
                      </div>
                      <span className="text-gray-200">Lasting Environmental Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-gray-800"></div>
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="relative w-full h-96 object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* OUR VISION - Centered */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-12 relative">
              <div className="absolute top-0 left-0 w-24 h-24 bg-black"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-black"></div>
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center mb-6">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">OUR VISION</h3>
                    <div className="w-20 h-1 bg-gray-400"></div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                  To be a global leader in architectural innovation and sustainability, creating buildings that minimize environmental impact while fostering community and well-being.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sustainable architecture"
                  className="w-full h-64 object-cover mb-8 shadow-lg"
                />
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {["Innovation", "Sustainability", "Design Excellence", "Community", "Well-being"].map((item, index) => (
                    <div key={index} className="bg-white p-4 text-center shadow-sm border-l-4 border-gray-400">
                      <span className="text-black font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}