import { View, Text, FlatList, SafeAreaView, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'

type CardProp = {
  title: string,
  type: string,
  ImageSource: string
}

const Data = [
  {
    title: "Veg Burger",
    type: "Breakfast",
    ImageSource: "https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg"
  },
  {
    title: "Veg Burger",
    type: "Breakfast",
    ImageSource: "https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg"
  },
  {
    title: "Veg Burger",
    type: "Breakfast",
    ImageSource: "https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg"
  },
]

const CardSlider = () => {
  return (
    <SafeAreaView style={{maxHeight:320}}>
      <FlatList
        data={Data}
        horizontal
        renderItem={({ item }) => (
          <Pressable style={style.card}>
            <ImageBackground source={{ uri: `${item.ImageSource}` }} style={{ flex: 1 }}>
              <View style={style.cardDetail} >
                <View style={{ padding: 5, backgroundColor: 'white',width:100,alignItems:'center',borderRadius:5  }} >
                  <Text >{item.type}</Text>
                </View>
                <Text style={{fontSize:24,color:'white',fontWeight:600}} >{item.title}</Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </SafeAreaView>
  )
}

export default CardSlider

const style = StyleSheet.create({
  card: {
    width: 220,
    height: 320,
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  cardDetail: {
    padding: 15,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: 'flex-end',
    gap:10
  }
})


