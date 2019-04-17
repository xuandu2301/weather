import React, { Component } from 'react';
import './App.css';
import Title from './component/title';
import Form from './component/form';
import Weather from './component/weather';
// import axios from 'axios';
import API from './lib/api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }
  getWeather = (e) => {
    e.preventDefault();
    const API_KEY = 'ea7aadb2d04142c4c5f0b05005af2f1d';
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //   // const api_caqll = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    API.get(`/weather?q=${city},${country}&appid=${API_KEY}`)
    .then(res => {
        const api_call = res.data;
        const response = api_call;
        console.log(res.data.main);
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
      });
  }
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
  //     .then(res => {
  //       const api_call = res.data;
  //       const response = api_call;
  //       console.log(response);
  //       if (city && country) {
  //         this.setState({
  //           temp: response.main.temp,
  //           city: response.name,
  //           country: response.sys.country,
  //           humidity: response.main.humidity,
  //           description: response.weather[0].description,
  //           error: ""
  //         })
  //       } else {
  //         this.setState({
  //           error: "Please input values"
  //         })
  //       }
  //     });
  // }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form loadWeather={this.getWeather} />
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
