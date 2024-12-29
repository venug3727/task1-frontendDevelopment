import { WeatherCondition } from '../types/weather';

export const formatTemperature = (temp: number): string => 
  `${Math.round(temp)}°C`;

export const getWeatherCondition = (condition: string): WeatherCondition => {
  const normalized = condition.toLowerCase();
  return normalized as WeatherCondition;
};

export const getGradientClass = (condition: string): string => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return 'from-blue-400/20 to-yellow-400/20';
    case 'clouds':
      return 'from-gray-400/20 to-blue-300/20';
    case 'rain':
      return 'from-blue-400/20 to-gray-500/20';
    case 'snow':
      return 'from-blue-100/20 to-gray-200/20';
    case 'thunderstorm':
      return 'from-gray-600/20 to-yellow-600/20';
    default:
      return 'from-blue-400/20 to-purple-400/20';
  }
};