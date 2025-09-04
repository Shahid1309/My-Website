// export default function ProjectsHero() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="heading-primary mb-6">
//           Our's
//           <span className="text-gray-600"> Projects</span>
//         </h1>
//         <p className="text-body text-xl max-w-3xl mx-auto">
//           Explore our portfolio of exceptional interior design projects that showcase our commitment to excellence and attention to detail.
//         </p>
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function ProjectsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              Our
              <span className="text-gray-600"> Projects</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Explore our portfolio of exceptional interior design projects that showcase our commitment to excellence and attention to detail.
            </p>

            <p className="text-gray-600 mb-6">
              Each project represents our dedication to creating spaces that inspire and function beautifully. 
              From residential homes to commercial spaces, we bring vision to life.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Residential Projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Commercial Spaces</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Architectural Designs</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Complete Renovations</span>
              </div>
            </div>

            <p className="text-gray-700 bg-gray-100 p-6 border-l-4 border-black">
              Every project tells a story of collaboration, creativity, and craftsmanship. 
              Discover how we transform spaces into extraordinary environments.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured project showcase"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg w-3/4">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">100+ Projects</h3>
                  <p className="text-gray-600">Successfully Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}