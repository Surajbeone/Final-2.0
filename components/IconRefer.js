import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Sign from "../assets/Icons/sign-in.png";
import Login from '../assets/Icons/logout-square-button.png';
import Parked from '../assets/Icons/parked-car.png';
import Bill from '../assets/Icons/bill.png';
import About from '../assets/Icons/about.png';

import {StyleSheet,SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const IconRefer=({navigation})=> {
  const [sign,setSign]=useState(
    {backgroundColor:'blue',}
  )
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.SignLog}>
          <View  style={[styles.Sign,styles.borderStyle,sign]}>
            <Image source={Sign} />
            <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
            <Text style={styles.LogotextStyle} >Sign Up</Text>
            </TouchableOpacity>
          </View>
         
         
          <View style={[styles.Login,styles.borderStyle]}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}  title="Go to a profile screen">
            <Image  source={Login}/>
            <Text style={[styles.LogotextStyle]} >LogIn</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.BillPark}>
          <View style={[styles.Bill,styles.borderStyle]}>
            <Image source={Bill} />
            <Text style={styles.LogotextStyle} >Payment</Text>
          </View>
          <View style={[styles.Parked,styles.borderStyle]}>
            <Image source={Parked}/>
            <Text style={styles.LogotextStyle} >Parking</Text>
          </View>
        </View>
        <View style={styles.AboutSome}>
          <View style={[styles.About,styles.borderStyle]} >
            <Image source={About} style={{marginLeft:85}}/>
            <Text style={styles.LogotextStyle} >About</Text>
          </View>
          
        </View>
      </View>
      <StatusBar style="light" />
      
    </View>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    borderColor:'yellow',
    borderWidth:2,
    flex:1,
    backgroundColor: 'white',
  },
  container : {
    marginVertical : 20,  
  },
  LogotextStyle : {
    fontSize:16,
    textAlign:'center'
  },
  borderStyle : {
    borderWidth : 2,
    borderColor:'black',
  },
  Sign : {   
    padding:30,
    paddingHorizontal:40,
    marginHorizontal:20,
    position:'absolute',

  },
  Login : {
    padding:30,
    paddingHorizontal:40,
    position:'absolute',
    right:20
  },
  BillPark : {
    marginVertical: 160  
  },
  Bill : {
    
    padding:30,
    paddingHorizontal:40,
    marginHorizontal:20,
    position:'absolute',

  },
  Parked : {
    
    padding:30,
    paddingHorizontal:40,
    position:'absolute',
    right:20
  },
  AboutSome : {
    marginVertical: 5 
  },
  About : {
    padding:30,
    marginHorizontal:20,

  }
})

export default IconRefer;