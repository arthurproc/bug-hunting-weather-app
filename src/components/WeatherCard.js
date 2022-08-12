/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherCard extends Component {
  render() {
    const {
      dayhour,
      temperature,
      humidity,
      wind,
      icon,
      comment,
    } = this.props;

    return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card" style={ { color: '#4B515D', borderRadius: '35px' } }>
              <div className="card-body p-4">
                <div className="d-flex">
                  <h6 className="flex-grow-1">{dayhour}</h6>
                </div>
                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6
                    className="display-4 mb-0 font-weight-bold"
                    style={ { color: '#1C2331' } }
                  >
                    {`${temperature}°C`}
                  </h6>
                  <span
                    className="small"
                    style={ { color: '#868B94' } }
                  >
                    {comment}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={ { fontSize: '1rem' } }>
                    <div>
                      <i
                        className="fas fa-wind fa-fw"
                        style={ { color: '#868B94' } }
                      />
                      <span className="ms-1">
                        {`${wind} km/h`}
                      </span>
                    </div>
                    <div>
                      <i
                        className="fas fa-tint fa-fw"
                        style={ { color: '#868B94' } }
                      />
                      <span className="ms-1">
                        {humidity}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={ icon }
                      alt="icon"
                      className="img-fluid"
                      style={ { width: '50px', height: '50px', borderRadius: '50%' } }
                      width="100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  dayhour: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  wind: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default WeatherCard;
