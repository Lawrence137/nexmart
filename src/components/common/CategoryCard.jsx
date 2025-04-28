import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={category.link}
      className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-gray-900 hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col justify-end px-5 pb-8 pt-48">
        <h3 className="font-semibold text-white text-2xl mb-2">
          {category.name}
        </h3>
        <p className="text-gray-300 text-sm">
          {category.productCount.toLocaleString()} Products
        </p>

        {/* Hover Effect Arrow */}
        <div className="absolute right-4 bottom-4 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    productCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CategoryCard; 