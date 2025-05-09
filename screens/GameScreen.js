import { View, Text, StyleSheet} from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../util/colors";


function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <PrimaryButton>Test Button</PrimaryButton>
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
        color: colors.primary,
        textAlign: 'center',
    }
});

export default GameScreen;
