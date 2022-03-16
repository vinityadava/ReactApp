import {React} from "react";
import {TouchableOpacity, StyleSheet, Text,View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function List ({item, PressHandler}){
    return(
        <TouchableOpacity onPress={()=>PressHandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={20}/>
            <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        fontSize:16,
        fontWeight:"bold",
        borderLeftWidth:2,
        borderColor:"green",
        marginVertical:10,
        padding:10,
        backgroundColor:"#eee",
        borderRadius:5,
        flexDirection:"row",
    },
    text:{
        marginLeft:10,
    }
})