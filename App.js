import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button,Linking, SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default function App() {
  return (
    <View style = {styles.body}>
      <Text style = {styles.text}> EverGreen Meals</Text>
      <Text style = {styles.texttwo}> Eat Well</Text>
      <View>
        
      </View>
      <View style={styles.row}>
        <Text> Today </Text>
      <Text> good day</Text>
      </View>
      <Text style = {styles.texttwo}> Pro Mode</Text>
      <Button title='Try' onPress={()=>{}}></Button>
      <Button title='youtube chaneel' onPress={()=>{Linking.openURL('https://www.youtube.com/results?search_query=dotted+container+flutter')}}></Button>
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
  body: {
    
    backgroundColor: 'white',
    alignItems: 'flex-start',
    
    flex: 1,
    
    
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
