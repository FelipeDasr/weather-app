import React from 'react'

import {
    View,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    widthPercentageToDP as wd,
    heightPercentageToDP as hg,
} from 'react-native-responsive-screen'

export default props => {

    const { visible, onReload } = props

    return (
        <Modal
            style={styles.container}
            animationType="none"
            visible={visible}
        >
            <View style={[styles.container, styles.viewContainer]}>
                <Text style={styles.text}>
                    Network Error, check your connection and try again.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onReload()}
                >
                    <Text style={styles.text}>
                        Reload
                    </Text>
                </TouchableOpacity>
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
        paddingHorizontal: wd('7%')
    },
    text: {
        fontFamily: 'Lato-Regular',
        color: 'white',
        fontSize: wd('5%'),
        textAlign: 'center'
    },
    button: {
        height: hg('5%'),
        width: wd('30%'),
        backgroundColor: '#214761',
        marginVertical: hg('5%'),
        justifyContent: 'center'
    }
})