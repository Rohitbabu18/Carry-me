import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import TermsAndCondition from '../screens/Auth/TermsAndCondition';
import RiderList from '../screens/Home/RiderList';
import Forget from '../screens/Auth/Forget';
import VerifySecurityDate from '../screens/Auth/VerifySecurityDate';
import Language from '../screens/Auth/Language';
import GenerateWorkmanId from '../screens/Auth/GenerateWorkmanId';
import Signup1 from '../screens/Auth/Signup1';
import Signup2 from '../screens/Auth/Signup2';
import Signup3 from '../screens/Auth/Signup3';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="GenerateWorkmanId" component={GenerateWorkmanId} />
      <Stack.Screen name="Signup1" component={Signup1} />
      <Stack.Screen name="Signup2" component={Signup2} />
      <Stack.Screen name="Signup3" component={Signup3} />
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
