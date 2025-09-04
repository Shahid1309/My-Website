


import React from 'react';

export default function ProcessSection() {
  const processSteps = [
    { 
      step: '01', 
      title: 'Discovery', 
      description: 'We learn about your lifestyle, preferences, and vision for the space.',
      details: ['Site Analysis', 'Client Consultation', 'Requirement Gathering', 'Vision Alignment']
    },
    { 
      step: '02', 
      title: 'Design', 
      description: 'Our team creates detailed plans and 3D visualizations of your new space.',
      details: ['Concept Development', '3D Modeling', 'Material Selection', 'Design Refinement']
    },
    { 
      step: '03', 
      title: 'Development', 
      description: 'We source materials, coordinate with contractors, and manage the project.',
      details: ['Material Sourcing', 'Contractor Coordination', 'Project Management', 'Quality Control']
    },
    { 
      step: '04', 
      title: 'Delivery', 
      description: 'We install and style your space, ensuring every detail is perfect.',
      details: ['Final Installation', 'Quality Inspection', 'Space Styling', 'Client Handover']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center">
           
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
              Our Design Process
             
            </h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project exceeds expectations, 
              from initial concept to final delivery.
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="hidden lg:block absolute top-32 left-0 w-full h-0.5 bg-gray-300"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((phase, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-black border-4 border-white shadow-lg"></div>
                </div>

                {/* Main Card */}
                <div className="bg-gray-50 p-8 relative group-hover:bg-white group-hover:shadow-2xl transition-all duration-300">
                  
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-20 h-20 bg-black text-white flex items-center justify-center text-2xl font-bold">
                      {phase.step}
                    </div>
                    <div className="w-16 h-1 bg-gray-400 group-hover:bg-black transition-colors duration-300"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-black mb-6 group-hover:text-gray-800">
                    {phase.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {phase.description}
                  </p>
                  
                  {/* Details List */}
                  <div className="space-y-3">
                    {phase.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-400 mr-3 group-hover:bg-black transition-colors duration-300"></div>
                        <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Extension */}
                <div className="bg-black h-2 group-hover:h-3 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}