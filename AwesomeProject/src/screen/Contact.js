import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

function Contact(){
    return(
      <View style={styles.views}>
        <Image style={styles.img} source={require('../../Images/logo.png')}/>
        <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:30}}>Cotact Details</Text>
        <Text style={styles.txt}>Address: 4th Street ABC Road Karachi</Text>
        <Text style={styles.txt}>Contact no: 0000-1234567</Text>
        <Text style={styles.txt}>Email:xyz@gmail.com</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  img:{
    width:300,
  },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    views:{
      marginTop:80,
      margin:20,
    },
    txt:{
      fontWeight:'bold',
      marginTop:20,
      fontSize:25,
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
  export default Contact;