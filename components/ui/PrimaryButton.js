import { Pressable, View, Text, StyleSheet} from "react-native";
import * as Haptics from "expo-haptics";

function PrimaryButton({onPress, children}){
    function pressHandler(){
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
    }
    return(
        <Pressable
            onPress={pressHandler}          // use pressHandler here
            onPressIn={() => {
                // subtle selection tick on touch-down
                Haptics.selectionAsync();
            }}
            style={({ pressed }) => pressed && styles.buttonPressed}
        >
            <View style={styles.container}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AB4459",
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
    },
    buttonPressed: {
        opacity: 0.6,
        transform: [{ scale: 0.97 }],
    },
})