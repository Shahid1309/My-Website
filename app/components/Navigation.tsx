// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import logo from "../../public/LOGO-removebg-preview.png"
// import logo2 from "../../public/fav.svg"
// import Image from 'next/image';

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Projects', href: '/projects' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
//       <div className=" mx-auto px-6 lg:px-24">
//         <div className="flex justify-between items-center h-20">
//           <Link href="/" className="font-playfair text-2xl font-semibold text-black">
//             <Image src={logo}
//              alt= "logo"
//              className='h-16 w-full'
//              />
//           </Link>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
          
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden flex flex-col space-y-1"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//             <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//           </button>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-gray-100">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block py-3 text-gray-700 hover:text-black transition-colors duration-200"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/LOGO-removebg-preview.png';
import logo2 from '../../public/fav.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="mx-auto px-6 lg:px-24">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-playfair text-2xl font-semibold text-black">
            {/* Desktop logo */}
            <Image
              src={logo}
              alt="desktop logo"
              className="h-16 w-auto hidden md:block"
              priority
            />
            {/* Mobile logo */}
            <Image
              src={logo2}
              alt="mobile logo"
              className="h-10 w-auto block md:hidden"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
