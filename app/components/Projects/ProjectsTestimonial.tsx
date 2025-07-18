

'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ProjectsTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

 const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  touchEndX.current = e.touches[0].clientX;
};

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance

    if (deltaX > threshold) {
      // Swiped left
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    } else if (deltaX < -threshold) {
      // Swiped right
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto relative">
        {/* Testimonial Content */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
