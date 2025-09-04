interface ProjectsFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ProjectsFilter({ 
  activeCategory, 
  setActiveCategory 
}: ProjectsFilterProps) {
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
  
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors duration-200 focus:outline-none ${
                activeCategory === category
                  ? 'border-black text-black bg-gray-100'
                  : 'border-gray-300 text-gray-700 hover:border-black hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}