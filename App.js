import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

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
    return (
        <View style={styles.container}>
            <StatusBar style='light' animated={true}/>
        <Text style={styles.text}>Hello, React Native!</Text>
        </View>
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
