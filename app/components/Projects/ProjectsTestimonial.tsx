// export default function ProjectsTestimonial() {
//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <blockquote className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-8 leading-relaxed">
//           "Luxe Interiors transformed our home into something we never imagined possible. Their attention to detail and understanding of our lifestyle created spaces that are both beautiful and functional."
//         </blockquote>
//         <div className="flex items-center justify-center">
//           <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
//             <img
//               src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
//               alt="Client testimonial"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="text-left">
//             <div className="font-medium">Jennifer Martinez</div>
//             <div className="text-gray-600 text-sm">Homeowner, Westchester</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectsTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto relative">
        {/* Navigation Arrows */}
        {/* <button 
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all z-10"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}
        
        {/* <button 
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all z-10"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button> */}

        {/* Testimonial Content */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4 text-center"
              >
                <blockquote className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
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

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-gray-900 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}