import {View, Image} from 'react-native';

export default function EmojiSticker({stickerSource, imageSize}) {
  return (  
        <View style={{top: -350}}>
            <Image
                source={stickerSource}
                resizeMode='contain'
                style={{width: imageSize, height: imageSize}}
            />
        </View>
  ) 
}
