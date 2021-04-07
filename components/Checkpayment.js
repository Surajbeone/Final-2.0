import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
export default class App extends React.Component{
  
  constructor(props) {
    super(props);
    
    this.state = {
      selectImg : null
    };

  }
  
  
   openImage = async () =>{
    let permission = await ImagePicker.requestCameraRollPermissionsAsync();


    if(permission.granted === false){
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync()

    if(picker.cancelled ===true){
      return;
    }
    this.setState({selectImg:picker.uri})
    console.log(picker)
  }
  render(){
  return (
    <View style={styles.container}>
        {
          this.state.selectImg !== null ?  (
            <Image 
              style={styles.image} 
              source={{uri:(this.state.selectImg !== null) ? this.state.selectImg : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'}} />
          ) : <Text>Kosong</Text>
        }
      <TouchableOpacity 
        onPress={this.openImage}
        style={styles.button}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderRadius:10,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  image:{
    width:300,
    height:300,
    resizeMode:'contain'
  }
});