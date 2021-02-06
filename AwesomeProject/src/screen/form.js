import React,{useState} from 'react';
import {StyleSheet,Text} from 'react-native';
import database from '@react-native-firebase/database';
import { Container,Form,Item,Input,Button} from 'native-base';


function Donorform(){
  const [mydata,set_mydata]=useState({
    First_name:'',
    Last_name:'',
    Email:'',
    Numbers:'',
    BloodGroup:''
  })
  const handle_click=()=>{
        var key=database().ref('images/').push().key
        database().ref('/').child('donors/' + key).set(mydata).then(()=>{
        })
        set_mydata({
          First_name:'',
          Last_name:'',
          Email:'',
          Numbers:'',
          BloodGroup:''
        })
        alert("Submitted successfully")
  }
  return(


      <Container  style={styles.container}>
        <Text style={{fontSize:30,textAlign:'center'}}>Donate Your Blood</Text>
           <Form style={{borderColor:'black',borderRadius:1,borderWidth:1,marginTop:30,paddingTop:20,paddingBottom:20}}>
           <Item>
              <Input placeholder="FirstName"   value={mydata.First_name} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,First_name:e
    }))} />
            </Item>
            <Item last>
              <Input placeholder="LastName" value={mydata.Last_name} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Last_name:e
    }))} />
            </Item>
            <Item >
              <Input placeholder="Email" value={mydata.Email} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Email:e
    }))}/>
            </Item>
            <Item >
              <Input placeholder="Number" value={mydata.Numbers} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,Numbers:e
    }))} />
            </Item>
            <Item >
              <Input placeholder="Blood Group" value={mydata.BloodGroup} onChangeText={(e)=>set_mydata((prevState) => ({
             ...prevState,BloodGroup:e
    }))} />
            </Item>
            
            <Button onPress={()=>handle_click()} full danger style={{marginTop:20}}>
            <Text>Submit</Text>
          </Button>
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

export default Donorform;
