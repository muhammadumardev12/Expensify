import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from './RouteConst';
import { Dashboard, EditScreen, OnBoarding, SignUpScreen, SplashScreen } from './Imports';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const option_Screen = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NAVIGATION_ROUTES.SPLASHSCREEN} component={SplashScreen} options={option_Screen}/>
        <Stack.Screen name={NAVIGATION_ROUTES.ONBOARDING} component={OnBoarding} options={option_Screen}/>
        <Stack.Screen name={NAVIGATION_ROUTES.SIGNUP} component={SignUpScreen} options={option_Screen}/>
        <Stack.Screen name={NAVIGATION_ROUTES.DASHBOARD} component={Dashboard} options={option_Screen}/>
        <Stack.Screen name={NAVIGATION_ROUTES.EDITSCREEN} component={EditScreen} options={option_Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

