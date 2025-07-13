// import Link from 'next/link';
// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <h1 className="heading-primary mb-6">
//             Transform Your Space Into Something
//             <span className="text-gray-600"> Extraordinary</span>
//           </h1>
//           <p className="text-body text-xl mb-8 max-w-lg">
//             We create timeless, elegant interiors that reflect your personality and enhance your lifestyle through thoughtful design and premium craftsmanship.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link href="/projects" className="btn-primary text-center">
//               View Our Work
//             </Link>
//             <Link href="/contact" className="btn-secondary text-center">
//               Start Your Project
//             </Link>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
//             <Image
//               src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
//               alt="Modern living room interior"
//               className=" object-cover"
//               width={800}
//               height={800}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="heading-primary mb-6">
            Transform Your Space Into Something
            <span className="text-gray-600"> Extraordinary</span>
          </h1>
          <p className="text-body text-xl mb-8 max-w-lg">
            We create timeless, elegant interiors that reflect your personality and enhance your lifestyle through thoughtful design and premium craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" className="btn-primary text-center">
              View Our Work
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Start Your Project
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <Image
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
              alt="Modern living room interior"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}