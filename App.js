import {ImageBackground, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  
  return (
      <LinearGradient colors={['#441752', "#F29F58"]} style={styles.container}>
        <ImageBackground
            source={require('./assets/images/background.jpg')}
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>
            {screen}
          </SafeAreaView>
          <Text style={styles.textStyle}>i love gambling</Text>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    textStyle: {
      fontSize: 40,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Papyrus",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: '50%',
        left: '17%'
    },
    backgroundImage: {
      opacity: 0.15,
    }
});
