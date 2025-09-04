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


// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';
// import logo from '../../public/LOGO-removebg-preview.png';
// import logo2 from '../../public/fav.svg';

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
//       <div className="mx-auto px-6 lg:px-24">
//         <div className="flex justify-between items-center h-20">
//           <Link href="/" className="font-playfair text-2xl font-semibold text-black">
//             {/* Desktop logo */}
//             <Image
//               src={logo}
//               alt="desktop logo"
//               className="h-16 w-auto hidden md:block"
//               priority
//             />
//             {/* Mobile logo */}
//             <Image
//               src={logo2}
//               alt="mobile logo"
//               className="h-10 w-auto block md:hidden"
//               priority
//             />
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


// 'use client';


// import { useState } from 'react';
// import Image from 'next/image';
// import logo from '../../public/LOGO-removebg-preview.png';
// import logo2 from '../../public/fav.svg';
// import Link from 'next/link';

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
//     <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0 z-10">
//             {/* Desktop logo */}
//             <Image
//               src={logo}
//               alt="Logo"
//               width={120}
//               height={60}
//               className="h-12 md:h-16 w-auto hidden md:block object-contain"
//               priority
//             />
//             {/* Mobile logo */}
//             <Image
//               src={logo2}
//               alt="Logo"
//               width={40}
//               height={40}
//               className="h-8 md:h-10 w-auto block md:hidden object-contain"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-gray-50 relative group"
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-10"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             <span 
//               className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
//                 isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
//               }`}
//             ></span>
//             <span 
//               className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
//                 isOpen ? 'opacity-0' : 'opacity-100'
//               }`}
//             ></span>
//             <span 
//               className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
//                 isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
//               }`}
//             ></span>
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="py-4 space-y-1 border-t border-gray-100">
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 rounded-lg mx-2 transform ${
//                   isOpen 
//                     ? 'translate-x-0 opacity-100' 
//                     : 'translate-x-4 opacity-0'
//                 } transition-all duration-300`}
//                 style={{ 
//                   transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
//                 }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div 
//           className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-0"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/LOGO-removebg-preview.png';
import logo2 from '../../public/fav.svg';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50">
            {/* Desktop logo */}
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={60}
              className="h-12 md:h-16 w-auto hidden md:block object-contain"
              priority
            />
            {/* Mobile logo */}
            <Image
              src={logo2}
              alt="Logo"
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto block md:hidden object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-gray-50 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'
              } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
            ></span>
            <span 
              className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
            ></span>
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'
              } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsOpen(false)}>
          <div 
            className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-20 pb-6 px-6 h-full overflow-y-auto">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-800 hover:text-gray-900 py-2 border-b border-gray-100 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                  Need help with your project?
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block mt-3 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}