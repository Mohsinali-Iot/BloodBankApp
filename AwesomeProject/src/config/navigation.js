import React from 'react';
import Home from '../screen/Home'
import About from '../screen/About'
import Contact from '../screen/Contact'
import Form from '../screen/form'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} 
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}
/>
        <Stack.Screen name="About" component={About}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Contact" component={Contact}         
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
          },
        }}/>
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;