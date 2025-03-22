import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const BackButton = () => {

    const router = useRouter();

    return (
        <Pressable style={style.button} onPress={()=>router.back()}>
            <Ionicons name='arrow-back-outline' size={24} />
        </Pressable>
    )
}

export default BackButton

const style = StyleSheet.create({
    button: {
        width: 45,
        height: 45,
        backgroundColor: "rgba(0,0,0,.1)",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5
    }
})