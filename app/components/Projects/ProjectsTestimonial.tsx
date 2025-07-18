


// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// export default function ProjectsTestimonial() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       quote: "Luxe Interiors transformed our home into something we never imagined possible. Their attention to detail and understanding of our lifestyle created spaces that are both beautiful and functional.",
//       name: "Jennifer Martinez",
//       role: "Homeowner, Westchester",
//       image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
//     },
//     {
//       quote: "Working with Luxe Interiors on our office redesign was a game-changer. They perfectly captured our brand identity while creating a space that boosts productivity and impresses clients.",
//       name: "Michael Chen",
//       role: "CEO, TechStart Inc.",
//       image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
//     },
//     {
//       quote: "The boutique hotel lobby they designed has become our signature space. Guests consistently compliment the ambiance and attention to detail. It's exactly the luxury experience we wanted to create.",
//       name: "Sarah Johnson",
//       role: "Hotel Manager, The Noir",
//       image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
//     }
//   ];

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-4xl mx-auto relative">
        

//         {/* Testimonial Content */}
//         <div className="overflow-hidden">
//           <div 
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={index}
//                 className="w-full flex-shrink-0 px-4 text-center"
//               >
//                 <blockquote className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-8 leading-relaxed">
//                   "{testimonial.quote}"
//                 </blockquote>
//                 <div className="flex items-center justify-center">
//                   <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div className="text-left">
//                     <div className="font-medium">{testimonial.name}</div>
//                     <div className="text-gray-600 text-sm">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Indicators */}
//         <div className="flex justify-center mt-8 gap-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentTestimonial(index)}
//               className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-gray-900 w-6' : 'bg-gray-300'}`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';
// import { useState, useRef } from 'react';
// import Image from 'next/image';

// export default function ProjectsTestimonial() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const testimonials = [
//     {
//       quote: "Luxe Interiors transformed our home into something we never imagined possible. Their attention to detail and understanding of our lifestyle created spaces that are both beautiful and functional.",
//       name: "Jennifer Martinez",
//       role: "Homeowner, Westchester",
//       image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
//     },
//     {
//       quote: "Working with Luxe Interiors on our office redesign was a game-changer. They perfectly captured our brand identity while creating a space that boosts productivity and impresses clients.",
//       name: "Michael Chen",
//       role: "CEO, TechStart Inc.",
//       image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
//     },
//     {
//       quote: "The boutique hotel lobby they designed has become our signature space. Guests consistently compliment the ambiance and attention to detail. It's exactly the luxury experience we wanted to create.",
//       name: "Sarah Johnson",
//       role: "Hotel Manager, The Noir",
//       image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
//     }
//   ];

//  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
//   touchStartX.current = e.touches[0].clientX;
// };

// const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
//   touchEndX.current = e.touches[0].clientX;
// };

//   const handleTouchEnd = () => {
//     const deltaX = touchStartX.current - touchEndX.current;
//     const threshold = 50; // Minimum swipe distance

//     if (deltaX > threshold) {
//       // Swiped left
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     } else if (deltaX < -threshold) {
//       // Swiped right
//       setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     }
//   };

//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-4xl mx-auto relative">
//         {/* Testimonial Content */}
//         <div
//           className="overflow-hidden"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="w-full flex-shrink-0 px-4 text-center"
//               >
//                 <blockquote className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-8 leading-relaxed">
//                   "{testimonial.quote}"
//                 </blockquote>
//                 <div className="flex items-center justify-center">
//                   <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div className="text-left">
//                     <div className="font-medium">{testimonial.name}</div>
//                     <div className="text-gray-600 text-sm">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Indicators */}
//         <div className="flex justify-center mt-8 gap-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentTestimonial(index)}
//               className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-gray-900 w-6' : 'bg-gray-300'}`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useState, useRef } from 'react';

export default function ProjectsTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const testimonials = [
    {
      quote: "Luxe Interiors transformed our home into something we never imagined possible. Their attention to detail and understanding of our lifestyle created spaces that are both beautiful and functional.",
      name: "Jennifer Martinez",
      role: "Homeowner, Westchester",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      quote: "Working with Luxe Interiors on our office redesign was a game-changer. They perfectly captured our brand identity while creating a space that boosts productivity and impresses clients.",
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg"
    },
    {
      quote: "The boutique hotel lobby they designed has become our signature space. Guests consistently compliment the ambiance and attention to detail. It's exactly the luxury experience we wanted to create.",
      name: "Sarah Johnson",
      role: "Hotel Manager, The Noir",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
    }
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) {
      isDragging.current = true;
    }
    touchEndX.current = e.touches[0].clientX;
    
    // Prevent default scrolling behavior during horizontal swipes
    const deltaX = Math.abs(touchStartX.current - touchEndX.current);
    const deltaY = Math.abs(e.touches[0].clientY - (e.touches[0].clientY || 0));
    
    if (deltaX > deltaY) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    const containerWidth = e.currentTarget.offsetWidth;
    const swipePercentage = Math.abs(deltaX) / containerWidth;

    // Only trigger if swipe is significant enough
    if (Math.abs(deltaX) > threshold || swipePercentage > 0.2) {
      if (deltaX > 0) {
        // Swiped left - next testimonial
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swiped right - previous testimonial
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    
    isDragging.current = false;
  };

  // Mouse events for desktop testing
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Left mouse button is pressed
      if (!isDragging.current) {
        isDragging.current = true;
      }
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;
    const containerWidth = e.currentTarget.offsetWidth;
    const swipePercentage = Math.abs(deltaX) / containerWidth;

    if (Math.abs(deltaX) > threshold || swipePercentage > 0.2) {
      if (deltaX > 0) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    
    isDragging.current = false;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto relative">
        {/* Testimonial Content */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 text-center"
              >
                <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10 hidden md:block"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10 hidden md:block"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 rounded-full transition-all ${
                currentTestimonial === index ? 'bg-gray-900 w-6' : 'bg-gray-300 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}