import {View,StyleSheet,Text} from "react-native"

export default function Header(){
    return(
        <View style ={styles.container}>
            <Text style={styles.largeText}>grab your</Text>
            <Text style = {styles.smallText}>delicacies</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    largeText: {
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "bold",
        color: "black"
    },
    smallText: {
        fontSize: 23,
        fontStyle: "normal",
        fontWeight: "600",
        color: "black"
    },

    container: {
        backgroundColor: "white",
        marginHorizontal: 15,
        
    },

})