// export default function ServicesHero() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="heading-primary mb-6">
//           Our
//           <span className="text-gray-600"> Services</span>
//         </h1>
//         <p className="text-body text-xl max-w-3xl mx-auto">
//           From initial consultation to final installation, we offer comprehensive interior design services that transform your vision into reality.
//         </p>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function ServicesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              Our
              <span className="text-gray-600"> Services</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              From initial consultation to final installation, we offer comprehensive 
              interior design services that transform your vision into reality.
            </p>

            <p className="text-gray-600 mb-6">
              We have been specializing in the business for over 7 years, providing 
              exceptional design and construction services across residential and commercial projects.
            </p>

            {/* <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Residential & Commercial Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Architecture & Planning</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Interior & Exterior Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black mr-3"></div>
                <span className="text-gray-700">Landscape & Civil Works</span>
              </div>
            </div> */}

            <p className="text-gray-700 bg-gray-100 p-6 border-l-4 border-black">
              We always do our best to satisfy our clients. It would be a great honor 
              to do business with you and provide exceptional design solutions for your projects.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior design services"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg w-3/4">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">7+ Years</h3>
                  <p className="text-gray-600">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}