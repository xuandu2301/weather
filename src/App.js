import React, { Component } from 'react';
import './App.css';
import Title from './component/title';
import Form from './component/form';
import Weather from './component/weather';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const API_KEY = 'ea7aadb2d04142c4c5f0b05005af2f1d';
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const response = await api_call.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temp: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please input values"
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Title />
        <Form loadWeather={this.getWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
    );
  }
}

export default App;
