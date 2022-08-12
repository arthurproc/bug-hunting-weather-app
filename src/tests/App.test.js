import React from 'react';
import { render, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';
import weather from './weatherData';

describe('Testing structure App.js', () => {
  it('renders a title', () => {
    render(<App />);
    const heading = screen.getByText(/Weather App/i);
    expect(heading).toBeInTheDocument();
  });

  it('does not show the WeatherCard when the route is', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(weather),
    }));
    const { history, container } = renderWithRouter(<App />);
    history.push('/');

    const weatherContainer = container.getElementsByClassName('weather-container');

    expect(weatherContainer).toHaveLength(0);
  });

  it('renders WeatherCard when in route `weather/Itabira`', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(weather),
    }));
    const { history } = renderWithRouter(<App />);
    history.push('/weather/itabira');

    const regionTitle = await screen.findByText(weather.region);
    expect(regionTitle).toBeInTheDocument();
  });
});
