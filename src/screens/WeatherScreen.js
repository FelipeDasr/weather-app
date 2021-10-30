import React from 'react'
import {
    RefreshControl,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
} from 'react-native'

import {
    heightPercentageToDP as hg,
    widthPercentageToDP as wd
} from 'react-native-responsive-screen'

import LinearGradient from 'react-native-linear-gradient'
import HourlyForecast from '../components/HourlyForecast'
import SearchBox from '../components/SearchBox'
import BoxInfo from '../components/BoxInfo'

import getAirQualityIndex from '../utils/getAirQualityIndex'
import getUvIndex from '../utils/getUvIndex'

import Moment from 'moment'

export default (props) => {

    const {
        changeCity,
        gradientData,
        refreshData,
        refreshing,
        data
    } = props

    return (
        <LinearGradient
            colors={gradientData.colors}
            useAngle={true}
            angle={gradientData.angle}
            style={styles.container}
        >
            <ScrollView
                style={styles.container}
                refreshControl={(
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => refreshData()}
                    />
                )}
                showsVerticalScrollIndicator={false}
            >
                <SearchBox
                    onSubmit={async city => {
                        await changeCity(city)
                    }}
                />

                <View style={styles.headerContainer}>
                    <Text style={[styles.cityText, styles.regularFont]}>
                        {data.locationName}
                    </Text>
                    <View style={styles.tempContainer}>
                        <Image
                            source={{ uri: 'https:' + data.condition.icon }}
                            style={styles.coditionIcon}
                        />
                        <Text style={[styles.tempText, styles.regularFont]}>
                            {data.temperature}°
                        </Text>
                    </View>

                    {   // Conditional rendering
                        Number(data.feelslike) !== Number(data.temperature) ? (
                            <Text style={[styles.regularFont, styles.normalText, styles.feelslikeText]}>
                                Feels like {data.feelslike}°
                            </Text>
                        ) : null
                    }

                    <Text style={[styles.regularFont, styles.normalText]}>
                        {data.condition.text}
                    </Text>
                </View>
                <BoxInfo
                    title={Moment(data.localtime, 'YYYY-MM-DD').format('LL')}
                    info1={{
                        iconName: 'water-outline',
                        labels: ['Humidity', `${data.humidity}%`]
                    }}
                    info2={{
                        iconName: 'thermometer-outline',
                        labels: [`Max. ${data.maxtemp}°`, `Min.  ${data.mintemp}°`]
                    }}
                />
                <BoxInfo
                    info1={{
                        iconName: 'shuffle-outline',
                        labels: ['Wind', `${data.windKph} km/h`]
                    }}
                    info2={{
                        iconName: 'md-sunny-outline',
                        labels: [`UV index`, getUvIndex(data.uv)]
                    }}
                />
                <HourlyForecast data={data.forecastday[0]} />
                <BoxInfo
                    title={'Items that might interest you'}
                    info1={{
                        iconName: 'cloudy-outline',
                        labels: ['Clouds', `${data.clouds}%`]
                    }}
                    info2={{
                        iconName: 'shuffle-outline',
                        labels: [`Air Quality`, getAirQualityIndex(data.airQuality)]
                    }}
                />
                <Text style={[styles.regularFont, styles.footerText]}>
                    Developed by Felipe Dasr
                </Text>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 'auto',
        width: wd('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hg('3%')
    },
    tempContainer: {
        flexDirection: 'row',
        marginVertical: hg('2%')
    },

    regularFont: {
        color: 'white',
        fontFamily: 'Lato-Regular'
    },
    cityText: {
        fontSize: hg('3.5%'),
    },
    tempText: {
        fontSize: hg('8.5%'),
    },
    feelslikeText: {
        opacity: 0.5,
        marginVertical: hg('2%'),
    },
    footerText: {
        fontSize: hg('2%'),
        marginVertical: hg('1%'),
        textAlign: 'center'
    },
    normalText: {
        fontSize: hg('3%'),
    },

    coditionIcon: {
        height: hg('10%'),
        width: hg('10%'),
    }
})
