// screens/HomeScreen.tsx
import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity  } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


function HomeScreen(){
  return (
    <View style={styles.container} >
      <View className='flex items-center text-justify w-3/4 h-3/4 '>
        <Image  style={styles.image} source={require('../assets/images/gado-nelore.png')} />
        <Text style={styles.text}>Sua lista a um toque de de você!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButom}> Vamos começar? </Text> 
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:"center",
    alignItems: 'center',
    height:"30%",
    backgroundColor:"rgb(59 130 246)",

  },
  image:{
    width: "100%",       
    spectRatio: 1.5,  
    resizeMode: "contain",
    backgroundColor:"rgb(59 130 246)",
  },
  text: {
    fontSize: 20,
    paddingTop: 30,
  },
  textButom:{
    color:"black",
  },
  button:{
      backgroundColor: 'white',
      paddingVertical: 15, 
      paddingHorizontal: 30,
      borderRadius: 10, 
      alignItems: 'center',
      marginTop: 25, 
  },
});

export default HomeScreen;