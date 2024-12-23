import {Button, View, StyleSheet, Text, TextInput} from "react-native";
import {useState} from "react";


export default function Profile({navigation}){
    const [username, setUsername] = useState()
    const [password, SetPassword] = useState()
    function hand(){


    }
    return (
        <View style={styles.container}>

            <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder='username'/>
            <TextInput style={styles.input} value={password} onChangeText={SetPassword} placeholder='password'/>
            <View style={styles.btn}>
                <Button onPress={hand} title={'Login'}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        color:'#5e5e5e',
        marginTop:10
    },
    btn:{
        width:130,
        height:20,
        marginTop:20
    }
})