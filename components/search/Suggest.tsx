import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface SuggestProp {
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  }

  interface Result {

  }

const Suggest: React.FC<SuggestProp> =  ({setInputValue}) => {

    const recipeSuggestions = [
        { name: "Oatmeal" },
        { name: "Scrambled Eggs" },
        { name: "Pancakes" },
        { name: "Chicken Salad" },
        { name: "Lentil Soup" },
        { name: "Quinoa Salad" },
        { name: "Baked Salmon" },
        { name: "Veggie Chili" },
        { name: "Chicken Stir-Fry" },
        { name: "Choc. Cookies" },
        { name: "Fruit Salad" },
        { name: "Apple Pie" },
    ];


    return (
        <View style={style.container} >
            <Text style={{ fontSize: 18, fontWeight: 600 }} >Suggestions</Text>
            <FlatList
                data={recipeSuggestions}
                renderItem={({ item }) => (
                    <Pressable style={style.suggestItem}  onPress={()=>setInputValue(item.name)} >
                        <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</Text>
                        <View style={{transform:"rotate(135deg)"}} >
                            <Ionicons name='arrow-back-outline' size={20} />
                        </View>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default Suggest

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 10,
    },
    suggestItem: {
        height: 55,
        borderRadius: 15,
        justifyContent: 'space-between',
        marginVertical: 4,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})