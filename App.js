import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';

import { StyleSheet, Text, View, Button,Linking, SafeAreaView,Image,FlatList} from 'react-native';

import tw from 'tailwind-react-native-classnames';
import Header from './src/components/header';
import SearchBar from './src/components/searchBar';
import AppBar from './src/components/appbar';
import CategoryItem from './src/components/categoryItem'



export default function App() {

  const commonCategories =[{
    name: "Burger"
  },
  {
    name: "Pizza"
  },
  {
    name: "Dessert"
  },
  {
    name: "Burger"
  },
  {
    name: "Burger"
  },
  {
    name: "Burger"
  }]
  return (
    
    <View style = {styles.body}>
      <AppBar/>
      <Header />
      <SearchBar />
      
      
      <FlatList 
      horizontal
      data={commonCategories}
      renderItem={({item})=>{
        return <CategoryItem title={item.name} />
      }}
      />



      <Image style={styles.image} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
       <Image style ={styles.bigImage} source={require("./src/assets/images/pizza.jpg")} />
      <Image style ={styles.bigImage} source={require("./src/assets/images/burger.jpg")} /> 
      <Button style={styles.button} borderRadius={50}color={'blue'} onPress={()=>{}} title='pro mood'/>

      
      
      {/* <Button title='youtube chaneel' onPress={()=>{Linking.openURL('https://www.youtube.com/results?search_query=dotted+container+flutter')}}></Button> */}
   <StatusBar />
   
   </View>
  );
}

// const styles = StyleSheet.Text({
//   Text:{
//     color: '#fff',
//     fontSize: 20,
    
//   }
// })

const styles = StyleSheet.create({
  item: {
    
    backgroundColor: 'white',
    
    
    
    
    
  },
  row: {
    
    backgroundColor: "white",
    marginTop: 20,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column"
    
  },
  text:{
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30,
    marginTop:40,
    marginHorizontal: 13,
    paddingBottom: 10,
    
    color: 'black'
  },
  texttwo:{
    marginHorizontal: 13,
    fontStyle: 'italic',
    fontSize: 25,
    
   
    color: 'black',
    fontWeight: 'bold'
  },
  button:{
    color: '#ffffff',
    height: 200
  },
  image:{
    
   width: 100,
    height: 100,
    justifyContent: "center"
  },
  bigImage:{
    
    width: 40,
     height: 40,
     justifyContent: "center"
   }
});

