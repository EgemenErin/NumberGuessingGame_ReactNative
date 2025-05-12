import { View, Text, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

function GameScreen({userNumber}) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            {/* GUESS */}
            <View>
                <Text style={styles.text}>Higher or lower?</Text>
                {/* + - */}
            </View>
            <View>
                {/* Log Rounds */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#AB4459',
        textAlign: 'center',
    },
});

export default GameScreen;
