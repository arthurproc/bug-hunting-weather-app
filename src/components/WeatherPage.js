import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getWeather from '../services/weatherApi';
import WeatherCard from './WeatherCard';

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        region: '',
        currentConditions: {},
        next_days: [],
      },
      error: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { city } } } = this.props;
    this.handleRequest(city);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { city } } } = this.props;
    const { match: { params: { city: prevCity } } } = prevProps;
    if (city !== prevCity) {
      this.handleRequest(city);
    }
  }

  handleRequest = async (city) => {
    try {
      this.setState({
        loading: true,
      });
      const data = await getWeather(city);
      this.setState({
        weather: data,
        error: '',
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message || 'Something went wrong.',
        loading: false,
      });
    }
  }

  render() {
    const { weather, error, loading } = this.state;
    return (
      <div className="py-5">
        {loading && (
          <div className="spinner-border text-center" role="status" />
        )}
        { error && <p>{error}</p> }
        { !loading && !error && (
          <>
            <h1 className="text-center">{weather.region}</h1>
            { weather.currentConditions && (
              <WeatherCard
                dayhour={ weather.currentConditions.dayhour }
                temp={ weather.currentConditions.temp }
                humidity={ weather.currentConditions.humidity }
                iconURL={ weather.currentConditions.iconURL }
                wind={ weather.currentConditions.wind }
                comment={ weather.currentConditions.comment }
              />
            )}
          </>
        )}
      </div>
    );
  }
}

WeatherPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherPage;
