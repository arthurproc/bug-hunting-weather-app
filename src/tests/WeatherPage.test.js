import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import WeatherPage from '../components/WeatherPage';
import weather from './weatherData';

describe('Test WeatherPage', () => {
  it('calls fetch with `https://weatherdbi.herokuapp.com/data/weather/itabira` param city is `itabira`', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(weather),
    }));
    
    render(<WeatherPage match={ { params: { city: 'itabira' } } } />);
    
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://weatherdbi.herokuapp.com/data/weather/itabira'));
    global.fetch.mockReset();
  });

  it('calls fetch with `https://weatherdbi.herokuapp.com/data/weather/itabira` param city is `itabira`', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(weather),
    }));
    
    render(<WeatherPage match={ { params: { city: 'itabira' } } } />);
    
    const region = await waitFor(() => screen.getByText(
      weather.region,
      { exact: false },
      ));
      
      expect(region).toBeInTheDocument();
    global.fetch.mockReset();
  });
});
