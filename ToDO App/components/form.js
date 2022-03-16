import React, { useState } from "react";
import { StyleSheet, Text, TextInput,Button,View} from "react-native";

export default function Form({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val)
    }
    return(
        <View>
            <Text style={styles.text}>Hi,There. You can add your todos below..</Text>
            <TextInput style={styles.input} placeholder="Add new todos.." onChangeText={changeHandler}/>
            <Button title="Add TODO" color={"#212121"} onPress={() => submitHandler(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
input: {
    borderRadius:5,
    borderBottomWidth:1,
    height:30,
    paddingLeft:5,
    fontSize:16,
    marginVertical:20,
  },
text:{
    marginBottom:10,
    fontSize:16,
    textAlign:'left',
    fontWeight:'100',
  }
})