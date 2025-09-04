import React, { useState } from 'react';
import { X, Calendar, MapPin, User } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  client: string;
  location: string;
  completionDate: string;
  area: string;
}

const ProjectPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Hospitality',
    'Healthcare',
    'Corporate / Office',
    'Fabrication & Steel',
    '3D Visualizations'
  ];

  

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Design",
      category: "Residential",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
      ],
      description: "A modern luxury villa featuring contemporary architecture with sustainable design elements and panoramic views.",
      client: "Johnson Family",
      location: "Beverly Hills, CA",
      completionDate: "March 2024",
      area: "4,500 sq ft"
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "Commercial",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop"
      ],
      description: "A state-of-the-art commercial complex designed for maximum efficiency and employee wellbeing with green building standards.",
      client: "TechCorp Industries",
      location: "Downtown Seattle",
      completionDate: "January 2024",
      area: "25,000 sq ft"
    },
    {
      id: 3,
      title: "Boutique Hotel Renovation",
      category: "Hospitality",
      thumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
      ],
      description: "Complete renovation of a historic boutique hotel combining classic elegance with modern amenities and technology.",
      client: "Heritage Hotels Group",
      location: "Charleston, SC",
      completionDate: "December 2023",
      area: "15,000 sq ft"
    },
    {
      id: 4,
      title: "Medical Center Expansion",
      category: "Healthcare",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
      ],
      description: "Expansion of regional medical center with specialized treatment areas, patient comfort zones, and advanced medical equipment integration.",
      client: "Regional Medical Center",
      location: "Phoenix, AZ",
      completionDate: "February 2024",
      area: "30,000 sq ft"
    },
    {
      id: 5,
      title: "Corporate Headquarters",
      category: "Corporate / Office",
      thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop"
      ],
      description: "Design and construction of a new corporate headquarters featuring flexible workspaces, collaboration areas, and sustainable technologies.",
      client: "Global Solutions Inc.",
      location: "Austin, TX",
      completionDate: "April 2024",
      area: "40,000 sq ft"
    },
    {
      id: 6,
      title: "Industrial Steel Framework",
      category: "Fabrication & Steel",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop"
      ],
      description: "Custom steel fabrication for industrial warehouse facility including structural framework, mezzanines, and specialized equipment supports.",
      client: "Manufacturing Solutions LLC",
      location: "Houston, TX",
      completionDate: "November 2023",
      area: "50,000 sq ft"
    },
    {
      id: 7,
      title: "Residential Complex Visualization",
      category: "3D Visualizations",
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
      ],
      description: "Photorealistic 3D visualizations for upcoming residential development showcasing architectural details, landscaping, and interior concepts.",
      client: "Premier Development Group",
      location: "Miami, FL",
      completionDate: "January 2024",
      area: "Multiple Units"
    },
    {
      id: 8,
      title: "Mountain Resort Spa",
      category: "Hospitality",
      thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop"
      ],
      description: "Luxury mountain resort spa featuring natural materials, panoramic views, and integrated wellness facilities in harmony with the landscape.",
      client: "Mountain View Resorts",
      location: "Aspen, CO",
      completionDate: "May 2024",
      area: "8,000 sq ft"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600">Discover our diverse portfolio of architectural and design projects</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center text-gray-600">
          Showing {filteredProjects.length} projects
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h3>
                  
                  <div className="flex items-center text-gray-700">
                    <User size={18} className="mr-3 text-blue-600" />
                    <div>
                      <span className="font-medium">Client:</span>
                      <span className="ml-2">{selectedProject.client}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <MapPin size={18} className="mr-3 text-blue-600" />
                    <div>
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">{selectedProject.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="mr-3 text-blue-600" />
                    <div>
                      <span className="font-medium">Completion:</span>
                      <span className="ml-2">{selectedProject.completionDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-[18px] h-[18px] mr-3 bg-blue-600 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <span className="font-medium">Area:</span>
                      <span className="ml-2">{selectedProject.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPortfolio;