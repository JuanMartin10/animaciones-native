import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion6 = () => {

    const [animate1] = useState(new Animated.Value(0))
    const [animate2] = useState(new Animated.Value(-50))


    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animate2, {
                    toValue: -30,
                    duration: 0,
                }),
                Animated.timing(animate1, {
                    toValue: 60,
                    duration: 500
                }),
                Animated.timing(animate2, {
                    toValue: 30,
                    duration: 500
                }),
                Animated.timing(animate1, {
                    toValue: 0,
                    duration: 500
                }),
                Animated.timing(animate2, {
                    toValue: -30,
                    duration: 500
                }),
            ])).start()
    }, [])

    const styleAnimated = {
        transform: [
            { translateY: animate1 },
            { translateX: animate2 },

        ]
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View
                style={[
                    styles.box,
                    styleAnimated
                ]}>

            </Animated.View>
        </View>

    )
}

export default Animacion6

const styles = StyleSheet.create({
    box: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
})
