import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./screens/Welcome"
import Home from "./screens/Home"
import NFTDetails from "./screens/NFTDetails"
const App = () => {
    const [fontLoaded] = useFonts(
        {
            InterBold : require("./assets/fonts/Inter-Bold.ttf"),
            InterLight : require("./assets/fonts/Inter-Light.ttf"),
            InterMedium : require("./assets/fonts/Inter-Medium.ttf"),
            InterRegular : require("./assets/fonts/Inter-Regular.ttf"),
            InterSemiBold : require("./assets/fonts/Inter-SemiBold.ttf"),
        }
    )
    if(!fontLoaded) return null ;
    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar style='light' animated={true}/>
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Welcome' screenOptions={{
                headerShown : false,
              }}>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="NFT-details" component={NFTDetails}/>
              </Stack.Navigator>
            </NavigationContainer>
        
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
