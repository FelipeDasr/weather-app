import React from 'react'

import {
    View,
    Modal,
    StyleSheet,
    Text,
    Image,
} from 'react-native'

import {
    widthPercentageToDP as wd,
    heightPercentageToDP as hg,
} from 'react-native-responsive-screen'

import SearchBox from '../components/SearchBox'

export default props => {

    const {
        visible,
        changeCity
    } = props

    return (
        <Modal
            style={styles.container}
            animationType="slide"
            visible={visible}
        >
            <View style={[styles.container, styles.viewContainer]}>
                <Image
                    source={{
                        uri: "https://cdn.weatherapi.com/weather/64x64/day/116.png"
                    }}
                    style={{ height: hg('15%'), width: hg('15%')}}
                />
                <Text style={styles.text}>
                    Weather App
                </Text>
                <SearchBox
                    onSubmit={async city => {
                        await changeCity(city)
                    }}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00B5D9',
        paddingHorizontal: wd('7%'),
    },
    text: {
        fontFamily: 'Lato-Regular',
        color: 'white',
        fontSize: wd('10%'),
        textAlign: 'center',
        marginBottom: hg('5%')
    }
})