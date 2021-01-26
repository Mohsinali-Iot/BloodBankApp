import React from 'react';
import SignIn from '../screen/SignIn'
import Home from '../screen/Home'
import About from '../screen/About'
import Contact from '../screen/Contact'
import Form from '../screen/form'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// function AppNavigation() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={SignIn} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Form" component={Form} />
        {/* <Stack.Screen name="Choose Photo From Gallery" component={ImagePicker} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;