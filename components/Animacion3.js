import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion3 = () => {

    const [animate] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animate, {
            toValue: 40, // Valor que llega
            duration: 1000, // Tiempo que tarda en llegar
        }
        ).start() // Iniciar la animación
    }, [])

    return (
        <View>
            <Animated.Text
                style={[styles.text, { fontSize: animate }]}
            >Animacion 3
            </Animated.Text>
        </View>

    )
}

export default Animacion3

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})
