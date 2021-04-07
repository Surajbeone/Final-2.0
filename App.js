import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {StackView} from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack';


import Login from "./components/Login";
import IconRefer from './components/IconRefer';
import Parking from './components/Parking';
import Payments from './components/Payments';
import Home from './components/Home';
import Sign from './components/Sign';
import Menu from './components/Menu';
import P from './components/P';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.Navigator}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{headerStyle: styles.Headerstyle}}/>
        <Stack.Screen name="IconRefer" component={IconRefer} />
        <Stack.Screen name="Sign" component={Sign} options={{headerStyle: styles.Headerstyle}}/>
        <Stack.Screen name="Login" component={Login} options={{headerStyle: styles.Headerstyle }}/>
        <Stack.Screen name="Payments" component={Payments} options={{headerStyle: styles.Headerstyle}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerStyle: styles.Headerstyle}}/>
        <Stack.Screen name="Parking" component={Parking} options={{headerStyle: styles.Headerstyle}} />
        
        <Stack.Screen name="P" component={P} options={{headerStyle: styles.Headerstyle}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Navigator: {
    flex: 1,
    backgroundColor: 'green',
  },
  Headerstyle : {
    backgroundColor: '#343c4c',
    borderColor:'white',
    borderWidth:1,
    borderTopLeftRadius:35,
    borderTopRightRadius:35
  }
});
