import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


export default function CategoryItem({title,index,active, handlePress}){

    return(

     <TouchableOpacity onPress={handlePress}>
         <View style ={[styles.container, index === 0 ? {marginLeft:25} : {marginLeft:22}, active ? {backgroundColor: "teal"}:{backgroundColor: "white"}]}>
                  <View style = {styles.smallContainer}>
                  
                  <Image style={[styles.image,]} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
                  </View>
                   <Text>{title}</Text>
        </View>
     </TouchableOpacity>

     
    )
}

const styles = StyleSheet.create({
    container:{
        
        
        height: 85,
        width: 60,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 15,
        marginVertical: 20,
        elevation:5,
        
        
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