import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'

import {
    heightPercentageToDP as hg,
    widthPercentageToDP as wd,
} from 'react-native-responsive-screen'

import HourInfo from './HourInfo'

export default props => {

    const renderItem = ({ item }) => (
        <HourInfo {...item} key={item.time} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.smallText}>
                    Hourly Forecast
                </Text>
            </View>
            <View style={styles.forecastContainer}>
                <FlatList
                    data={props.data.hour}
                    keyExtractor={item => item.time}
                    renderItem={(item) => renderItem(item)}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hg('35%'),
        width: wd('94%'),
        marginHorizontal: wd('3%'),
        marginVertical: hg('1%')
    },
    titleContainer: {
        height: hg('5%'),
        paddingHorizontal: wd('3%'),
        justifyContent: 'center'
    },
    forecastContainer: {
        height: hg('30%'),
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: hg('1%'),
    },
    smallText: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: hg('2.5%'),
        marginVertical: hg('0.5%')
    }
})