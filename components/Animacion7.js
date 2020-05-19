import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion6 = () => {

    const [animate1] = useState(new Animated.Value(0))
    const [animate2] = useState(new Animated.Value(1))


    useEffect(() => {

        Animated.sequence([
            Animated.timing(animate1, {
                toValue: 300,
                duration: 1000
            }),
            Animated.spring(animate2, {
                toValue: 10
            }),
            Animated.spring(animate2, {
                toValue: 1
            }),
            Animated.timing(animate1, {
                toValue: 600,
                duration: 1000
            }),

        ]).start()
    }, [])

    const styleAnimated = {
        transform: [
            { translateY: animate1 },
            { scale: animate2 },

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
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
