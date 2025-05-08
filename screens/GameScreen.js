import { View, Text, StyleSheet} from "react-native";
import Title from "../components/title";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
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
    }
});

export default GameScreen;
