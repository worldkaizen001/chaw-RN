

import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

const AppBar = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content style={styles.text} color='black' title="Chaw Hub"  />
      <Appbar.Action icon="magnify"  onPress={() => {
          
      }} />
  </Appbar.Header>
);

export default AppBar;



const styles = StyleSheet.create ({
   item: {
      backgroundColor : "white",
      elevation: 40,
      opacity: 10,
      shadowColor: "black",
        shadowOpacity: 0.2,
   },
   text:{
       fontSize:40
       
   }
})