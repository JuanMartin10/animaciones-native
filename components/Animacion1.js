import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion1 = () => {

    const [animate] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animate, {
            toValue: 1, // Valor que llega
            duration: 500, // Tiempo que tarda en llegar
        }
        ).start() // Iniciar la animación
    }, [])

    return (
        <Animated.View
            style={{
                opacity: animate
            }}
        >

            <Text style={styles.text}>Animacion</Text>

        </Animated.View>

    )
}

export default Animacion1

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})
