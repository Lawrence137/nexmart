import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

const QuickShopModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                    {product.discount && (
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                          {product.discount}% OFF
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col">
                    <div className="flex-1">
                      <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                        {product.name}
                      </Dialog.Title>
                      <p className="mt-2 text-sm text-gray-500">{product.category}</p>
                      
                      <div className="mt-4 flex items-end gap-2">
                        <p className="text-3xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                        {product.discount && (
                          <p className="text-lg text-gray-500 line-through">
                            ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Description</h4>
                          <p className="mt-2 text-sm text-gray-500">
                            {product.description || 'No description available.'}
                          </p>
                        </div>

                        {product.features && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Features</h4>
                            <ul className="mt-2 list-disc pl-4 text-sm text-gray-500">
                              {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

QuickShopModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.number,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default QuickShopModal; 