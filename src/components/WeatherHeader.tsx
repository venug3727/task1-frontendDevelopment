import React from "react";

interface WeatherHeaderProps {
  data: {
    name: string;
    country: string;
  };
}

export function WeatherHeader({ data }: WeatherHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
      <span className="text-sm font-medium px-2 py-1 bg-gray-800/10 rounded-md">
        {data.country}
      </span>
    </div>
  );
}
