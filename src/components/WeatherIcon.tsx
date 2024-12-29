import React from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";

interface WeatherIconProps {
  condition: string;
}

export function WeatherIcon({ condition }: WeatherIconProps) {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <Sun className="w-20 h-20 text-yellow-400" />;
      case "clouds":
        return <Cloud className="w-20 h-20 text-gray-400" />;
      case "rain":
        return <CloudRain className="w-20 h-20 text-blue-400" />;
      case "snow":
        return <CloudSnow className="w-20 h-20 text-blue-200" />;
      case "thunderstorm":
        return <CloudLightning className="w-20 h-20 text-yellow-600" />;
      default:
        return <Cloud className="w-20 h-20 text-gray-400" />;
    }
  };

  return (
    <div className="flex items-center justify-center mb-6">{getIcon()}</div>
  );
}
