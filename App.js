import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import CircleButton from './Components/CircleButton';
import IconButton from './Components/IconButton';

const PlaceHolderImage = require('./assets/images/background-image.png')
const wHeight = Dimensions.get('window').height 
const wWidth = Dimensions.get('window').width

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
    }
    else {
      alert('You did not select any image');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHoldderImageSource={PlaceHolderImage} selectedImage={selectedImage}></ImageViewer>
      </View>
      {showAppOptions ? (
        <View style={styles.optionButtonsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={"refresh"} label={"Reset"} onPress={onReset}></IconButton>
            <CircleButton onPress={onAddSticker}></CircleButton>  
            <IconButton icon={"download"} label={'Save'} onPress={onSaveImageAsync}></IconButton>
          </View>
        </View>
        ) : (
        <View  style={styles.footerContainer}>
          <Button theme={"primary"} label={'Choose a photo'} onPress={pickImageAsync}/>
          <Button label={'Use this photo'} onPress={() => setShowAppOptions(true)}/>
        </View>
      )}
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
  },

  optionButtonsContainer: {
    bottom: wHeight * 0.08,
    position: 'absolute'
  },

  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
