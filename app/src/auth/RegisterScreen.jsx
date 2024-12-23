import {View, Text, StyleSheet, ImageBackground} from "react-native";


export function RegisterScreen(){

    return (
        <ImageBackground source={{uri: 'https://i.pinimg.com/474x/77/92/16/779216be0bce694d2ab3318f317346aa.jpg'}} style={styles.container}>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',

    }
})