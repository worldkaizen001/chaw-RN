import * as React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";


export default function CategoryItem({name}){

    return(
        <View style ={styles.container}>
                  <View style = {styles.smallContainer}>
                  
                  <Image style={styles.image} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
                  </View>
                   <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height: 90,
        width: 60,
        backgroundColor: 'teal',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginHorizontal: 25,
        marginVertical: 10,
        
    },
    itemText:{},
    image:{
    
        width: 30,
         height: 30,
         justifyContent: "center",
         alignItems: "center"
       },
    bigImage:{
    
        width: 400,
         height: 400,
         justifyContent: "center"
       },
       smallContainer:{
           width:35,
           height:35,
           borderRadius:30,
           elevation:5,
           backgroundColor:'black'
       }
})