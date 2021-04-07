import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import StepSec from './StepSec'

export default function Menu({navigation,route}) {
    const {Name,Email,Password} = route.params;
    return (
        <ScrollView>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.main}>
              <Text style={styles.mainText} >New {'\n'}Account  </Text>
              <Text style={{fontSize:19,position:'absolute',top:40,right:30,color:'#d4d8d9'}}>2/2{'\n'}steps</Text>
            </View>  
           <StepSec navigation={navigation} Username={Name} Email={Email} Password={Password}/>
           <StatusBar style="light" />
          </View>   
      </SafeAreaView>
    </ScrollView>
      );
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#343c4c',
      },
      main : {
         marginTop:50,
         paddingHorizontal:20,
      },
      mainText : {
        color:'white',
        fontSize:48,
        fontWeight:'bold'
      },
      mainTextChild : {
    
      },
      mainForm : {
        marginTop:180
      },
      containerImage : {
        marginTop:20,
    
      },
      Image : {
        borderRadius:90,
        borderColor:'white',
        paddingVertical:20,
        paddingHorizontal:20,
        borderWidth:2,
        width:90
      },
      ImageText : {
        position:'absolute',
        top:25,
        right : 20,
        color:'#d4d8d9',
        fontSize: 16
      },
    
})