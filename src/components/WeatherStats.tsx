import React from "react";
import { Droplets, Thermometer } from "lucide-react";

interface WeatherStatsProps {
  data: any; // Adjusted for WeatherStack response
}

export function WeatherStats({ data }: WeatherStatsProps) {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-6xl font-bold text-gray-800 mb-2">
          {data.temperature}°C
        </p>
        <p className="text-xl text-gray-600 capitalize">
          {data.weather_descriptions[0]}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex items-center gap-2 bg-white/30 rounded-xl p-4">
          <Thermometer className="w-5 h-5 text-orange-500" />
          <div>
            <p className="text-sm text-gray-600">Feels like</p>
            <p className="font-semibold text-gray-800">{data.feelslike}°C</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/30 rounded-xl p-4">
          <Droplets className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="font-semibold text-gray-800">{data.humidity}%</p>
          </div>
        </div>
      </div>
    </>
  );
}
