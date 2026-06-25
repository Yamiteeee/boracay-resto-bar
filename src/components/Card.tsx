interface CardProps {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  tag?: string; // e.g., "Chef's Special" or "Happy Hour"
}

export default function Card({ title, price, description, imageUrl, tag }: CardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-cyan-950">{title}</h3>
          <span className="text-lg font-semibold text-amber-600">{price}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
}