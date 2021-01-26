import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Content,Button} from 'native-base';
import{connect} from 'react-redux'
import {set_data} from '../../store/action'
import {facebook_login,get_data} from '../../store/action'

// import Form from '../screen/form'


function SignIn(props){
  useEffect(() => {
    // console.log("Running")
    props.get_data()
  },[]);

console.log("Home Props Donors====>",props.donors)
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
              <View style={{marginTop:20}}>
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
                  <Button onPress={()=>{props.navigation.navigate('Form')}}>
                    <Text>Donate Your Blood</Text>
                  </Button>
                </View>
          </View>
          <View>
            <Text style={{fontSize:50,fontWeight:'bold',backgroundColor:'black',color:'white', textAlign:'center',marginTop:40,borderBottomWidth:3,borderTopWidth:3,borderColor:'red'}}>ALL Donors</Text>
          {
            
            // props.Donors.map((v,i) => <Text key={i}>{v.name}</Text>)}
            props.donors[0].map((v,i)=>{
              return(
                <View>
                  <View  style={{borderWidth:1,backgroundColor:'black',marginTop:20}}>
                      <Text style={{color:'red',textAlign:'right',fontWeight:'bold',fontSize:17}}>{"Blood-Group: " + v.BloodGroup}</Text>
                      <Text key={i} style={{color:'red',paddingBottom:5}}>{"Full-Name: " + v.First_name + " " + v.Last_name}</Text>
                      <Text style={{color:'red',paddingBottom:5}}>{"Email: " + v.Email}</Text>
                      <Text style={{color:'red',paddingBottom:5}}>{"Number: " + v.Numbers}</Text>
                      {/* <Text style={{color:'red',paddingBottom:5}}>{"Blood-Group: " + v.BloodGroup}</Text> */}
                  </View>
                </View>
              )
            })
          }
        </View>
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

  const mapStateToProps=(state)=>({
    donors:[state.Donors],
  
  })

  const mapDispatchToProps=(dispatch)=>({
      set_data:()=>dispatch(set_data()),
      facebook_login:()=>dispatch(facebook_login()),
      get_data:()=>dispatch(get_data())
  })


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
// export default connect () SignUp;
