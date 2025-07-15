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
            <p className="text-body mb-8">
              Our team of passionate designers combines creativity with functionality to deliver spaces that are not only beautiful but also perfectly suited to how you live and work.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior design studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}