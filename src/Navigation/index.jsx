import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import TermsAndCondition from '../screens/Auth/TermsAndCondition';
import RiderList from '../screens/Home/OfferRide/Matches';
import Forget from '../screens/Auth/Forget';
import VerifySecurityDate from '../screens/Auth/VerifySecurityDate';
import Language from '../screens/Auth/Language';
import GenerateWorkmanId from '../screens/Auth/GenerateWorkmanId';
import Signup1 from '../screens/Auth/Signup1';
import Signup2 from '../screens/Auth/Signup2';
import Signup3 from '../screens/Auth/Signup3';
import RegisterRide from '../screens/Home/OfferRide/RegisterRide';
import RideOptions from '../screens/Home/OfferRide/RideOptions';
import Chatting from '../screens/Home/Chatting';
import ImagePick from '../screens/Home/OfferRide/ImagePick';
import MyTabs from './BottomTabBar';
import Profile from '../screens/Home/Profile';
import Notification from '../screens/Home/Notification';
import UpdateProfile from '../screens/Home/Profile/UpdateProfile';
import ChangePassword from '../screens/Auth/ChangePassword';
import Vehicals from '../screens/Home/Home/Vehicals';
import UpdateTravel from '../screens/Home/Profile/UpdateTravel';
import RatingScreen from '../screens/Home/Home/RatingScreen';

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
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="VerifySecurityDate" component={VerifySecurityDate} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyTabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="RiderList" component={RiderList} />
      <Stack.Screen name="RegisterRide" component={RegisterRide} />
      <Stack.Screen name="ImagePick" component={ImagePick} />
      <Stack.Screen name="RideOptions" component={RideOptions} />
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RatingScreen" component={RatingScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="UpdateTravel" component={UpdateTravel} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="VerifySecurityDate" component={VerifySecurityDate} />
      <Stack.Screen name="Signup2" component={Signup2} />
      <Stack.Screen name="Vehicals" component={Vehicals} />
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
