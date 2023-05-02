import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import RideOptions from '../screens/Home/OfferRide/RideOptions';
import RiderList from '../screens/Home/OfferRide/Matches';
import RegisterRide from '../screens/Home/OfferRide/RegisterRide';
import MyOffer from '../screens/Home/OfferRide/MyOffer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../util/Colors';
import { View, Image } from 'react-native';
import CustomImage from '../util/Images';
import styles from '../util/Styles';
import { horizScale } from '../util/Layout';
import RequestRide from '../screens/Home/Request';
import AddRideTab from './AddRideTab';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.mainColor,
        tabBarInactiveBackgroundColor: Colors.mainColor,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          height: horizScale(65),
          backgroundColor: 'rgba(52,52,52,0.000001)',
          position: 'absolute',
          borderWidth: 0
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      sceneContainerStyle={{
        marginBottom: 5,
        backgroundColor: 'transparent',
        position: 'absolute'
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarItemStyle: { paddingBottom: horizScale(4) },
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={horizScale(25)}
                color={focused ? Colors.mainColor : Colors.grey}
                style={focused ? styles.tabbarIconActive : null}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Matches"
        component={RiderList}
        options={{
          title: 'Matches',
          tabBarItemStyle: {
            paddingBottom: horizScale(4),
            borderTopRightRadius: horizScale(30),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name={focused ? 'heart' : 'hearto'}
                size={horizScale(25)}
                color={focused ? Colors.mainColor : Colors.grey}
                style={focused ? styles.tabbarIconActive : null}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CreateOffer"
        component={AddRideTab}
        options={{
          title: '',
          tabBarItemStyle: {
            paddingBottom: horizScale(4),
            borderTopLeftRadius: horizScale(40),
            borderTopRightRadius: horizScale(40),
            marginTop: horizScale(-15),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={'ios-add-circle'}
                size={horizScale(60)}
                color={Colors.white}
                style={{
                  marginTop: horizScale(1),
                  marginLeft: horizScale(5),
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Requests"
        component={RequestRide}
        options={{
          title: 'Requests',
          tabBarItemStyle: {
            paddingBottom: horizScale(4),
            borderTopLeftRadius: horizScale(30),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused
                    ? {
                      borderRadius: horizScale(20),
                      backgroundColor: Colors.white,
                      padding: horizScale(4.4),
                    }
                    : null
                }>
                <Image
                  source={CustomImage.requestride}
                  style={{
                    height: horizScale(25),
                    width: horizScale(25),
                    tintColor: focused ? Colors.mainColor : Colors.grey,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyOffer"
        component={MyOffer}
        options={{
          title: 'My Offer',
          tabBarItemStyle: { paddingBottom: horizScale(4) },
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'shield-account' : 'shield-account-outline'}
                size={horizScale(25)}
                color={focused ? Colors.mainColor : Colors.grey}
                style={focused ? styles.tabbarIconActive : null}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
