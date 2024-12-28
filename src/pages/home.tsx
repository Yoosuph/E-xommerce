import { Search } from '@/components/ui/search';
import { ProductCard } from '@/components/ui/product-card';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Campus Essentials Bundle',
    description: 'Everything you need for your first semester',
    price: 15000, // Updated to Naira
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    inStock: true,
  },
  {
    id: '2',
    name: 'Healthy Lunch Box',
    description: 'Fresh and nutritious daily meal',
    price: 2500, // Updated to Naira
    category: 'food',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    inStock: true,
  },
  {
    id: '3',
    name: 'Mathematics Textbook',
    description: 'Comprehensive guide for calculus',
    price: 12000, // Updated to Naira
    category: 'books',
    image: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8',
    inStock: true,
  },
] as const;

export function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Campus Essentials Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From textbooks to meals, we've got everything you need for a successful academic journey.
          </p>
          <div className="mt-10">
            <Search onSearch={console.log} className="mx-auto max-w-lg" />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Food & Beverages',
              description: 'Fresh meals and snacks',
              image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
            },
            {
              title: 'Books & Materials',
              description: 'Textbooks and study guides',
              image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
            },
            {
              title: 'Student Essentials',
              description: 'Everything else you need',
              image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b',
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-64 w-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}