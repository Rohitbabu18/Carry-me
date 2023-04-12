import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {horizScale} from '../../../util/Layout';
import {Colors} from '../../../util/Colors';
import fontSize from '../../../util/Fonts';
import CustomImage from '../../../util/Images';

const data = [
  {
    id: 1,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 6,2023',
  },
  {
    id: 2,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 5,2023',
  },
  {
    id: 3,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 4,2023',
  },
  {
    id: 4,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 6,2023',
  },
  {
    id: 5,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 5,2023',
  },
  {
    id: 6,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 4,2023',
  },
  {
    id: 7,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 6,2023',
  },
  {
    id: 8,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 5,2023',
  },
  {
    id: 9,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 4,2023',
  },
  {
    id: 10,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 6,2023',
  },
  {
    id: 11,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 5,2023',
  },
  {
    id: 12,
    name: 'lorem ipsume this is some random notification text that is visible to you',
    date: 'Apr 4,2023',
  },
];

const Notification = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.notRenderView}>
        <Text style={styles.notiText}>{item.name}</Text>
        <Text style={styles.notiDate}>{item.date}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.mainLight}}>
      <View style={styles.notificationView}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={CustomImage.back} style={styles.backBtn} />
        </Pressable>
        <Text style={styles.notificationText}>Notification</Text>
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
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
  notiText: {
    color: Colors.black,
    fontSize: fontSize.regular,
    fontWeight: '500',
  },
  notiDate: {
    color: Colors.grey,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },
  notRenderView: {
    backgroundColor: Colors.white,
    elevation: 7,
    margin: horizScale(7),
    paddingHorizontal: horizScale(10),
    paddingVertical: horizScale(7),
    borderRadius: horizScale(10),
  },
  notificationText: {
    color: Colors.white,
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
});
