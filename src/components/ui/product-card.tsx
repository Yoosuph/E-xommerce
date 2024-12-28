import { Product } from '@/types';
import { useCart } from '@/store/useCart';
import { ShoppingCart } from 'lucide-react';
import { formatNaira } from '@/lib/currency';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-medium text-gray-900">{formatNaira(product.price)}</p>
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}