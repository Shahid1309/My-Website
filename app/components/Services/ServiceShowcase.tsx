
// import Link from 'next/link';

// interface ServiceShowcaseProps {
//   title: string;
//   description: string;
//   features: string[];
//   image: string;
//   imageAlt: string;
//   ctaText: string;
//   reverse?: boolean;
// }

// export default function ServiceShowcase({
//   title,
//   description,
//   features,
//   image,
//   imageAlt,
//   ctaText,
//   reverse = false
// }: ServiceShowcaseProps) {
//   return (
//     <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 ${reverse ? 'lg:order-first' : ''}`}>
//       {!reverse && (
//         <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
//           <img
//             src={image}
//             alt={imageAlt}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       )}
      
//       <div>
//         <h2 className="heading-secondary mb-6">{title}</h2>
//         <p className="text-body text-lg mb-6">{description}</p>
//         <ul className="space-y-3 text-body mb-8">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center">
//               <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
//               {feature}
//             </li>
//           ))}
//         </ul>
//         <Link href="/contact" className="btn-primary">
//           {ctaText}
//         </Link>
//       </div>

//       {reverse && (
//         <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
//           <img
//             src={image}
//             alt={imageAlt}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       )}
//     </div>
//   );
// }



import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ServiceShowcase Component (as provided)
interface ServiceShowcaseProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  reverse?: boolean;
}

function ServiceShowcase({
  title,
  description,
  features,
  image,
  imageAlt,
  ctaText,
  reverse = false
}: ServiceShowcaseProps) {
  return (
    <div className="mb-24">
      <div className={`flex flex-col lg:flex-row items-stretch gap-0 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Image Section */}
        <div className="lg:w-1/2 relative group">
          <div className={`absolute inset-0 ${reverse ? 'bg-black' : 'bg-gray-200'} ${
            reverse ? 'translate-x-8 translate-y-8' : '-translate-x-8 -translate-y-8'
          }`}></div>
          <div className="relative h-96 lg:h-full bg-white overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Service Number Overlay */}
            <div className={`absolute top-8 ${reverse ? 'right-8' : 'left-8'} w-16 h-16 ${
              reverse ? 'bg-white text-black' : 'bg-black text-white'
            } flex items-center justify-center font-bold text-xl`}>
              {title.charAt(0)}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2">
          <div className={`h-full p-12 lg:p-16 ${
            reverse ? 'bg-black text-white' : 'bg-white text-black'
          } shadow-2xl flex flex-col justify-center`}>
            
            {/* Category Badge */}
            <div className={`inline-block px-4 py-2 text-sm font-medium tracking-wider mb-6 ${
              reverse ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}>
              SERVICE
            </div>

            {/* Title */}
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              reverse ? 'text-white' : 'text-black'
            }`}>
              {title}
            </h2>

            {/* Divider */}
            <div className={`w-20 h-1 mb-8 ${
              reverse ? 'bg-gray-600' : 'bg-gray-400'
            }`}></div>

            {/* Description */}
            <p className={`text-lg leading-relaxed mb-8 ${
              reverse ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-6 h-6 border-2 ${
                    reverse ? 'border-white' : 'border-black'
                  } mr-3 mt-1 flex items-center justify-center flex-shrink-0`}>
                    <div className={`w-2 h-2 ${
                      reverse ? 'bg-white' : 'bg-black'
                    }`}></div>
                  </div>
                  <span className={`${
                    reverse ? 'text-gray-200' : 'text-gray-700'
                  } leading-relaxed`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}



// Main Services Page Component
export default function Services() {
  return (
    <main className="pt-20">
     
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
        

          <ServiceShowcase
            title="Commercial Design"
            description="Create inspiring work environments that boost productivity and leave lasting impressions on clients and employees alike. Our commercial design expertise spans various industries."
            features={[
              'Corporate offices and headquarters',
              'Retail spaces and showrooms',
              'Restaurants and hospitality',
              'Healthcare and wellness centers'
            ]}
            image="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Commercial interior design"
            ctaText="Discuss Your Space"
            reverse
          />

          <ServiceShowcase
            title="Architecture"
            description="From concept to completion, we design innovative and functional architectural solutions that balance aesthetics with practicality."
            features={[
              'Residential and commercial buildings',
              'Urban and master planning',
              'Structural and sustainable designs',
              '3D modeling and visualization'
            ]}
            image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Modern architecture design"
            ctaText="Explore Architecture"
          />

          <ServiceShowcase
            title="Interior"
            description="Craft interiors that reflect your lifestyle and elevate comfort. Our team ensures every corner is functional and visually pleasing."
            features={[
              'Luxury living spaces',
              'Office and workplace interiors',
              'Custom furniture and decor',
              'Lighting and color consultation'
            ]}
            image="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Interior design space"
            ctaText="Design My Interior"
            reverse
          />

          <ServiceShowcase
            title="Landscape"
            description="Blend natural beauty with modern design. We create outdoor environments that are sustainable, functional, and serene."
            features={[
              'Garden and park designs',
              'Terrace and rooftop landscaping',
              'Water features and outdoor lighting',
              'Sustainable plantation strategies'
            ]}
            image="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Landscape design"
            ctaText="Plan My Landscape"
          />

          <ServiceShowcase
            title="Civil"
            description="Delivering strong, durable, and innovative civil construction solutions that stand the test of time."
            features={[
              'Structural construction',
              'Roads and bridges',
              'Industrial and residential projects',
              'Project management and supervision'
            ]}
            image="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Civil engineering work"
            ctaText="Start Construction"
            reverse
          />

          <ServiceShowcase
            title="Fabrication"
            description="We provide precision fabrication services for both residential and commercial needs, ensuring strength and creativity."
            features={[
              'Steel and metal structures',
              'Custom gates and railings',
              'Industrial fabrication works',
              'On-site installation and maintenance'
            ]}
            image="https://images.pexels.com/photos/327049/pexels-photo-327049.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Metal fabrication work"
            ctaText="Get Fabrication Service"
          />
        </div>
      </section>

 
    </main>
  );
}