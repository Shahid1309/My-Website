
export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}
interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card overflow-hidden group">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-playfair font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.location}</p>
                <p className="text-body text-sm mb-6">{project.description}</p>
                <button className="text-black font-medium hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}