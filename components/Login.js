import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import LoginForm from './LoginForm'


export default function Login({navigation}) {
  return (
    <ScrollView>
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.mainText} >Login </Text>
          <View style={styles.message}>
             <Text style={styles.messageText}>You can try the application without {'\n'}signning in , 
             but why would you do that,{'\n'}boy</Text>
          </View>
        </View>
        <LoginForm navigation={navigation}/>     
      </View>
      </SafeAreaView>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  main : {
     marginTop:100,
     paddingHorizontal:20,
  },
  mainText : {
    color:'white',
    fontSize:72,
    marginTop:30,
    textAlign : 'center',
  },
  message : {
    marginTop:20,  
  },
  messageText : {
    color:'#d4d8d9',
    fontSize:16,
    textAlign:'center'
  },
   safeArea: {
    flex: 1,
    backgroundColor: '#343c4c',
  },
})