import {StyleSheet, Image, Dimensions} from 'react-native';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default function ImageViewer({ placeHoldderImageSource, selectedImage}){

    const imageSource = selectedImage ? {uri : selectedImage} : placeHoldderImageSource;

    return (
        <Image source={imageSource} style={styles.image}/>
    );
}

const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        borderRadius: 18
    }
});