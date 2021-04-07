import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Alert,  TextInput, View, StyleSheet, Text, Button } from 'react-native';
import axios from 'axios';

class LoginForm extends Component{
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      Email: '',
      CheckDataPlease: "Sorry You Don't have Account",
    };

  }
  
  

onLogin() {
  const { username, password,Email } = this.state;
  if(username == '' || password=='' || Email== ''){
  Alert.alert('Fill Details Please');
  }
  else{
    axios.post("https://parking-123.000webhostapp.com/Verify.php",{
		  User:this.state.username,
		  Email:this.state.Email,
      Password:this.state.password
		  }).then((response)=>{
		  if( response.data == this.state.CheckDataPlease){
        Alert.alert(response.data);
        this.setState({
          username : '',
          password : '',
          Email : ''
        })
      }
      else{
        
        this.props.navigation.navigate('Parking');
      }
    })
      .catch((err)=>{ console.log(err);});
    
  }
    
  

}

  render(){
  return(
    <View style = {styles.FormContainer}>
      <Text style = {styles.FormText} >NAME</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.username}
          onChangeText={(username) => this.setState({ username })}   
          placeholder={'Username'} placeholderTextColor={'white'} keyboardType={'name-phone-pad'}/>
      <Text style = {styles.FormText} >EMAIL</Text>
      <TextInput  style={styles.FormTextInput} value={this.state.Email}
          placeholderTextColor={'white'} keyboardType={'email-address'}
          onChangeText={(Email) => this.setState({ Email })}
          placeholder={'Email'}
           />
      <Text style = {styles.FormText} >PASSWORD</Text>
      <TextInput  style={styles.FormTextInput} value={this.state.password}
          placeholderTextColor={'white'} keyboardType={'visible-password'}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
           />
      <Text style = {styles.FormButton}  onPress={this.onLogin.bind(this)} accessibilityRole
='button'  >Next</Text>
    </View>
  )
  }
}


const styles = StyleSheet.create({
  FormContainer : {
    padding : 20,
    marginTop : 20,
    flex : 1,
  },
  FormText : {
    color : 'white',
    fontWeight:'bold',
    fontSize:16,
  },
  FormTextInput : {
    marginVertical:15,
    borderBottomWidth:2,
    width:310,
    height:45,
    borderColor:'white'
  },
  FormButton : {
    fontSize:32,
    fontWeight : 'bold',
    textAlign : 'center',
    marginTop:30,
    backgroundColor : '#1c242c',
    padding : 10,
    borderRadius : 40,
    color : 'white'
  },
  
})

export default LoginForm;