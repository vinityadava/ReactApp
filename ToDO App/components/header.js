import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop:20,
        padding:20,
        width:"100%",
        position:"absolute",
        top:10,
        backgroundColor:"#171717",
        justifyContent:"center",
    },
    text:{
        fontSize:16,
        fontWeight:"bold",
        textTransform:"uppercase",
        fontFamily:"sans-serif",
        color:'#fff',
    }
})