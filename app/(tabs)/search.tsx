import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/components/button/BackButton'
import Result from '@/components/search/Result';
import Suggest from '@/components/search/Suggest';

const Search = () => {

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <View style={style.container} >
      <View style={style.header} >
        <BackButton />
        <Text style={{ position: 'absolute', left: '50%', fontSize: 18, fontWeight: 600, transform: 'translate(-50%,0)' }} >Search Recipe</Text>
      </View>
      <TextInput
      onChangeText={(text)=>setInputValue(text)}
      value={inputValue}
       placeholder='Search Any Recipe...' 
       style={style.textInput} />
       {
        inputValue.length > 0 ?
        <Result inputValue={inputValue}/>
        : <Suggest setInputValue={setInputValue}/>
       }
    </View>
  )
}

export default Search

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems:'center'
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  textInput: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 15,
    width: '95%',
    fontWeight: 600,
    paddingHorizontal: 15,
    marginTop:20
},
})