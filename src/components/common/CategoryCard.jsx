import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { id, name, image, link, productCount } = category;

  return (
    <Link
      to={link}
      className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Category Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Category Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        {productCount && (
          <p className="text-white/80 text-sm">
            {productCount} Products
          </p>
        )}
        <div className="mt-4 flex items-center text-white">
          <span className="text-sm font-medium">Shop Now</span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard; 