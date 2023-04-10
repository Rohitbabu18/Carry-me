import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import RideOptions from '../screens/Home/OfferRide/RideOptions';
import RiderList from '../screens/Home/OfferRide/RiderList';
import RegisterRide from '../screens/Home/OfferRide/RegisterRide';
import MyOffer from '../screens/Home/OfferRide/MyOffer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../util/Colors';
import { View, Image } from 'react-native';
import CustomImage from '../util/Images';
import styles from '../util/Styles';
import { horizScale } from '../util/Layout';
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
                    height: horizScale(50)
                },
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => { return <Ionicons name={focused ? "home" : "home-outline"} size={horizScale(20)} color={focused ? Colors.mainColor : Colors.grey} style={focused ? styles.tabbarIconActive : null} /> }

                }} />
            {/* <Tab.Screen name="Requests" component={RideOptions}
                options={{
                    title: "Requests",
                    tabBarIcon: ({ focused }) => {
                        return <View
                            style={focused ? {
                                height: horizScale(30),
                                width: horizScale(30),
                                backgroundColor: Colors.white,
                                padding: horizScale(4.4),
                                borderRadius: horizScale(20),
                            } : null}
                        >
                            <Image source={CustomImage.request} style={{
                                height: horizScale(20),
                                width: horizScale(20),
                                resizeMode: 'contain',
                                tintColor: focused ? Colors.mainColor : Colors.grey,
                            }} />
                        </View>
                    }

                }} /> */}
            <Tab.Screen name="Matches" component={RiderList} options={{
                title: "Matches",
                tabBarIcon: ({ focused }) => { return <AntDesign name={focused ? "heart" : "hearto"} size={horizScale(20)} color={focused ? Colors.mainColor : Colors.grey} style={focused ? styles.tabbarIconActive : null} /> }

            }} />
            <Tab.Screen name="CreateOffer" component={RegisterRide} options={{
                title: "Create Offer",
                tabBarIcon: ({ focused }) => { return <Ionicons name={focused ? "ios-create" : "ios-create-outline"} size={horizScale(20)} color={focused ? Colors.mainColor : Colors.grey} style={focused ? styles.tabbarIconActive : null} /> }

            }} />
            <Tab.Screen name="MyOffer" component={MyOffer} options={{
                title: "My Offer",
                tabBarIcon: ({ focused }) => { return <MaterialCommunityIcons name={focused ? "shield-account" : "shield-account-outline"} size={horizScale(20)} color={focused ? Colors.mainColor : Colors.grey} style={focused ? styles.tabbarIconActive : null} /> }

            }} />
        </Tab.Navigator>
    );
} export default MyTabs
