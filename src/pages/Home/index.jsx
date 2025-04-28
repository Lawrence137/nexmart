import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/common/ProductCard';
import CategoryCard from '../../components/common/CategoryCard';
import Hero from '../../components/sections/Hero';
import FeaturedCollections from '../../components/sections/FeaturedCollections';
import TrendingNow from '../../components/sections/TrendingNow';

const Home = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/categories/electronics',
      productCount: 1200
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/categories/fashion',
      productCount: 2500
    },
    {
      id: 3,
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/categories/home',
      productCount: 800
    },
    {
      id: 4,
      name: 'Beauty & Health',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: '/categories/beauty',
      productCount: 600
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Electronics',
      discount: 20
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Electronics',
      discount: 15
    },
    {
      id: 3,
      name: 'Designer Bag',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Smart Home Speaker',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Electronics',
      discount: 10
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <TrendingNow />
      <FeaturedCollections />
      
      {/* Categories Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Discover our handpicked selection of premium products at amazing prices
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-lg">
              <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4">
                <svg
                  className="h-64 w-64 text-blue-400/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">Special Offer</h3>
                <p className="text-xl text-blue-100 mb-6">
                  Get 20% off on your first purchase!
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-lg">
              <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4">
                <svg
                  className="h-64 w-64 text-gray-700/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" />
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">Free Shipping</h3>
                <p className="text-xl text-gray-300 mb-6">On orders over $50</p>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 rounded-2xl px-6 py-16 shadow-2xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-6 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 