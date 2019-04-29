const getWeather = (state = {}, action) => {
    console.log('I am Iron man', action)
    switch (action.type) {
        case 'GET_WEATHER':
            return (
                {
                    temp: action.payload.temp,
                    city: action.payload.name,
                    country: action.payload.country,
                    humidity: action.payload.humidity,
                    description: action.payload.description,
                    error: ""
                }
            )
        default:
            return state
    }
}
export default getWeather