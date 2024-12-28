import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch: (query: string) => void;
}

export function Search({ className, onSearch, ...props }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <form onSubmit={handleSubmit} className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-10 w-full rounded-md border border-gray-200 bg-white pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </form>
    </div>
  );
}