const getWeather = (state = {}, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return (
                {
                    temp: action.data.temp,
                    city: action.data.name,
                    country: action.data.country,
                    humidity: action.data.humidity,
                    description: action.data.description,
                    error: ""
                }
            )
        default:
            return state
    }
}
export default getWeather