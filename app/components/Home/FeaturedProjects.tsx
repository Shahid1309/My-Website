


import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Modern Penthouse',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Executive Office',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Discover our latest interior design projects that showcase our commitment to excellence and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                <h3 className="text-2xl font-playfair font-medium mt-2 mb-4">{project.title}</h3>
                <Link href="/projects" className="text-black font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}