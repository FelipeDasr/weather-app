import React, { useEffect, useState } from 'react'
import {
    Alert,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import getWeatherForecast from './services/getWeatherForecast'
import getGradientData from './utils/getGradientData'

import WeatherScreen from './screens/WeatherScreen'
import LoadingScreen from './screens/LoadingScreen'
import NetworkErrorModal from './screens/NetworkErrorModal'
import SearchCityModal from './screens/SearchCityModal'

export default (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [networkError, setNetworkError] = useState(false)
    const [cityNotFound, setCityNotFound] = useState(false)
    const [city, setCity] = useState('')
    const [data, setData] = useState({})
    const [gradientData, setgradientData] = useState({})

    useEffect(() => {
        setIsLoading(true)
        useEffectAsync()
    }, [])

    const useEffectAsync = async () => {
        location = await AsyncStorage.getItem('@city')
        if (location) {
            await loadWeatherForecast(location)
        }
        else {
            return setCityNotFound(true)
        }
    }

    const loadWeatherForecast = async (location=city) => {
        setRefreshing(true)

        const response = await getWeatherForecast(location)

        if (response.networkError) {
            return setNetworkError(true)
        }
        else if(response.cityNotFound){
            setCityNotFound(true)
            return Alert.alert('Info', 'City not found.')
        }

        await AsyncStorage.setItem('@city', location)

        const gradientD = getGradientData(response.isDay)
        setgradientData(gradientD); setData(response)
        setRefreshing(false); setIsLoading(false)
        setCity(location)
    }

    const refreshData = async () => {
        setNetworkError(false)
        await loadWeatherForecast()
        setRefreshing(false)
    }

    const changeCity = city => {
        setCityNotFound(false)
        loadWeatherForecast(city)
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchCityModal 
                visible={cityNotFound}
                changeCity={changeCity}
            />
            <NetworkErrorModal
                visible={networkError}
                onReload={refreshData}
            />
            {isLoading ?
                <LoadingScreen /> :
                <WeatherScreen
                    data={data}
                    changeCity={changeCity}
                    refreshData={refreshData}
                    refreshing={refreshing}
                    gradientData={gradientData}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
