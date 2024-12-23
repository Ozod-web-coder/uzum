import {TextInput, View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Feather";



export function Header(){
    return (
        <View style={styles.header}>
            <View style={styles.input_cont}>
                <Icon name='search' style={{marginLeft:10}} size={20} color='black'/>
                <TextInput placeholder={'Можете искать товары'} style={styles.input} />
            </View>
            <Icon name='heart' style={{marginRight:10, marginTop:10}} size={20} color='black'/>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        display:'flex',
        width:'100%',
        height:30,
        flexDirection:"row"
    },
    input_cont:{
        width:'92%',
        height:30,
        display:'flex',
        flexDirection:"row",
        backgroundColor:"#c5c5c5",
        alignItems:'center',
        borderRadius:5,
        margin:6
    },
    input:{
        width:'100%',
        height:20,
        marginLeft:10,
        color:"#5d5d5d"
    }
})