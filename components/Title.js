import { Text, StyleSheet } from "react-native";
import Colors from "../util/colors";    

function Title({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 12,
    }
});

export default Title;
