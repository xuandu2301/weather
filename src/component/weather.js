import React from 'react';
import { connect } from 'react-redux';
class Weather extends React.Component {
    render() {
        return (
            <div className="weather-info">
                {this.props.reduxState.city && this.props.reduxState.country && <p className="weather__key">Location:
                <span className="weather__value">{this.props.reduxState.city}, {this.props.reduxState.country}</span></p>}
                {this.props.reduxState.temp && <p className="weather__key">Temperature:
                <span className="weather__value">{this.props.reduxState.temp}</span></p>}
                {this.props.reduxState.humidity && <p className="weather__key">Humidity:
                <span className="weather__value">{this.props.reduxState.humidity}</span></p>}
                {this.props.reduxState.description && <p className="weather__key">Conditions:
                <span className="weather__value">{this.props.reduxState.description}</span></p>}
                {this.props.reduxState.error && <p className="weather__error">{this.props.reduxState.error}</p>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        reduxState: state.getWeather
    }
}
export default connect(
    mapStateToProps
)(Weather)