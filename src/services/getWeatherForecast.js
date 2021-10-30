import settings from './api/api.settings'
import weather from './api/weather'

export default async city => {

    try {

        const response = await weather.get('/forecast.json', {
            params: {
                key: settings.weather.key,
                days: 1,
                alerts: 'no',
                aqi: 'yes',
                q: city
            }
        })

        const data = {
            locationName: response.data.location.name,
            temperature: response.data.current.temp_c.toFixed(0),
            feelslike: response.data.current.feelslike_c.toFixed(0),
            condition: response.data.current.condition,
            localtime: response.data.location.localtime,
            humidity: response.data.current.humidity.toFixed(0),
            maxtemp: response.data.forecast.forecastday[0].day.maxtemp_c.toFixed(0),
            mintemp: response.data.forecast.forecastday[0].day.mintemp_c.toFixed(0),
            forecastday: response.data.forecast.forecastday,
            airQuality: response.data.current.air_quality['us-epa-index'],
            isDay: response.data.current.is_day,
            windKph: response.data.current.wind_kph.toFixed(0),
            clouds: response.data.current.cloud.toFixed(0),
            uv: response.data.current.uv,

            loadError: false,
        }

        return data
    }
    catch (e) {
        const errObj = {
            networkError: true,
            cityNotFound: true
        }

        if(e.response && e.response.data.error.code === 1006){
            errObj.networkError = false
        }

        return errObj
    }
}