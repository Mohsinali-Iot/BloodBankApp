import React,{useState} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
// import auth from '@react-native-firebase/auth';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Container,Content,Button} from 'native-base';
import{connect} from 'react-redux'
// import {set_data} from '../../store/action'
import {facebook_login, set_data} from '../../store/action'

// import { LoginButton, AccessToken } from 'react-native-fbsdk';
// import { LoginManager } from "react-native-fbsdk";
// import { useState } from 'react';
function Home(props){
  console.log("props===>",props.set_data())
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const save_data=()=>{
      let user={
          email,
          password,
      }
      database().ref('/').child('users').push(user)
      setEmail('')
      setPassword('')
  }
  // const facebook_login= async()=>
  // {
  //   // Attempt login with permissions
  //   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
  //   if (result.isCancelled) {
  //     throw 'User cancelled the login process';
  //   }
  
  //   // Once signed in, get the users AccesToken
  //   const data = await AccessToken.getCurrentAccessToken();
  
  //   if (!data) {
  //     throw 'Something went wrong obtaining access token';
  //   }
  
  //   // Create a Firebase credential with the AccessToken
  //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(facebookCredential)
  //   .then((data)=>{
  //     console.log(data)
  //   })
  //   .catch((err)=>{
  //     console.log("Err===>",err)
  //   });
  // }
  return(
      <View>
        <Text>HomePage</Text>
        <Button onPress={()=>props.set_data()}>
          <Text>CLick me</Text>
        </Button>
      </View>
        // <Container  style={styles.container}>
        //   {/* <Header style={{backgroundColor:'red'}}> */}
        //     {/* <Left>
        //       <Button transparent>
        //         <Icon name='menu' />
        //       </Button>
        //     </Left> */}
        //     {/* <Body>
        //       <Title>Blood Donors</Title>
        //     </Body>
        //     <Right /> */}
        //   {/* </Header> */}
        //   <ScrollView style={styles.scrollView}>
        //     {/* <Container style={styles.img}> */}
        //     <Content>
        //       <Text style={{fontSize:40,textAlign:'center'}}>Register Yourself</Text>
        //     </Content>
        //       <Image style={styles.img} source={require('../../Images/logo.png')}/>
        //     {/* </Container> */}
        //     <Container style={{marginTop:20}}>
        //           {/* <Header /> */}
        //           {/* <Content> */}
        //             <Button onPress={()=>props.facebook_login()} style={{backgroundColor:'green'}} block success>
        //               <Text>Login With FaceBook</Text>
        //             </Button>
        //           {/* </Content> */}
        //           <View>
        //             <Image style={styles.img1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33lxKZGvgNDEEqsiLBxL6pkZBtr34oqaALg&usqp=CAU'}}/>
        //           </View>
        //           <View style={{flexDirection:'row',marginTop:20,backgroundColor:'blue',height:60,justifyContent:'space-evenly'}}>
        //             <Button style={{backgroundColor:'blue',alignSelf:'center'}}>
        //                 <Image style={{width:30 , height:30,backgroundColor:'white'}} source={require('../../Images/homeicon.png')}/>
        //             </Button>
        //             <Button onPress={()=>props.navigation.navigate('About')} style={{backgroundColor:'blue',alignSelf:'center'}}>
        //                 <Image style={{width:30 , height:30}} source={require('../../Images/aboutus.png')}/>
        //             </Button>
        //             <Button onPress={()=>props.navigation.navigate('Contact')} style={{backgroundColor:'blue',alignSelf:'center'}}>
        //                 <Image style={{width:30 , height:30}} source={require('../../Images/contactus.png')}/>
        //             </Button>
        //           </View>
        //           <View>
        //             <Button onPress={()=>props.set_data()}>
        //               <Text>Click Me</Text>
        //             </Button>
        //           </View>
        //     </Container>
        //   </ScrollView>
        // </Container>
      );
    }
  const styles=StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollView: {
        marginHorizontal: 20,
      },
      img:{
        width:350,
        resizeMode:'contain',
      },
      img1:{
        marginTop:40,
        width: 300,
        height: 100,
        resizeMode: 'cover',
        
        }
    });
const mapStateToProps=(state)=>{
    return state
  
  }

const mapDispatchToProps=dispatch=>({
    set_data:()=>dispatch(set_data()),
      // facebook_login:()=>dispatch(facebook_login())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home
