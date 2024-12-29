import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { WeatherCard } from "./WeatherCard";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { useWeather } from "../hooks/useWeather";

export function WeatherDashboard() {
  const { weather, error, loading, fetchWeather } = useWeather("London");

  return (
    <div className="max-w-lg mx-auto">
      <Header />
      <div className="backdrop-blur-md bg-white/30 rounded-3xl p-6 shadow-lg border border-white/50">
        <SearchBar onSearch={fetchWeather} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}
