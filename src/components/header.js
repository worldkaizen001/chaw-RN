import {View,StyleSheet,Text,SafeAreaView} from "react-native"

export default function Header(){
    return(
        <View style ={styles.container}>
            <Text style={styles.largeText}>grab your</Text>
            <Text style = {styles.smallText}>delicacies</Text>
            <SafeAreaView/>
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
        marginTop: 27,
        backgroundColor: "white",
        marginHorizontal: 15,
        
    },

})