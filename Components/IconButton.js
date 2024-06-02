import {StyleSheet, Pressable, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Iconbutton ({ icon, label, onPress}) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={'#fff'}/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles= StyleSheet.create ({
    iconButton:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconButtonLabel: {
        color: '#fff',
        paddingTop: 12,
    }
})