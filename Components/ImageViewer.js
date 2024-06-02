import {StyleSheet, Image, Dimensions} from 'react-native';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export default function ImageViewer({ placeHoldderImageSource}){
    return (
        <Image source={placeHoldderImageSource} style={styles.image}/>
    );
}

const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        borderRadius: 18
    }
});