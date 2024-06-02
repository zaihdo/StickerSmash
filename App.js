import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceHolderImage = require('./assets/images/background-image.png')
const wHeight = Dimensions.get('window').height 
const wWidth = Dimensions.get('window').width

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    }
    else {
      alert('You did not select any image');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHoldderImageSource={PlaceHolderImage} selectedImage={selectedImage}></ImageViewer>
      </View>
      <View  style={styles.footerContainer}>
        <Button theme={"primary"} label={'Choose a photo'} onPress={pickImageAsync}/>
        <Button label={'Use this photo'}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: wWidth * 0.2,
    alignItems: 'center'
  }, 

  image: {
    alignItems: 'center',
    width: wWidth * 0.9,
    height: wHeight * 0.6,
    borderRadius: 18
  },

  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800'
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
