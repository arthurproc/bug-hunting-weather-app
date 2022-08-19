import React from 'react';
import { render, screen } from '@testing-library/react';

import WeatherCard from '../components/WeatherCard';
import weather from './weatherData';

describe('Test WeatherCard', () => {
  it('renders all information passed', () => {
    render(
      <WeatherCard
        dayhour={ weather.currentConditions.dayhour }
        temperature={ weather.currentConditions.temp.c }
        humidity={ weather.currentConditions.humidity }
        icon={ weather.currentConditions.iconURL }
        wind={ weather.currentConditions.wind.km }
        comment={ weather.currentConditions.comment }
      />
    );

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
