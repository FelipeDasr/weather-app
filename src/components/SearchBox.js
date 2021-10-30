import React, { useState } from 'react'
import {
    TextInput,
    StyleSheet,
    View
} from 'react-native'

import {
    heightPercentageToDP as hg,
    widthPercentageToDP as wd
} from 'react-native-responsive-screen'

import Icon from 'react-native-vector-icons/EvilIcons'

export default props => {

    const [city, setCity] = useState('')
    const { onSubmit } = props

    return (
        <View style={styles.searchBoxContainer}>
            <View style={styles.searchBoxSubcontainer}>
                <Icon name={'search'} color={'white'} size={hg('4%')} />
                <TextInput
                    style={[
                        styles.textInputContainer,
                        styles.regularFont,
                    ]}
                    value={city}
                    onChangeText={text => setCity(text)}
                    onEndEditing={() => {
                        if(city) {
                            onSubmit(city)
                            setCity('')
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBoxContainer: {
        width: wd('100%'),
        marginVertical: hg('1%'),
        alignItems: 'center',
    },
    searchBoxSubcontainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    textInputContainer: {
        height: hg('4%'),
        width: wd('50%'),
        fontSize: hg('3%'),
        padding: 0,
    },
    regularFont: {
        color: 'white',
        fontFamily: 'Lato-Regular'
    },
})