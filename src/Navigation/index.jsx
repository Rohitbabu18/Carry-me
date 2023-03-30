import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import TermsAndCondition from '../screens/Auth/TermsAndCondition';
import RiderList from '../screens/Home/RiderList';
import Forget from '../screens/Auth/Forget';
import VerifySecurityDate from '../screens/Auth/VerifySecurityDate';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="VerifySecurityDate" component={VerifySecurityDate} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="RiderList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RiderList" component={RiderList} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
