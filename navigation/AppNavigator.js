import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import About from '../views/QuickTour/About';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../views/Register/Register';
import ForgetPassword from '../views/Login/ForgetPassword';
import EnterOTP from '../views/Login/EnterOTP';
import ResetPassword from '../views/Login/ResetPassword';

const Stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator style={{ backgroundColor: "white" }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={ForgetPassword} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};

export default Routing;









