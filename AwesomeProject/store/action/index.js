import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
const set_data=()=>{
  return(dispatch)=>{

  console.log('SetData running')
      dispatch({
          type:"SETDATA"
      })
  }
}
const facebook_login=()=>
{
  return async()=>
  {
      
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await  AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential)
  .then((data)=>{
    console.log(data.additionalUserInfo.profile.email)
    console.log(data.user.displayName)
    console.log(data.user.uid)
    console.log(data.user.photoURL)
    
    
    
    let create_user={
      name:data.user.displayName,
      email:data.additionalUserInfo.profile.email,
      profile:data.user.photoURL,
      uid:data.user.uid,
    }
    database().ref('/').child('users/' + data.user.uid).set(create_user)
    .then(()=>{
        alert("Successful Login")
        database().ref('/').child("data").push({name:'Kalim'}) 
        // dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    })
    })
  .catch((err)=>{
    console.log("Err===>",err)
  });
  }
}

const get_data=()=>{
      

      return(dispatch)=>{
        database().ref('/').child('donors').on("child_added", snapshot => {
        // console.log('User data: ', snapshot.val());
        dispatch({
          type:"Donors",
          payload:snapshot.val()
        })
        })
      }   
}
    
export {
    facebook_login,
    set_data,
    // gotoform,
    // gotologin,
    get_data,
}

