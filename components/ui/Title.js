import { Text, StyleSheet } from "react-native";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#AB4459',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#AB4459',
        padding: 12,
    }
});

export default Title;
