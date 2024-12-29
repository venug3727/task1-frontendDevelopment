import React from "react";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherStats } from "./WeatherStats";
import { WeatherHeader } from "./WeatherHeader";

interface WeatherCardProps {
  data: any; // Can be typed based on the WeatherStack API response structure
}

export function WeatherCard({ data }: WeatherCardProps) {
  const { current, location } = data;

  const weatherCondition = current.weather_descriptions
    ? current.weather_descriptions[0]
    : "No condition";

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br bg-blue-500 backdrop-blur-md">
      <div className="flex flex-col items-center">
        <WeatherHeader data={location} />
        <WeatherIcon condition={weatherCondition} />
        <WeatherStats data={current} />
      </div>
    </div>
  );
}
