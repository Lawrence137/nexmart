import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative pt-[100%] w-full">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
              {product.discount}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-end gap-2 mb-4">
            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            {product.discount && (
              <p className="text-sm text-gray-500 line-through">
                ${(product.price * (1 + product.discount / 100)).toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="group/btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          View Details
          <svg
            className="ml-2 h-4 w-4 transform transition-transform group-hover/btn:translate-x-1"
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
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.number,
  }).isRequired,
};

export default ProductCard; 