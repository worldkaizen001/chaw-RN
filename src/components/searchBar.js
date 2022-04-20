import { View,Text,TextInput,StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function SearchBar (){
    return (
        <View style = {styles.container}>
            <FontAwesome name='search'size={18}color={'grey'}/>
            <TextInput style={styles.text} placeholder='restaurant,food'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        color: "white",
        marginHorizontal: 25,
        elevation: 3,
       marginTop: 30,
        shadowColor: "black",
        shadowOpacity: 0.3,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width:300
        
    },
    text:{
        fontSize: 15,
        marginLeft: 6,
        
    }
   

})
