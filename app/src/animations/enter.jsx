import Animated, {
    BounceIn,
    BounceOut,
    Easing,
    LightSpeedInRight,
    LightSpeedOutLeft,
    PinwheelIn, PinwheelOut, RollInRight, RollOutLeft, SlideInRight, SlideInUp, SlideOutLeft
} from "react-native-reanimated";
import {StyleSheet, Text, View} from 'react-native'

export function Enter(){
    LightSpeedOutLeft.duration(200).easing(Easing.ease)
    LightSpeedInRight.duration(200).easing(Easing.ease)
    return (
        <View>
            <Animated.View style={styles.container} entering={PinwheelIn} exiting={PinwheelOut}>
                <Text style={styles.text}>
                    Pin wheel
                </Text>
            </Animated.View>
            <Animated.View style={styles.container} entering={BounceIn} exiting={BounceOut}>
                <Text style={styles.text}>
                    Bounce In
                </Text>
            </Animated.View>
            <Animated.View style={styles.container} entering={LightSpeedInRight} exiting={LightSpeedOutLeft}>
                <Text style={styles.text}>
                    Light Speed
                </Text>
            </Animated.View>
            <Animated.View style={styles.container} entering={RollInRight} exiting={RollOutLeft}>
                <Text style={styles.text}>
                    Roll
                </Text>
            </Animated.View>
            <Animated.View style={styles.container} entering={SlideInUp} exiting={SlideOutLeft}>
                <Text style={styles.text}>
                    Slide In
                </Text>
            </Animated.View>
        </View>

    )
}



const styles = StyleSheet.create({
    container:{
        width:200,
        height:30,
        backgroundColor:'purple',
        marginLeft:120,
        marginTop:20,
        display:'flex',
        alignItems:"center"
    },
    text:{
        fontSize:20,
        color:'white'
    }
})