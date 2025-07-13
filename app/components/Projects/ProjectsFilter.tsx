export default function ProjectsFilter() {
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];
  
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200 focus:outline-none focus:border-black focus:text-black"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}