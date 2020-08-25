import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import FlexBox from './src/FlexBox';


export default function App() {
  return (
    <View style={styles.container}>
     
      <FlexBox/>
      
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',   // eixo x
    justifyContent: 'center',
    padding: 50 //eixo y
  },
  






});
