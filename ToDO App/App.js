import {React, useState} from 'react';
import { SafeAreaView, StyleSheet,Text, View, Alert, FlatList,TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackComponent } from 'react-native';
import Header from './components/header';
import Form from './components/form';
import List from './components/list';

export default function App() {
  const [todos, setTodos] = useState([
    {text:"Study Physics" , key:1},
    {text:"Program" , key:2},
    {text:"Play Chess" , key:3}
  ])

  const PressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) =>{
    if (text.length > 3){
      setTodos((prevTodos)=>{
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert("Oppps!","Todo title must be greater than 3 words",[
        {text: "OK", onPress:()=>console.log("alert")}
      ]);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
      <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Form submitHandler={submitHandler}/>
        <Text style={{marginTop:20,fontSize:16,fontWeight:"700"}}>Current Todos:</Text>
        <FlatList
        style={styles.flatlist} 
        data={todos} 
        renderItem={({item})=> (
          <List item={item} PressHandler={PressHandler}/>
        )}
        />
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  content:{
    paddingHorizontal:20,
    position:"absolute",
    top:150,
    width:"100%",
  },
  flatlist:{
    marginVertical:20,
  }
});
