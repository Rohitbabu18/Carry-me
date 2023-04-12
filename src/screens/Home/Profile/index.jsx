import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  StatusBar,
} from 'react-native';
import CustomImage from '../../../util/Images';
import {Colors} from '../../../util/Colors';
import fontSize from '../../../util/Fonts';
import {horizScale} from '../../../util/Layout';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.mainLight}}>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={'light-content'}
      />
      <View style={styles.notificationView}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={CustomImage.back} style={styles.backBtn} />
        </Pressable>
        <Text style={styles.notificationText}>Profile</Text>
      </View>
      <View style={styles.container}>
        <Image source={CustomImage.profile} style={styles.profileImage} />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>Software Developer</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>Age: 30</Text>
          <Text style={styles.detailItem}>Location: New York City</Text>
          <Text style={styles.detailItem}>Email: john.doe@example.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notificationText: {
    color: Colors.white,
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
  backBtn: {
    height: horizScale(20),
    width: horizScale(20),
    resizeMode: 'contain',
    tintColor: Colors.white,
    marginHorizontal: horizScale(10),
  },
  notificationView: {
    backgroundColor: Colors.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: horizScale(15),
    marginBottom: horizScale(5),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
  },
  bio: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    color: Colors.darkgrey,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.black,
  },
});

export default Profile;
