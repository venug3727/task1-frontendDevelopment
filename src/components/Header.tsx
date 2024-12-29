import React from 'react';
import { Cloud } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <Cloud className="w-8 h-8 text-blue-500" />
      <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
        Weather<span className="text-blue-500">Cast</span>
      </h1>
    </div>
  );
}