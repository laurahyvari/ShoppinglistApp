import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  add = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  clear = () => {
    setData([]);    
  }

  
   return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <Text style = {styles.header}>Shoppinglist</Text>
      <TextInput placeholder='Title' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setText(text)}
        value={text}/>  
     <View style={styles.buttons}>
        <View style={styles.buttonLeft}><Button title="ADD" onPress={add}/></View>
        <View style={styles.buttonRight}><Button title="CLEAR" onPress={clear}/></View>
      </View>
      
      <FlatList 
          data={data} 
          renderItem = {({ item }) => 
          <Text>{item.key}</Text>}
        
      
      />      
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    justifyContent: 'center',

  },
  input: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  buttons: {
    flex: 2,
    flexDirection: 'row'
  },
  buttonLeft: {
    flex: 1,
    backgroundColor: 'white',

  },
  buttonRight: {
    flex: 1,
    backgroundColor: 'white',

  },
  list: {
    flex: 10, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
