import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-6">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 text-gray-700 bg-white/50 backdrop-blur-sm rounded-2xl 
                   border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50
                   placeholder-gray-400 shadow-sm transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2
                   hover:bg-blue-500/10 rounded-xl transition-colors duration-200"
        >
          <Search className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </form>
  );
}