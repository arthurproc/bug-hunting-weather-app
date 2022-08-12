import React from 'react';
import { render, screen } from '@testing-library/react';

import WeatherCard from '../components/WeatherCard';
import weather from './weatherData';

describe('Test WeatherCard', () => {
  it('renders all information passed', () => {
    render(<WeatherCard />);

    const temperature = screen.getByText(
      `${weather.currentConditions.temp.c}°C`,
      { exact: false },
    );
    const wind = screen.getByText(
      `${weather.currentConditions.wind.km} km`,
      { exact: false },
    );
    const humidity = screen.getByText(
      `${weather.currentConditions.humidity}`,
      { exact: false },
    );

    expect(temperature).toBeInTheDocument();
    expect(wind).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
  });
});
