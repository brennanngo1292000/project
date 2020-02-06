import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import Login from './login';
import Register from './Register';
import VerifyPhone from './verifyPhone';
import EnterPassword from './EnterPassword';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="EnterPassword" component={EnterPassword} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
