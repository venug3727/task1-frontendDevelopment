import { useState, useEffect } from "react";
import { API_CONFIG } from "../config/api.config"; // Assuming your API config

export function useWeather(city: string) {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const url = `${API_CONFIG.baseUrl}/current?access_key=${API_CONFIG.key}&query=${city}&units=${API_CONFIG.units}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.info);
      }

      setWeather(data);
    } catch (err) {
      setError("Failed to fetch weather data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return { weather, error, loading, fetchWeather };
}
