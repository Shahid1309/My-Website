

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-primary mb-6">
              About
              <span className="text-gray-600"> BlueShine Associate</span>
            </h1>
            <p className="text-body text-xl mb-8">
              Founded on the belief that exceptional design has the power to transform lives, we've been creating stunning interior spaces for over a decade.
            </p>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Our Specialization</h2>
              <p className="text-body mb-4">
                We have been specializing in the business for over 7 years. We provide comprehensive design services including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Floor plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sections & elevations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>3D views of Exterior & Interior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Working drawings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Electrical & plumbing drawings</span>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Execution Services</h2>
              <p className="text-body mb-4">
                We provide execution work on site such as:
              </p>
              <ul className="flex flex-wrap gap-3 mb-4">
                <li className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Interior</li>
                <li className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Exterior</li>
                <li className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Fabrication</li>
                <li className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Planning</li>
              </ul>
            </div>
            <p className="text-body mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              We always do our best effort to satisfy our clients. It would be a great honor to do business with you. 
              We would be highly grateful if you consider us for providing Interior, Exterior, Planning, and other work for your projects.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior design studio"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg w-3/4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">7+ Years</h3>
                  <p className="text-gray-600">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}