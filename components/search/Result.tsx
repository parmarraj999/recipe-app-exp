import { View, Text, StyleSheet, ScrollView, ImageBackground, Pressable } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'expo-router';

interface ResultProp {
  inputValue: string;
}

interface Result {
  results(results: any): any;
  length: ReactNode;
  map(arg0: (item: any, index: any) => React.JSX.Element): React.ReactNode;
  id: number,
  title: string,
  image: string,
  imageType: string
}

const Result: React.FC<ResultProp> = ({ inputValue }) => {



  const [data, setData] = useState<Result | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&apiKey=7cb3d33c08a64d6e9ed4b53ce1041581`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Result = await response.json();
        setData(data.results);
        console.log(data)
      } catch (error) {
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ width: "100%" ,marginTop:10}} >
      {
        data ? (
          <Text style={{ fontSize: 18, fontWeight: 600, marginLeft:10 }} >{data.length} Recipes</Text>
        )
        : ""
      }
      <View style={style.container} >
       {
        data ? (
          <View style={style.recipeContainer} >
          {
            data.map((item, index) => (
              <Pressable style={style.recipeBox} onPress={()=>router.push(`/${item.id}`)} >
                <ImageBackground source={{ uri: item.image }} style={{ width: "100%", height: "100%" }}>
                  <View style={style.recipeDetail} >
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 600 }}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </Pressable>
            ))
          }
        </View>
        ) : 
        <View>
          <Text>Loading</Text>
        </View>
       } 
       
      </View>
    </ScrollView>
  )
}

export default Result

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor:'red',
    // marginTop: 15,
    padding: 10
  },
  recipeContainer: {
    width: '100%',
    gap: 15,
    marginTop: 10
  },
  recipeBox: {
    width: '100%',
    height: 440,
    borderRadius: 40,
    overflow: "hidden"
  },
  recipeDetail: {
    width: '100%',
    height: "100%",
    backgroundColor: "rgba(0,0,0,.35)",
    justifyContent: 'flex-end',
    padding: 20,
    alignItems: 'center'
  }
})