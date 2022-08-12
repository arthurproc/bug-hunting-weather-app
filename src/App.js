import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import WeatherPage from './components/WeatherPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Weather App</h1>
        </div>
        <Route path="/">
          <SearchForm />
        </Route>
        <Switch>
          <Route
            path="/weather/:city"
          >
            <WeatherPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
