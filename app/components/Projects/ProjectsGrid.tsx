
// export interface Project {
//   id: number;
//   title: string;
//   category: string;
//   location: string;
//   year: string;
//   image: string;
//   description: string;
// }
// interface ProjectsGridProps {
//   projects: Project[];
// }

// export default function ProjectsGrid({ projects }: ProjectsGridProps) {
//   return (
//     <section className="section-padding bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="card overflow-hidden group">
//               <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
//                   <span className="text-sm text-gray-500">{project.year}</span>
//                 </div>
//                 <h3 className="text-xl font-playfair font-medium mb-2">{project.title}</h3>
//                 <p className="text-sm text-gray-600 mb-4">{project.location}</p>
//                 <p className="text-body text-sm mb-6">{project.description}</p>
//                 <button className="text-black font-medium hover:underline">
//                   View Details →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from 'next/image';
import Link from 'next/link';

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
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium">No projects found in this category</h3>
            <p className="text-gray-600 mt-2">Please try another filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.location}</p>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center text-black font-medium hover:underline"
                  >
                    View Details
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}