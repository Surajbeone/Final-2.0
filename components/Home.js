import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SlideShow from './SlideShow'


import Sign from "../assets/Icons/sign-in.png";
import Login from '../assets/Icons/logout-square-button.png';
import Parked from '../assets/Icons/parked-car.png';
import Bill from '../assets/Icons/bill.png';
import About from '../assets/Icons/about.png';


const Home = ({ navigation }) => {
  const [sign, setSign] = useState('');
  const [login, setLogin] = useState('');
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.Home}>
        <SlideShow />
        <View style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.SignLog}>
              <View style={[styles.Sign, styles.borderStyle, sign]}>
                
                <TouchableOpacity
                  onPress={() => {
                    
                    navigation.navigate('Sign'); setSign({ backgroundColor: '#343c4c' })
                  }} >
                  <Image source={Sign} />
                  <Text style={styles.LogotextStyle} >Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.Login, styles.borderStyle, login]}>
                <TouchableOpacity
                  onPress={() => { navigation.navigate('Login'); setLogin({ backgroundColor: '#343c4c' }) }}>
                  <Image source={Login} />
                  <Text style={styles.LogotextStyle} >LogIn</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.BillPark}>
              <View style={[styles.Bill, styles.borderStyle]}>
                <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
                  <Image source={Bill} />
                  <Text style={styles.LogotextStyle} >Payment</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.Parked, styles.borderStyle]}>
                <TouchableOpacity onPress={() => navigation.navigate('P')}>
                  <Image source={Parked} />
                  <Text style={styles.LogotextStyle} >Parking</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.AboutSome}>
              <View style={[styles.About, styles.borderStyle]} >
                <Image source={About} style={{ marginLeft: 85 }} />
                <Text style={styles.LogotextStyle} >About</Text>
              </View>

            </View>
          </View>
          <StatusBar style="light" />

        </View>
      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
  safeArea: {

    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginVertical: 20,
  },
  LogotextStyle: {
    fontSize: 16,
    textAlign: 'center'
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: 'black',
  },
  Sign: {
    padding: 30,
    paddingHorizontal: 40,
    marginHorizontal: 20,
    position: 'absolute',

  },
  Login: {
    padding: 30,
    paddingHorizontal: 40,
    position: 'absolute',
    right: 20
  },
  BillPark: {
    marginVertical: 160
  },
  Bill: {

    padding: 30,
    paddingHorizontal: 40,
    marginHorizontal: 20,
    position: 'absolute',

  },
  Parked: {

    padding: 30,
    paddingHorizontal: 40,
    position: 'absolute',
    right: 20
  },
  AboutSome: {
    marginVertical: 5
  },
  About: {
    padding: 25,
    paddingHorizontal: 30,
    marginHorizontal: 20,

  }

});


export default Home;