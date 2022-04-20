import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';

import { StyleSheet, Text, View, Button,Linking, SafeAreaView,} from 'react-native';

import tw from 'tailwind-react-native-classnames';
import Header from './src/components/header';
import SearchBar from './src/components/searchBar';
import AppBar from './src/components/appbar';



export default function App() {
  return (
    
    <View style = {styles.body}>
      <AppBar/>
      
   
      <Header />
      <SearchBar />
      
      <Button title='youtube chaneel' onPress={()=>{Linking.openURL('https://www.youtube.com/results?search_query=dotted+container+flutter')}}></Button>
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
    color: '#ffffff'
  }
});
