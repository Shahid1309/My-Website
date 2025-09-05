



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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-[60]">
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
                  className={`px-4 py-2 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-gray-50 relative group ${
                    isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-[60]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span 
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                } ${(isScrolled || isOpen) ? 'bg-gray-800' : 'bg-white'}`}
              ></span>
              <span 
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                } ${(isScrolled || isOpen) ? 'bg-gray-800' : 'bg-white'}`}
              ></span>
              <span 
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                } ${(isScrolled || isOpen) ? 'bg-gray-800' : 'bg-white'}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay and Menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Mobile Menu Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Image
                src={logo2}
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="px-6 py-8">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-800 hover:text-gray-900 py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-4">
                  Ready to start your project?
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-black text-white text-center px-6 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}