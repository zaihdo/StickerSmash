import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button';

const PlaceHolderImage = require('./assets/images/background-image.png')
const wHeight = Dimensions.get('window').height 
const wWidth = Dimensions.get('window').width

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHoldderImageSource={PlaceHolderImage}></ImageViewer>
      </View>
      <View  style={styles.footerContainer}>
        <Button theme={"primary"} label={'Choose a photo'} />
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
