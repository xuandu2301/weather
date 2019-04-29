export const getWeather = data => {
    console.log('action------------', data);
    return {
        type: 'GET_WEATHER',
        payload: data
    }
} 