import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/store/useCart';
import { Search } from '@/components/ui/search';
import { AuthDialog } from '@/components/auth/auth-dialog';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Sarah Investment</span>
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center md:px-8">
            <Search onSearch={console.log} className="w-full max-w-lg" />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  {items.length}
                </span>
              )}
            </Link>
            <AuthDialog />
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Search onSearch={console.log} className="mb-4" />
            <Link
              to="/cart"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart ({items.length})</span>
            </Link>
            <AuthDialog />
          </div>
        </div>
      )}
    </nav>
  );
}