import axios from "axios";
import { WeatherData } from "../types/weather";
import { API_CONFIG } from "../config/api.config";

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(API_CONFIG.baseUrl, {
      params: {
        access_key: API_CONFIG.key, // Correct parameter for API key
        query: city, // Correct parameter for location
        units: API_CONFIG.units, // Correct parameter for units
      },
    });

    if (response.data.error) {
      // Handle API errors gracefully
      throw new Error(
        response.data.error.info || "Unknown error from Weatherstack API"
      );
    }

    return response.data;
  } catch (error: any) {
    // Include more information in the thrown error
    const errorMessage =
      error.response?.data?.error?.info ||
      error.message ||
      "Failed to fetch weather data";
    throw new Error(errorMessage);
  }
};
