import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {COLORS , SIZES , FONTS} from "../constants";

const NFTInfo = ({comments , views, price, love}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{views}</Text>
        <Text>icon</Text>
      </View>
    </View>
  )
}

export default NFTInfo

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },
    wrapper : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : COLORS.second,
        width :90,
        borderRadius : SIZES.xLarge,
        paddingVertical : 3,
        gap : 4  
    },
    text :{
        fontFamily : FONTS.medium,
        fontSize : SIZES.medium,
        color : COLORS.white
    }
})