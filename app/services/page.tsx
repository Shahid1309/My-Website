
// import Link from 'next/link';
// import ServicesHero from '@/app/components/Services/ServicesHero';
// import ServiceShowcase from '@/app/components/Services/ServiceShowcase';
// import AdditionalServices from '@/app/components/Services/AdditionalServices';
// import ProcessSection from '@/app/components/Services/ProcessSection';
// import ServicesCTA from '@/app/components/Services/ServicesCTA';

// export default function Services() {
//   return (
//     <main className="pt-20">
//       <ServicesHero />
      
//       <section className="section-padding bg-white">
//         <div className="max-w-7xl mx-auto">
//           <ServiceShowcase
//             title="Residential Design"
//             description="Transform your home into a sanctuary that reflects your personality and enhances your daily life. Our residential design services cover everything from single rooms to complete home renovations."
//             features={[
//               'Living rooms and family spaces',
//               'Bedrooms and private retreats',
//               'Kitchens and dining areas',
//               'Home offices and studies'
//             ]}
//             image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
//             imageAlt="Residential interior design"
//             ctaText="Start Your Project"
//           />

//           <ServiceShowcase
//             title="Commercial Design"
//             description="Create inspiring work environments that boost productivity and leave lasting impressions on clients and employees alike. Our commercial design expertise spans various industries."
//             features={[
//               'Corporate offices and headquarters',
//               'Retail spaces and showrooms',
//               'Restaurants and hospitality',
//               'Healthcare and wellness centers'
//             ]}
//             image="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
//             imageAlt="Commercial interior design"
//             ctaText="Discuss Your Space"
//             reverse
//           />
//         </div>
//       </section>

//       <AdditionalServices />
//       <ProcessSection />
//       <ServicesCTA />
//     </main>
//   );
// }



import Link from 'next/link';
import ServicesHero from '@/app/components/Services/ServicesHero';
import ServiceShowcase from '@/app/components/Services/ServiceShowcase';
import AdditionalServices from '@/app/components/Services/AdditionalServices';
import ProcessSection from '@/app/components/Services/ProcessSection';
import ServicesCTA from '@/app/components/Services/ServicesCTA';

export default function Services() {
  return (
    <main className="pt-20">
      <ServicesHero />
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Existing ones */}
          <ServiceShowcase
            title="Residential Design"
            description="Transform your home into a sanctuary that reflects your personality and enhances your daily life. Our residential design services cover everything from single rooms to complete home renovations."
            features={[
              'Living rooms and family spaces',
              'Bedrooms and private retreats',
              'Kitchens and dining areas',
              'Home offices and studies'
            ]}
            image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Residential interior design"
            ctaText="Start Your Project"
          />

          <ServiceShowcase
            title="Commercial Design"
            description="Create inspiring work environments that boost productivity and leave lasting impressions on clients and employees alike. Our commercial design expertise spans various industries."
            features={[
              'Corporate offices and headquarters',
              'Retail spaces and showrooms',
              'Restaurants and hospitality',
              'Healthcare and wellness centers'
            ]}
            image="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Commercial interior design"
            ctaText="Discuss Your Space"
            reverse
          />

          {/* New Services */}

          <ServiceShowcase
            title="Architecture"
            description="From concept to completion, we design innovative and functional architectural solutions that balance aesthetics with practicality."
            features={[
              'Residential and commercial buildings',
              'Urban and master planning',
              'Structural and sustainable designs',
              '3D modeling and visualization'
            ]}
            image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Modern architecture design"
            ctaText="Explore Architecture"
          />

          <ServiceShowcase
            title="Interior"
            description="Craft interiors that reflect your lifestyle and elevate comfort. Our team ensures every corner is functional and visually pleasing."
            features={[
              'Luxury living spaces',
              'Office and workplace interiors',
              'Custom furniture and decor',
              'Lighting and color consultation'
            ]}
            image="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Interior design space"
            ctaText="Design My Interior"
            reverse
          />

          <ServiceShowcase
            title="Landscape"
            description="Blend natural beauty with modern design. We create outdoor environments that are sustainable, functional, and serene."
            features={[
              'Garden and park designs',
              'Terrace and rooftop landscaping',
              'Water features and outdoor lighting',
              'Sustainable plantation strategies'
            ]}
            image="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Landscape design"
            ctaText="Plan My Landscape"
          />

          <ServiceShowcase
            title="Civil"
            description="Delivering strong, durable, and innovative civil construction solutions that stand the test of time."
            features={[
              'Structural construction',
              'Roads and bridges',
              'Industrial and residential projects',
              'Project management and supervision'
            ]}
            image="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Civil engineering work"
            ctaText="Start Construction"
            reverse
          />

          <ServiceShowcase
            title="Fabrication"
            description="We provide precision fabrication services for both residential and commercial needs, ensuring strength and creativity."
            features={[
              'Steel and metal structures',
              'Custom gates and railings',
              'Industrial fabrication works',
              'On-site installation and maintenance'
            ]}
            image="https://images.pexels.com/photos/327049/pexels-photo-327049.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Metal fabrication work"
            ctaText="Get Fabrication Service"
          />
        </div>
      </section>

      <AdditionalServices />
      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}
