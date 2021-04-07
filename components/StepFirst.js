import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Alert,  TextInput, View, StyleSheet, Text, Button} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';


class StepFirst extends Component{
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      Email: '',
      CheckDataPlease: "Email exist already",
      loading : false, 
    };

  }
startLoading=()=>{
  this.setState({loading:true});
  Alert.alert("Hello");
  setTimeout(() => {
    setLoading(false);
  }, 3000);
}
onLogin() {
  this.setState({loading:true});
  setTimeout(() => {
    this.setState({loading:false});
  }, 3000);
  const { username, password,Email } = this.state;
  if(username == '' || password=='' || Email== ''){
  Alert.alert('Fill Details Please');
  }
  else{
    axios.post("https://parking-123.000webhostapp.com/CheckData.php",{
		  User:this.state.Username,
		  Email:this.state.Email,
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
        this.props.navigation.navigate('Menu',{
          Name : this.state.username,
          Email : this.state.Email,
          Password : this.state.password
        });
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
      <TextInput   style={styles.FormTextInput} value={this.state.password}
          placeholderTextColor={'white'} keyboardType={'visible-password'}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
           />
           <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.state.loading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
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
    borderColor:'white',
    color:'white'
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
  spinnerTextStyle: {
    color: '#1c242c',
  },
})

export default StepFirst;