import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Alert,  TextInput, View, StyleSheet, Text, Button } from 'react-native';
import axios from 'axios';
import { color } from 'react-native-reanimated';
import Spinner from 'react-native-loading-spinner-overlay';

class StepSec extends Component{
  
  constructor(props) {
    super(props);
    
    this.state = {
      subscriptionUpdate1 : false,
      subscriptionUpdate2 : false,
      subscriptionUpdate3 : false,
      ModelName: '',
      ModelNumber : '',
      buttoncolor:"#1c242c",
      buttoncolorsec:"#1c242c",
      week: "#1c242c",
      month : "#1c242c",
      year : "#1c242c",
      loading : false,
    };

  }
  
  

onLogin() {
  this.setState({loading:true});
  setTimeout(() => {
    this.setState({loading:false});
  }, 3000);
  const { ModelName, ModelNumber } = this.state;
  if(ModelName == '' || ModelNumber == ''){
  Alert.alert('Fill Details Please');
  }
  else{
    
    axios.post("https://parking-123.000webhostapp.com/DataInsert.php",{
		  User:this.props.Username,
		  Email:this.props.Email,
		  Password:this.props.Password,
		  ModelName:ModelName,
		  ModelNumber:ModelNumber
		  }).then((response)=>{
      Alert.alert(
        'Payment Confirmation',
        'Thanks For Registertion only one step left That is a Pay for your subscription after that you will a part of us.',
        [
          {text : 'Ask me later', onPress:()=>this.props.navigation.navigate('P')},
          {text : 'Yes I want to pay Now', onPress:()=>this.props.navigation.navigate('Payments') }
        ]
      );
    })
      .catch((err)=>{ console.log(err);});
    
  }

}





buttonOutputChange1 = () => {
  this.setState({buttoncolor:"#a4cccc"});
  this.setState({buttoncolorsec:"#1c242c"});
}
buttonOutputChange2 = () => {
  this.setState({buttoncolorsec:"#a4cccc"});
  this.setState({buttoncolor:'#1c242c'});
}
weekButtonOutputChange = () =>{
  this.setState({week:"#a4cccc"});
  this.setState({month:"#1c242c"});
  this.setState({year:"#1c242c"});
  this.setState({subscriptionUpdate1:true});
  this.setState({subscriptionUpdate2:false});
  this.setState({subscriptionUpdate3:false});
}
monthButtonOutputChange = () =>{
  this.setState({month:"#a4cccc"});
  this.setState({week:"#1c242c"});
  this.setState({year:"#1c242c"});
  this.setState({subscriptionUpdate1:false});
  this.setState({subscriptionUpdate2:true});
  this.setState({subscriptionUpdate3:false});
}
yearButtonOutputChange = () => {
  this.setState({year:"#a4cccc"});
  this.setState({month:"#1c242c"}); 
  this.setState({week:"#1c242c"});
  this.setState({subscriptionUpdate1:false});
  this.setState({subscriptionUpdate2:false});
  this.setState({subscriptionUpdate3:true});
}

  render(){
  return(
    <View style = {styles.FormContainer}>
      <Text style = {styles.FormText} >Model Name</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.ModelName}
          onChangeText={(ModelName) => this.setState({ ModelName })}   
          placeholder={'Enter Model Name Please'} 
          placeholderTextColor={'white'} keyboardType={'name-phone-pad'}/>
         <Text style = {styles.FormText} >Model Year</Text>
      <TextInput   style={styles.FormTextInput} value={this.state.ModelNumber}
          onChangeText={(ModelNumber) => this.setState({ ModelNumber })}   
          placeholder={'Enter Model Year Please'} placeholderTextColor={'white'} keyboardType={'numeric'}/>
      <Text style = {styles.FormText} >Vehicle Type</Text>
      <View style={styles.VechileType}>
          <Button title="  Two Wheeler  " color={this.state.buttoncolor} onPress={this.buttonOutputChange1}/>
          <Button title="  Four Wheeler  "  color={this.state.buttoncolorsec} onPress={this.buttonOutputChange2} />    
      </View>
      <Text style = {styles.FormText} >Subscription</Text>
      <View style={styles.VechileType}>
          <Button title="  Week  " color={this.state.week} onPress={this.weekButtonOutputChange}/>
          <Button title=" Month "  color={this.state.month} onPress={this.monthButtonOutputChange} />
          <Button title="  Year  "  color={this.state.year} onPress={this.yearButtonOutputChange} />    
      </View>
        {
          this.state.subscriptionUpdate1 == true ?
          (
          <View style={styles.Subscription}>
              <Text style={styles.SubscriptionHeader}>Week</Text>
              <Text>980/- Rupees</Text>
          </View>
          ) : false
        }
        {
          this.state.subscriptionUpdate2 == true ?
          (
          <View style={styles.Subscription}>
              <Text style={styles.SubscriptionHeader}>Month</Text>
              <Text>2070/- Rupees</Text>
          </View>
          ) : false
        }
        {
          this.state.subscriptionUpdate3 == true ?
          (
          <View style={styles.Subscription}>
              <Text style={styles.SubscriptionHeader}>Year</Text>
              <Text>18920/- Rupees</Text>
          </View>
          ) : false
        }
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
  VechileType: {
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15,
    padding:10,
    borderColor:'red'
    },
  Subscription : {
    margin:15,
    padding:10,
    marginBottom: 10,
    borderColor:'#1c242c',
    borderWidth:2,
    borderRadius:20,
    backgroundColor:'white'
  },
  spinnerTextStyle : {
    color : '#1c242c'
  },
  SubscriptionHeader : {
    fontWeight:'bold',
    fontSize:16,
    color:'#1c242c',
    textShadowColor : '#1c242c'}
})

export default StepSec;
