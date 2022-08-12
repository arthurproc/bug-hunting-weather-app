import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      error: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.setState({
        disabled: !this.validateForm()
      })
    });
  }

  handleSubmit() {
    const { city } = this.state;
    const { history } = this.props;
    if (city === '') {
      this.setState({
        error: 'Please enter a city',
      });
    } else {
      this.setState({
        error: '',
      });
      history.push(`/weather/${city}`);
    }
  }

  validateForm() {
    const { city } = this.state;
    return city !== '';
  }

  render() {
    const { error, city, disabled } = this.state;
    return (
      <form className="form text-center">
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="city-input">
              City
              <input
                type="text"
                className="form-control"
                id="city-input"
                placeholder="Enter city"
                name="city"
                value={ city }
                onChange={ this.handleChange }
              />
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={ disabled }
          onClick={ this.handleSubmit }
        >
          Search
        </button>
        { error && <small className="text-red">{error}</small> }
      </form>
    );
  }
}

SearchForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchForm;
