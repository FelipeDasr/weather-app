import React from 'react'

import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

import {
    heightPercentageToDP as hg,
} from 'react-native-responsive-screen'

export default props => (
    <View style={styles.container}>
        <ActivityIndicator size={hg('5%')} color={'white'} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})