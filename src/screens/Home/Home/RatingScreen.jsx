import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../util/Colors';
import CustomImage from '../../../util/Images';
import {horizScale} from '../../../util/Layout';
import fontSize from '../../../util/Fonts';
import {Rating} from 'react-native-ratings';

const RatingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.mainColor}
      />
      <View style={styles.headerView}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={CustomImage.back} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.headerText}>Rating</Text>
      </View>
      <View style={styles.mainView}>
        <View style={styles.imgView}>
          <Image source={CustomImage.chaticon} style={styles.userImg} />
        </View>
        <Text style={styles.userName}>Peter Bembe</Text>
        <View style={styles.ratingView}>
          <Rating
            showRating
            onFinishRating={this.ratingCompleted}
            style={styles.ratingStyle}
            fractions={true}
            imageSize={45}
            ratingTextColor={Colors.mainColor}
          />
        </View>
        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.8}
          onPress={() => {
            alert('Coming Soon');
          }}>
          <Text style={styles.submitBtnText}>Submit Rating</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  ratingView: {
    marginVertical: horizScale(10),
  },
  ratingStyle: {
    paddingVertical: horizScale(10),
    backgroundColor: Colors.white,
  },
  submitBtnText: {
    color: Colors.white,
    fontSize: fontSize.input,
    textAlign: 'center',
    fontWeight: '600',
  },
  submitBtn: {
    backgroundColor: Colors.mainColor,
    marginHorizontal: horizScale(20),
    paddingVertical: horizScale(15),
    borderRadius: horizScale(15),
    marginTop: horizScale(20),
  },
  userName: {
    color: Colors.black,
    fontSize: fontSize.h3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userImg: {
    height: horizScale(350),
    width: horizScale(350),
    resizeMode: 'contain',
  },
  imgView: {
    alignItems: 'center',
    marginVertical: horizScale(20),
  },
  mainView: {},
  headerText: {
    color: Colors.white,
    fontSize: fontSize.input,
    fontWeight: 'bold',
    marginHorizontal: horizScale(10),
  },
  backIcon: {
    height: horizScale(20),
    width: horizScale(20),
    tintColor: Colors.white,
  },
  headerView: {
    backgroundColor: Colors.mainColor,
    paddingHorizontal: horizScale(10),
    paddingVertical: horizScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  safeView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
