import { View, Text, StyleSheet } from "react-native";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#AB4459',
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: '#AB4459',
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default NumberContainer;