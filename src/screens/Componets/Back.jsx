import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import CustomImage from '../../util/Images';
import {horizScale} from '../../util/Layout';
import {Colors} from '../../util/Colors';

const Back = props => {
  return (
    <Pressable
      style={styles.btnContainer}
      onPress={() => {
        props.navigation.goBack();
      }}>
      <Image source={CustomImage.back} style={styles.backBtnStyle} />
      <Text style={styles.backText}>Back</Text>
    </Pressable>
  );
};

export default Back;

const styles = StyleSheet.create({
  backText: {
    color: Colors.white,
    marginHorizontal: horizScale(5),
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnStyle: {
    height: horizScale(20),
    width: horizScale(20),
    resizeMode: 'cover',
    tintColor: Colors.white,
  },
});
