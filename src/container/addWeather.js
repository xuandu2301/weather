import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../action';
import API from '../lib/api.js';

class addWeather extends React.Component {
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
  weather = (e) => {
    e.preventDefault();
    const API_KEY = 'ea7aadb2d04142c4c5f0b05005af2f1d';
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    API.get(`/weather?q=${city},${country}&appid=${API_KEY}`)
      .then(res => {
        if (city && country) {
          this.props.setWeatherToRedux({
            temp: res.main.temp,
            city: res.name,
            country: res.sys.country,
            humidity: res.main.humidity,
            description: res.weather[0].description,
            error: ""
          })
        } else {
          this.setState({
            error: "Please input values"
          })
        }
      });
  }
  render() {
    return (
      <div>
        {/* <form onSubmit={() => {
          getWeather(
            {
              temp: this.res.main.temp,
              city: this.res.name,
              country: this.res.sys.country,
              humidity: this.res.main.humidity,
              description: this.res.weather[0].description,
              error: ""
            }
          )
        }}> */}
        <form onSubmit={this.weather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
        </form>
      </div >
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setWeatherToRedux: data => dispatch(getWeather(data))
})
export default connect(
  null,
  mapDispatchToProps
)(addWeather)