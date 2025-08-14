


// import Image from 'next/image';
// import logo1 from "@/app/assects/Mercedes-Benz_India_Logo.jpg";
// import logo2 from "@/app/assects/Screenshot_8-7-2025_18624_.jpeg";
// import logo3 from "@/app/assects/assianPaint.jpg";
// import logo4 from "@/app/assects/livspace.png";

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
//                   <Image 
//                     src={partner.logo}
//                     alt={partner.name}
//                     width={128}
//                     height={64}
//                     className="object-contain w-full h-full"
//                   />
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
//                   <Image 
//                     src={partner.logo}
//                     alt={partner.name}
//                     width={128}
//                     height={64}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client"
import { useState, useEffect, useRef } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 2));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, isAutoPlaying, partners.length]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => Math.min(prev + 1, Math.ceil(partners.length / 2) - 1));
    }

    if (isRightSwipe) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  if (isMobile) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Trusted Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry-leading brands to bring you the finest furniture and design elements.
            </p>
          </div>

          <div className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${Math.ceil(partners.length / 2) * 100}%`
                }}
              >
                {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4">
                      {partners.slice(slideIndex * 2, slideIndex * 2 + 2).map((partner, index) => (
                        <div
                          key={index}
                          className="w-full h-20 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-300"
                        >
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            className="object-contain w-full h-full max-w-24"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(partners.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe hint */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Swipe left or right to see more partners
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version with continuous scroll
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry-leading brands to bring you the finest furniture and design elements.
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* Sliding container */}
          <div className="flex animate-slide">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 min-w-max">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <Image src={partner.logo} alt={partner.name} className="object-contain w-full h-full" />
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
                  <Image src={partner.logo} alt={partner.name} className="object-contain w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
