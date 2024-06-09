import { View, Text , StyleSheet, TouchableWithoutFeedback, Keyboard, SafeAreaView, FlatList} from 'react-native'
import React,{useState, useEffect, useRef} from 'react'
import {COLORS , SIZES , FONTS, DATA} from "../constants";
import NFTCard from "../components/NFTCard"
const Home = () => {
  const [nftsData , setNftsData] = useState(DATA)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex : 1}}>
        <FlatList 
          data={nftsData}
          renderItem={({item})=>
            <NFTCard NFTData={item}/>
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles= StyleSheet.create({
  container : {
    flex : 1 ,
    backgroundColor : COLORS.bg,
  },
  notFoundContainer : {
    alignItems : "center",
    justifyContent : "center",
    paddingVertical : SIZES.xLarge
  },
  notFoundText : {
    fontFamily : FONTS.bold,
    fontSize : SIZES.xLarge ,
    color : COLORS.white 
  },
  
})