import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Content,Button} from 'native-base';
import{connect} from 'react-redux'
import {set_data} from '../../store/action'
import {facebook_login,get_data} from '../../store/action'
import Form from '../screen/form'


function SignIn(props){

console.log("Home Props",props)
  return(
      <Container  style={styles.container}>
        {/* <Button onPress={()=>props.get_data()}>
          <Text>CLick me</Text>
        </Button> */}
        <ScrollView>
          {/* <Content> */}
            <Text style={{fontSize:40,textAlign:'center'}}>Register Yourself</Text>
          {/* </Content> */}
            <Image style={styles.img} source={require('../../Images/logo.png')}/>
              <Container style={{marginTop:20}}>
                  <Button onPress={()=>props.facebook_login()} style={{backgroundColor:'green'}} block success>
                    <Text>Login With FaceBook</Text>
                  </Button>
                <View>
                  <Image style={styles.img1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33lxKZGvgNDEEqsiLBxL6pkZBtr34oqaALg&usqp=CAU'}}/>
                </View>
                <View style={{flexDirection:'row',marginTop:50,backgroundColor:'blue',height:60,justifyContent:'space-evenly'}}>
                  <Button style={{backgroundColor:'blue',alignSelf:'center'}}>
                      <Image style={{width:30 , height:30,backgroundColor:'white'}} source={require('../../Images/homeicon.png')}/>
                  </Button>
                  <Button onPress={()=>props.navigation.navigate('About')} style={{backgroundColor:'blue',alignSelf:'center'}}>
                      <Image style={{width:30 , height:30}} source={require('../../Images/aboutus.png')}/>
                  </Button>
                  <Button onPress={()=>props.navigation.navigate('Contact')} style={{backgroundColor:'blue',alignSelf:'center'}}>
                      <Image style={{width:30 , height:30}} source={require('../../Images/contactus.png')}/>
                  </Button>
                </View>
          </Container>
          <Form/>
          </ScrollView>
      </Container>
    );
    }
  const styles=StyleSheet.create({
      container: {
        flex: 1,
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

  const mapDispatchToProps=(dispatch)=>({
      set_data:()=>dispatch(set_data()),
      facebook_login:()=>dispatch(facebook_login()),
      get_data:()=>dispatch(get_data())
  })


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
// export default connect () SignUp;
