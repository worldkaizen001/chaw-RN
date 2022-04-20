import * as React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";


export default function CategoryItem(){

    return(
        <View style ={styles.container}>
                  
                   <Text>Burger</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 90,
        width: 60,
        backgroundColor: 'teal',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginHorizontal: 25,
        marginVertical: 10
    },
    itemText:{},
    bigImage:{
    
        width: 40,
         height: 40,
         justifyContent: "center"
       }
})