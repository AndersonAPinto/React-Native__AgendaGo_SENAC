import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageLogin from './src/pages/PageLogin';
import PageStart from './src/pages/PageStart';
import ResetPassword from './src/pages/ResetPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="PageLogin" component={PageLogin} />
        <Stack.Screen name="PageStart" component={PageStart} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
