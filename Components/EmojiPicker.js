import { Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import {MaterialIcons}  from '@expo/vector-icons';
import EmojiList from './EmojiList';


export default function EmojiPicker ({isVisible, children, onClose, setPickedEmoji}){
    return(
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name={"close"} color={"#fff"} size={22}/>
                    </Pressable>
                </View>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onClose}></EmojiList>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },

    titleContainer:{
        height: '16%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#464C55'
    },
    title: {
        color: '#fff',
        fontSize: 16,
      },
})