import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'
// import * as SplashScreen from 'expo-splash-screen';

import CircleButton from './Components/CircleButton';
import IconButton from './Components/IconButton';
import EmojiPicker from './Components/EmojiPicker';
import EmojiSticker from './Components/EmojiSticker';
import domtoimage from 'dom-to-image';


const PlaceHolderImage = require('./assets/images/background-image.png')
const wHeight = Dimensions.get('window').height 
const wWidth = Dimensions.get('window').width

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();

  if (status === null) {
    requestPermission();
  }

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
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {

    if (Platform.OS !== 'web'){
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    else {
      try{
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 330,
          height: 400
        })

        let link = document.createElement('a');
        link.download = 'stickersmash.jpeg';
        link.href = dataUrl;
        link.click();
      }
      catch{
        console.log(e);
      }
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  // temp code to delay splash screen
  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 5000);
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer placeHoldderImageSource={PlaceHolderImage} selectedImage={selectedImage}></ImageViewer>
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
        </View>
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
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} setPickedEmoji={setPickedEmoji}></EmojiPicker>
      <StatusBar style="light" />
    </GestureHandlerRootView>
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
