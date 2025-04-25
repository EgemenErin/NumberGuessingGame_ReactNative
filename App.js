import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
      <LinearGradient colors={['#441752', "#F29F58"]} style={styles.container}>
          <ImageBackground
              source={require('./assets/images/background.jpg')}
              resizeMode="cover"
              style={styles.container}
              imageStyle={styles.backgroundImage}
          > <StartGameScreen></StartGameScreen>
          </ImageBackground>/
          <Text style={styles.textStyle}>{"i love gambling"}</Text>
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
