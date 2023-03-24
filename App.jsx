import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main from './src/screens/Main';
import UserInfo from './src/screens/UserInfo';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Main'
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
