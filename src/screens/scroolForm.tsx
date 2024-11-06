import * as React from 'react';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import  SimpleChecklistForm  from "./form"
import { NavigationContainer } from "@react-navigation/native";


function feed(){

    const ref = React.useRef(null);

    useScrollToTop(ref);
  return(
            <ScrollView contentContainerStyle={styles.container} ref={ref}>
                
            </ScrollView>  
  )
}

const styles = StyleSheet.create({
    
    
    container: {
        
        paddingTop: 20,
        paddingLeft:"10%",
        paddingRight:"10%",
        backgroundColor:"rgb(59 130 246)",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 15,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
});

export default feed;
