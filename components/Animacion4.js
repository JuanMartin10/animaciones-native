import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion4 = () => {

    const [animate] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animate, {
            toValue: 360, // Valor que llega
            duration: 500, // Tiempo que tarda en llegar
        }
        ).start() // Iniciar la animación
    }, [])

    const interpolate = animate.interpolate({
        inputRange: [1, 360],
        outputRange: ['0deg', '360deg']
    })

    const styleAnimate = {
        transform: [{ rotate: interpolate }]
    }

    return (
        <View>
            <Animated.View
                style={[styles.box, styleAnimate]}
            >
            </Animated.View>
        </View>

    )
}

export default Animacion4

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
