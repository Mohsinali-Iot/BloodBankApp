import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Image,ScrollView,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Form,Item,Input,Label,Picker} from 'native-base';
import{connect} from 'react-redux'
import {set_data} from '../../store/action'
import {facebook_login,get_data} from '../../store/action'


function Donorform(props){

// console.log("Home Props",props)
  return(
      <Container  style={styles.container}>
           <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
          </Form>
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

//   const mapStateToProps=(state)=>{
//       return state
  
//   }

//   const mapDispatchToProps=(dispatch)=>({
//       set_data:()=>dispatch(set_data()),
//       facebook_login:()=>dispatch(facebook_login()),
//       get_data:()=>dispatch(get_data())
//   })


export default connect(null,null)(Donorform);
// export default connect () SignUp;
