import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';

interface CardProp {
    image: string,
    title: string,
    id: any
}

const Popular = () => {

    const [data, setData] = useState<CardProp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String>();

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=7cb3d33c08a64d6e9ed4b53ce1041581&query=pasta&number=20');
                // const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json.results);
                console.log(json.results)
                // setData(json);
                // console.log(json)
            } catch (error) {
                setError("error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const id = 1231;

    const go = (id: any) =>{
        router.push(`/${id}`)
    }

    return (
        <View style={style.gridContainer}>
            {data?.length > 0 ? data.map((item, index) => (
                <TouchableOpacity key={index} style={style.card} onPress={()=>go(`${item.id}`)}>
                    <Image source={{ uri: `${item?.image}` }} style={{ width: '100%', aspectRatio: 1, borderRadius: 15 }} />
                    <Text style={{ fontSize: 14, fontWeight: 600, maxHeight: 40, }}>{item?.title}</Text>
                </TouchableOpacity>
            )) : <Text>Loading</Text>}
        </View >
    )
}

export default Popular

const style = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', //Optional, allows item to wrap to next line if needed.
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '45%',
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'white'
    }
})