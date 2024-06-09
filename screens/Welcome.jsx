import { View, Text, StyleSheet, Image, Animated, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'

import {COLORS , SIZES , FONTS} from "../constants";
import nft08 from "../assets/images/nft08.jpg"
import nft06 from "../assets/images/nft06.jpg"
import nft04 from "../assets/images/nft04.jpg"
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
  const navigation = useNavigation()
  const duration = 1000;
  const delay = duration + 300 ;
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(new Animated.ValueXY({x: 100, y : 100})).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;
  
  // got to home page from Get started button in Welcome page
  const pressHandler = () => {
    navigation.navigate("Home")
  }

  // Animations Handler 
  const AnimationImagesHandler = () =>{
    Animated.sequence([
      Animated.timing(fadeImagesAnimation , {
        toValue : 1 ,
        duration,
        useNativeDriver : true
      }),
      Animated.spring(moveImagesAnimation , {
        toValue : {x : 0 , y : 0},
        duration,
        useNativeDriver : true
      })
    ]).start();
  };
  const TextAnimationHandler = () =>{
      Animated.timing(fadeTextAnimation , {
        toValue : 1 ,
        duration,
        delay,
        useNativeDriver : true
      }).start();
  };
  const ButtonAnimationHandler = () =>{
    Animated.spring(moveButtonAnimation , {
      toValue : 0 ,
      friction : 4,
      delay,
      useNativeDriver : true
    }).start();
}

  useEffect(()=>{
    AnimationImagesHandler();
    TextAnimationHandler();
    ButtonAnimationHandler();
  }, [AnimationImagesHandler , TextAnimationHandler , ButtonAnimationHandler])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagesContainer}>
        <Animated.View 
        style={[styles.imageCard , {opacity : fadeImagesAnimation, transform : moveImagesAnimation.getTranslateTransform()}]}>
          <Image style={styles.image} source={nft06}/>
        </Animated.View>
        <Animated.View 
        style={[styles.imageCard , {top : SIZES.medium + 15 , opacity : fadeImagesAnimation, transform : moveImagesAnimation.getTranslateTransform()}]}>
          <Image style={styles.image} source={nft08}/>
        </Animated.View>
        <Animated.View 
        style={[styles.imageCard , {opacity : fadeImagesAnimation, transform : moveImagesAnimation.getTranslateTransform()}]}>
          <Image style={styles.image} source={nft04 }/>
        </Animated.View>
      </View>
      <Animated.View style={[styles.textContainer , {opacity : fadeTextAnimation}]}>
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>Explore the top collection of NFTs and buy and sell your NFTs as well</Text>
      </Animated.View>
      <Animated.View 
        style={[styles.buttonContainer , 
          {transform : [{translateY : moveButtonAnimation.interpolate({
            inputRange :[0 , 1],
            outputRange :[0 , 200]
      })}]}]}>
        <Button title="Get Started" pressHandler={pressHandler} 
        stylesButton={styles.button} stylesText={styles.textButton} />
      </Animated.View>
    </SafeAreaView>
  )
}
export default Welcome

const styles= StyleSheet.create({
  container : {
    paddingHorizontal : SIZES.small + 10 ,
    alignItems : "center",
    justifyContent : "center",
    flex : 1 ,
    backgroundColor : COLORS.bg,
  },
  imagesContainer : {
    top : -SIZES.medium,
    flexDirection : "row",
    gap : SIZES.small, 

  },
  imageCard : {
    borderRadius : SIZES.medium,
    padding : SIZES.small,
    backgroundColor : COLORS.cardBg
  },
  image :{
    width : 200,
    height : 200,
    borderRadius : SIZES.medium
  },
  textContainer:{
    margin : SIZES.small,
    padding : SIZES.small,
    marginVertical : SIZES.xLarge + 6
  },
  mainText :{
    fontFamily : FONTS.bold,
    fontSize : SIZES.xLarge + 5,
    textAlign : "center",
    color : COLORS.white 
  },
  subText :{
    fontFamily : FONTS.light,
    textAlign : "center",
    marginTop : SIZES.large,
    color : COLORS.gray
  },
  buttonContainer :{
    position : "absolute",
    bottom : SIZES.xLarge + 10,
    marginVertical : SIZES.xLarge,
  },
  button :{
    backgroundColor : COLORS.second ,
    padding : SIZES.small + 4,
    width : 240,
    alignItems : "center",
    borderRadius : SIZES.medium
  },
  textButton :{
    color : COLORS.white,
    fontFamily : FONTS.semiBold ,
    fontSize : SIZES.large,
  }
})