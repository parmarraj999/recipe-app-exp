import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import CardSlider from '@/components/Home/Card'
import Popular from '@/components/Home/Popular'
import { Link, useRouter } from 'expo-router'

const typeData = [
    { text: 'All' },
    { text: 'Breackfast' },
    { text: 'Lunch' },
    { text: 'Dinner' },
    { text: 'Snacks' },
]

const Home = () => {

    const [meal, setMeal] = useState("All")

    const router = useRouter()

    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.header} >
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "rgba(0,0,0,.4)", fontSize: 18, fontWeight: 600 }}>Good Morning</Text>
                        <Text style={{ fontSize: 24, fontWeight: 600 }}>What would you like to cood for today ?</Text>
                    </View>
                    <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={require("../../assets/images/profile.jpeg")} />
                </View>
                <TextInput placeholder='Search Any Recipe...' style={style.textInput} />
                <SafeAreaView style={{ height: 50, width: '100%', paddingHorizontal: 15 }}>
                    <FlatList
                        data={typeData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setMeal(item.text)}
                                style={meal === item.text ? style.itemActive : style.item}>
                                <Text style={meal === item.text ? style.itemTextActive : style.itemText} >{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </SafeAreaView>
                <SafeAreaView style={{ marginTop: 15 }}>
                    <CardSlider />
                </SafeAreaView>
                <View style={{width:'100%',alignItems:"flex-start",paddingHorizontal:15}} >
                    <Text style={{fontSize:18,fontWeight:600}}>Popular Recipes</Text>
                </View>
                <Popular />
                <Pressable onPress={()=>router.push('/123')}>
                    <Text>Go to Details</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        alignItems: 'center',
        gap: 15
    },
    header: {
        marginTop: 15,
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        height: 60,
        backgroundColor: "white",
        borderRadius: 15,
        width: '90%',
        fontWeight: 600,
        paddingHorizontal: 15
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 4,
        backgroundColor: "white",
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    itemActive: {
        paddingHorizontal: 15,
        paddingVertical: 4,
        backgroundColor: "#2B2D41",
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    itemText: {
        fontSize: 16,
        fontWeight: 500,
        color: "black"
    },
    itemTextActive: {
        fontSize: 16,
        fontWeight: 500,
        color: "white"
    },
})