import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingScreen, HomeScreen } from '../screens';
import Page1Screen from '../screens/Pages/page1';
import Page2Screen from '../screens/Pages/page2';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Page1" component={Page1Screen} />
        <Stack.Screen options={{headerShown:false}} name="Page2" component={Page2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
