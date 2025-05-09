import {StyleSheet, TextInput, View, Alert} from "react-native"
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";
import Colors from "../util/colors";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("")
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Please enter a number", 'Number has to be a number between 1 and 99.',
                [{text: "Okay", style: "destructive", onPress: resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }
    return(
        <View style={styles.InputContainer}>
            <TextInput maxLength={2} style={styles.NumberInput} keyboardType={"number-pad"} value={enteredNumber} onChangeText={numberInputHandler}></TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    InputContainer: {
        backgroundColor: colors.secondary,
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    NumberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        color: colors.primary,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    }
});
