import React, { useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import {
    heightPercentageToDP as hg,
    widthPercentageToDP as wd,
} from 'react-native-responsive-screen'

import Moment from 'moment'

export default function (props) {

    formattedTime = Moment(props.time).format('LT') // 8:00 AM / 8:00 PM

    return (
        <View style={styles.container}>
            <Text style={[styles.hourText, styles.boldText]}>{formattedTime}</Text>
            <Image
                source={{ uri: 'https:' + props.condition.icon }}
                style={styles.icon}
            />
            <Text style={[styles.smallText, styles.boldText]}>{props.cloud}%</Text>

            <View style={styles.chartColumnContainer}>
                <Text style={[styles.tempText, styles.boldText]}>
                    {props.temp_c.toFixed(0)}°
                </Text>
                <View style={[styles.columnChart, {
                    height: props.temp_c < 0 ? '0%' : `${(props.temp_c+5).toFixed(0)}%` 
                }]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hg('30%'),
        width: wd('94%') / 4,
        paddingVertical: hg('3%'),
        alignItems: 'center',
    },
    boldText: {
        fontFamily: 'Lato-Bold',
        color: 'white',
    },
    hourText: {
        fontSize: hg('2.25%'),
    },
    smallText: {
        fontSize: hg('1.7%'),
    },
    tempText: {
        fontSize: hg('2%'),
    },
    icon: {
        height: hg('4%'),
        width: hg('4%'),
        marginVertical: hg('1%'),
    },
    chartColumnContainer: {
        height: '55%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    columnChart: {
        width: wd('2%'),
        backgroundColor: 'white',
        borderRadius: wd('1%'),
        marginTop: hg('0.5%')
    }
})