import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from '../../../util/Styles';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../util/Colors';
import CustomImage from '../../../util/Images';
import { horizScale, Spacer } from '../../../util/Layout';

const RideOptions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[Colors.white, Colors.homeGradient]}
          style={styles.containerLinearGradient}>
          <Spacer height={30} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* <Image source={CustomImage.home} style={styles.homeIcon} /> */}
            <Text style={styles.homeAppName}>Carry Me Request's</Text>
          </View>
          <Spacer height={20} />
          <Image source={CustomImage.logo} style={styles.logoImage} />
          <Spacer height={30} />
          <View>
            <Text style={styles.homeHeading}>Hi Someone,</Text>
            <Spacer height={30} />
            <Text style={styles.homeDec}>
              Let us know if you Need someone to carry you destination? or Do
              you have a ride and want to offer it to anyone that Needs?
            </Text>
            <Spacer height={30} />
            <Text style={styles.chooseText}>Choose one ...</Text>
          </View>
          <Spacer height={80} />
          <View style={styles.homeBtnView}>
            <Pressable
              onPress={() => {
                navigation.navigate('RiderList');
              }}
              style={{
                ...styles.homeBtn,
                borderWidth: horizScale(2),
                borderColor: Colors.black,
              }}>
              <Text style={{ ...styles.buttonText, color: Colors.mainColor }}>
                Need
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('RegisterRide');
              }}
              style={{
                ...styles.homeBtn,
                backgroundColor: Colors.mainColor,
                borderWidth: horizScale(2),
                borderColor: Colors.mainColor,
              }}>
              <Text style={styles.buttonText}>Offer</Text>
            </Pressable>
          </View>
          <Spacer height={35} />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideOptions;
