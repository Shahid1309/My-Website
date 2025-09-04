// export default function ContactHero() {
//   return (
//     <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="heading-primary mb-6">
//           Let's Create Something
//           <span className="text-gray-600"> Beautiful Together</span>
//         </h1>
//         <p className="text-body text-xl max-w-3xl mx-auto">
//           Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life.
//         </p>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function ContactHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
          Let's Create Something
          <span className="block text-gray-600 mt-2"> Beautiful Together</span>
        </h1>
        <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life.
        </p>
      </div>
    </section>
  );
}