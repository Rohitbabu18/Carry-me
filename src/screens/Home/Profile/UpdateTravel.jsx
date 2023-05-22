import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  StatusBar,
} from 'react-native';
import CustomImage from '../../../util/Images';
import {Colors} from '../../../util/Colors';
import fontSize from '../../../util/Fonts';
import {Spacer, horizScale, vertScale} from '../../../util/Layout';
import styles from '../../../util/Styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const UpdateTravel = ({navigation}) => {
  const [legalName, setLegalName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nextKindName, setNextKindName] = useState('');
  const [nextKindNumber, setNextKindNumber] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.mainLight}}>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={'light-content'}
      />
      <View style={stylesCustom.notificationView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={CustomImage.back} style={stylesCustom.backBtn} />
          </Pressable>
          <Text style={stylesCustom.notificationText}>
            Update Travel Manifest
          </Text>
        </View>
      </View>
      <View>
        <FloatingLabelInput
          label={'Passenger Legal Name'}
          value={legalName}
          onChangeText={value => setLegalName(value)}
          customLabelStyles={styles.floatinglabelstyle}
          labelStyles={styles.labelstyle}
          inputStyles={styles.floatinginputstyle}
          containerStyles={{
            ...styles.floatingcontainerstyle,
            borderBottomColor:
              legalName !== '' ? Colors.mainColor : Colors.darkgrey,
          }}
        />
      </View>
      <View>
        <FloatingLabelInput
          label={'Passenger Phone Number'}
          value={phoneNumber}
          inputMode="numeric"
          onChangeText={value => setPhoneNumber(value)}
          customLabelStyles={styles.floatinglabelstyle}
          labelStyles={styles.labelstyle}
          inputStyles={styles.floatinginputstyle}
          containerStyles={{
            ...styles.floatingcontainerstyle,
            borderBottomColor:
              phoneNumber !== '' ? Colors.mainColor : Colors.darkgrey,
          }}
        />
      </View>
      <View>
        <FloatingLabelInput
          label={'Name of Next Kind'}
          value={nextKindName}
          onChangeText={value => setNextKindName(value)}
          customLabelStyles={styles.floatinglabelstyle}
          labelStyles={styles.labelstyle}
          inputStyles={styles.floatinginputstyle}
          containerStyles={{
            ...styles.floatingcontainerstyle,
            borderBottomColor:
              nextKindName !== '' ? Colors.mainColor : Colors.darkgrey,
          }}
        />
      </View>
      <View>
        <FloatingLabelInput
          label={'Mobile Number of Next Kind'}
          value={nextKindNumber}
          inputMode="numeric"
          onChangeText={value => setNextKindNumber(value)}
          customLabelStyles={styles.floatinglabelstyle}
          labelStyles={styles.labelstyle}
          inputStyles={styles.floatinginputstyle}
          containerStyles={{
            ...styles.floatingcontainerstyle,
            borderBottomColor:
              nextKindNumber !== '' ? Colors.mainColor : Colors.darkgrey,
          }}
        />
      </View>

      <Spacer height={20} />
      <Pressable
        onPress={() => {
          Alert.alert('SUCCESS', 'Data Updated Successfully');
        }}
        style={{
          ...stylesCustom.homeBtn,
          backgroundColor: Colors.mainColor,
          borderWidth: horizScale(2),
          borderColor: Colors.black,
          elevation: 10,
        }}>
        <Text style={stylesCustom.buttonText}>UPDATE DATA</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const stylesCustom = StyleSheet.create({
  homeBtn: {
    paddingVertical: vertScale(15),
    width: '45%',
    borderColor: Colors.mainColor,
    borderRadius: horizScale(40),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: fontSize.regular,
    fontWeight: '700',
  },
  homeBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  location: {
    fontSize: fontSize.regular,
    color: Colors.darkgrey,
    marginBottom: horizScale(10),
    marginLeft: horizScale(15),
  },
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
    justifyContent: 'space-between',
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
    height: horizScale(100),
    width: horizScale(100),
    borderRadius: horizScale(50),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: horizScale(8),
    color: Colors.black,
    marginLeft: horizScale(15),
  },
  bio: {
    fontSize: 18,
    marginBottom: horizScale(10),
    color: Colors.darkgrey,
    marginLeft: horizScale(15),
  },
  detailsContainer: {
    backgroundColor: Colors.mainColorDim,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: horizScale(15),
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.black,
  },
});

export default UpdateTravel;
