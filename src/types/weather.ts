export type WeatherCondition = 'clear' | 'clouds' | 'rain' | 'snow' | 'thunderstorm';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  sys: {
    country: string;
  };
}