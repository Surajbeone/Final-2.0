import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Svg from '../assets/Icons/link2.png';
import StepFirst from './StepFirst';
import * as ImagePicker from 'expo-image-picker';

export default function Sign({ navigation }) {
  const [selectImg, setSelectedImg] = React.useState(null)
  const [image, setImage] = useState(null);
  const openImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.mainText} >New {'\n'}Account  </Text>
            <Text style={styles.step}>1/2{'\n'}steps</Text>
            <View style={styles.containerImage}>
              <TouchableOpacity onPress={openImage}>
                <View style={styles.Image}>
                  <Image source={Svg} />
                </View>

                <Text style={styles.ImageText}>Upload a profile picture {'\n'}(Optional)</Text>
              </TouchableOpacity>
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> &&
                <Text style={styles.uploadImage}>Image Selected</Text>
              }

            </View>
          </View>
          <StepFirst navigation={navigation} />
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
  main: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  mainText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold'
  },
  step: {
    fontSize: 19, position: 'absolute', top: 40, right: 30, color: '#d4d8d9'
  },
  mainForm: {
    marginTop: 180
  },
  containerImage: {
    marginTop: 20,

  },
  Image: {
    borderRadius: 90,
    borderColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    width: 90
  },
  ImageText: {
    position: 'absolute',
    top: 25,
    right: 20,
    color: '#d4d8d9',
    fontSize: 16
  },
  uploadImage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 20,
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: 1,
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: 'silver'
  }
})