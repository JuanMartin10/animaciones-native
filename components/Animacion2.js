import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion2 = () => {

    const [animate] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animate, {
            toValue: 450, // Valor que llega
            duration: 1000, // Tiempo que tarda en llegar
        }
        ).start() // Iniciar la animación
    }, [])

    return (
        <Animated.View
            style={[
                styles.box,
                {
                    width: animate,
                    height: animate
                }
            ]}
        >


        </Animated.View>

    )
}

export default Animacion2

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
