
// import logo1 from "@/app/assects/Mercedes-Benz_India_Logo.jpg"
// import logo2 from "@/app/assects/Screenshot_8-7-2025_18624_.jpeg"
// import logo3 from "@/app/assects/assianPaint.jpg"
// import logo4 from "@/app/assects/livspace.png"


// export default function PartnerLogos() {
//   const partners = [
//     {
//       name: 'West Elm',
//       logo: logo1
//     },
//     {
//       name: 'CB2',
//       logo: logo2
//     },
//     {
//       name: 'Herman Miller',
//       logo: logo3
//     },
//     {
//       name: 'Restoration Hardware',
//       logo: logo4
//     },
//     {
//       name: 'Pottery Barn',
//       logo: logo1
//     },
//     {
//       name: 'Crate & Barrel',
//       logo: logo2
//     },
//     {
//       name: 'Design Within Reach',
//       logo: logo3
//     },
//     {
//       name: 'Room & Board',
//       logo: logo4
//     }
//   ];

//   return (
//     <section className="py-16 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-24">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-4">
//             Trusted Partners
//           </h2>
//           <p className="text-body max-w-2xl mx-auto">
//             We collaborate with industry-leading brands to bring you the finest furniture and design elements.
//           </p>
//         </div>
        
//         <div className="relative">
//           {/* Gradient overlays for smooth fade effect */}
//           <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
//           {/* Sliding container */}
//           <div className="flex animate-slide">
//             {/* First set of logos */}
//             <div className="flex items-center space-x-12 min-w-max">
//               {partners.map((partner, index) => (
//                 <div
//                   key={`first-${index}`}
//                   className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
//                     <span className="text-xs font-medium text-gray-600 text-center px-2">
//                       {partner.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Duplicate set for seamless loop */}
//             <div className="flex items-center space-x-12 min-w-max ml-12">
//               {partners.map((partner, index) => (
//                 <div
//                   key={`second-${index}`}
//                   className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
//                     <span className="text-xs font-medium text-gray-600 text-center px-2">
//                       {partner.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from 'next/image';
import logo1 from "@/app/assects/Mercedes-Benz_India_Logo.jpg";
import logo2 from "@/app/assects/Screenshot_8-7-2025_18624_.jpeg";
import logo3 from "@/app/assects/assianPaint.jpg";
import logo4 from "@/app/assects/livspace.png";

export default function PartnerLogos() {
  const partners = [
    {
      name: 'West Elm',
      logo: logo1
    },
    {
      name: 'CB2',
      logo: logo2
    },
    {
      name: 'Herman Miller',
      logo: logo3
    },
    {
      name: 'Restoration Hardware',
      logo: logo4
    },
    {
      name: 'Pottery Barn',
      logo: logo1
    },
    {
      name: 'Crate & Barrel',
      logo: logo2
    },
    {
      name: 'Design Within Reach',
      logo: logo3
    },
    {
      name: 'Room & Board',
      logo: logo4
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We collaborate with industry-leading brands to bring you the finest furniture and design elements.
          </p>
        </div>
        
        <div className="relative">
          
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Sliding container */}
          <div className="flex animate-slide">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 min-w-max">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <Image 
                    src={partner.logo}
                    alt={partner.name}
                    width={128}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 min-w-max ml-12">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <Image 
                    src={partner.logo}
                    alt={partner.name}
                    width={128}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}