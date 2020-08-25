import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Calculadora from './src/Calculadora';


export default function App() {
  return (
    <View style={styles.container}>
     
      <Calculadora/>
      
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',   
    justifyContent: 'center',
    
  },
  
});
