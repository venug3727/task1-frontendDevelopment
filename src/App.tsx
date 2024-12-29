import React from 'react';
import { WeatherDashboard } from './components/WeatherDashboard';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <WeatherDashboard />
      </div>
    </div>
  );
}

export default App;