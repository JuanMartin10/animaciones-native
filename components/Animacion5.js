import React, { useState } from 'react'
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'

const Animacion4 = () => {

    const [animate] = useState(new Animated.Value(1))



    const pressBtn = () => {
        Animated.spring(animate, {
            toValue: .8
        }).start()
    }

    const releaseBtn = () => {
        Animated.spring(animate, {
            toValue: 1,
            friction: 4, // Cuanto más bajo, mayor rebote
            tension: 100

        }).start()
    }

    const styleAnimate = {
        transform: [{ scale: animate }]
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPressIn={() => pressBtn()}
                onPressOut={() => releaseBtn()}
            >
                <Animated.View style={[styles.btn, styleAnimate]}>
                    <Text style={styles.text}>
                        inicir sesion
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>

    )
}

export default Animacion4

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})
