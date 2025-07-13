
import Link from 'next/link';

interface ServiceShowcaseProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  ctaText: string;
  reverse?: boolean;
}

export default function ServiceShowcase({
  title,
  description,
  features,
  image,
  imageAlt,
  ctaText,
  reverse = false
}: ServiceShowcaseProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 ${reverse ? 'lg:order-first' : ''}`}>
      {!reverse && (
        <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div>
        <h2 className="heading-secondary mb-6">{title}</h2>
        <p className="text-body text-lg mb-6">{description}</p>
        <ul className="space-y-3 text-body mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary">
          {ctaText}
        </Link>
      </div>

      {reverse && (
        <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}