import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

import {
    heightPercentageToDP as hg,
    widthPercentageToDP as wd
} from 'react-native-responsive-screen'

import Icon from 'react-native-vector-icons/Ionicons'

export default props => {

    const { title, info1, info2 } = props

    const InfoContainer = infoProps => (
        <>
            <Icon name={infoProps.iconName} size={hg('5%')} color={'white'} />
            <View style={[styles.infoContainer]}>
                <Text style={styles.text}>{infoProps.labels[0]}</Text>
                <Text style={styles.text}>{infoProps.labels[1]}</Text>
            </View>
        </>
    )

    return (
        <View style={styles.container}>
            {title ?
                (
                    <View style={styles.dateContainer}>
                        <Text style={styles.text}>{title}</Text>
                    </View>
                ) :
                (
                    <View style={{ marginVertical: hg('0.5%') }} />
                )
            }
            <View style={styles.boxContainer}>
                <InfoContainer {...info1} />
                <Text style={styles.separator} >|</Text>
                <InfoContainer {...info2} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wd('94%'),
        marginHorizontal: wd('3%'),
    },
    dateContainer: {
        height: hg('5%'),
        justifyContent: 'center',
        paddingHorizontal: wd('3%')
    },
    boxContainer: {
        height: hg('15%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: hg('1%'),
    },
    infoContainer: {
        marginVertical: 'auto',
        width: wd('30%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: hg('2.5%'),
    },
    separator: {
        color: 'white',
        fontSize: hg('7%'),
        fontFamily: 'Lato-Light'
    }
})