export default function ProjectsTestimonial() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl font-playfair font-light text-gray-900 mb-8 leading-relaxed">
          "Luxe Interiors transformed our home into something we never imagined possible. Their attention to detail and understanding of our lifestyle created spaces that are both beautiful and functional."
        </blockquote>
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-medium">Jennifer Martinez</div>
            <div className="text-gray-600 text-sm">Homeowner, Westchester</div>
          </div>
        </div>
      </div>
    </section>
  );
}