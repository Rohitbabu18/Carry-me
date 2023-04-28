import React, {useState} from 'react';
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
import {Spacer, horizScale, vertScale} from '../../../util/Layout';

import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import styles from '../../../util/Styles';
import LinearGradient from 'react-native-linear-gradient';
const Profile = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [date, setDate] = useState(new Date());
  const ImgaePick = () => {
    ImagePicker?.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSelectedImage(image?.path);
    });
  };

  const [popupUpdate, setpopupUpdate] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.mainLight}}>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={'light-content'}
      />
      <Modal
        isVisible={popupUpdate}
        animationType="slide"
        onBackdropPress={() => {
          setpopupUpdate(!popupUpdate);
        }}
        onRequestClose={() => {
          setpopupUpdate(!popupUpdate);
        }}
        style={{margin: 0}}>
        <StatusBar backgroundColor="rgba(52, 52, 52, 0.8)" />
        <View style={styles.modalBox1}>
          <LinearGradient
            colors={[Colors.white, Colors.homeGradient]}
            style={styles.containerLinearGradientModal}>
            <Spacer height={10} />
            <View style={styles.rowCenter}>
              <View>
                <Text style={styles.headingText}>For VIP Account</Text>
                <Text style={styles.TextH3}>Please Subscribe</Text>
              </View>
              <Pressable
                onPress={() => {
                  setpopupUpdate(!popupUpdate);
                }}>
                <AntDesign
                  name={'closecircle'}
                  size={40}
                  color={Colors.mainColor}
                  style={{margin: horizScale(20)}}
                />
              </Pressable>
            </View>
            <Spacer height={15} />
            <Image
              source={CustomImage.vip}
              style={{...styles.logoImage, height: horizScale(130)}}
            />
            <Text style={{...styles.homeHeading, textAlign: 'center'}}>
              VIP Account
            </Text>
            <Spacer height={15} />
            <View>
              <Text style={{...styles.homeDec, fontSize: fontSize.regular}}>
                Your VIP plan just starts from 7000 $ for one month. VIP
                Subscription Ending :
                <Text style={{color: Colors.red, fontWeight: '700'}}>
                  2023.12.12
                </Text>
              </Text>
              <Spacer height={20} />
            </View>
            <Spacer height={40} />
            <View style={styles.homeBtnView}>
              <Pressable
                onPress={() => {
                  alert('Coming Soon');
                }}
                style={{
                  ...styles.homeBtn,
                  backgroundColor: Colors.mainColor,
                  borderWidth: horizScale(2),
                  borderColor: Colors.mainColor,
                }}>
                <Text style={styles.buttonText}>SUBSCRIBE</Text>
              </Pressable>
            </View>
            <Spacer height={20} />
          </LinearGradient>
        </View>
      </Modal>
      <View style={stylesCustom.notificationView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={CustomImage.back} style={stylesCustom.backBtn} />
          </Pressable>
          <Text style={stylesCustom.notificationText}>Profile</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={stylesCustom.notificationText}>Logout</Text>
          <Pressable
            onPress={() => {
              navigation.replace('AuthStack');
            }}>
            <AntDesign
              name={'logout'}
              size={25}
              color={Colors.white}
              style={{marginHorizontal: horizScale(20)}}
            />
          </Pressable>
        </View>
      </View>
      <Spacer height={30} />
      <Image
        source={
          selectedImage?.length > 0 ? {uri: selectedImage} : CustomImage.profile
        }
        style={stylesCustom.profileImage}
      />
      {/* <Pressable
        style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}
        onPress={() => {
          ImgaePick();
        }}>
        <View
          style={{
            position: 'absolute',
            padding: 7,
            borderRadius: 20,
            right: horizScale(150),
            bottom: 0,
            backgroundColor: Colors.mainColor,
          }}>
          <Image
            source={CustomImage.camera}
            style={{
              height: horizScale(20),
              width: horizScale(20),
              tintColor: 'white',
            }}
          />
        </View>
      </Pressable> */}
      <Spacer height={15} />
      <View
        style={{
          ...stylesCustom.detailsContainer,
          backgroundColor: Colors.homeGradient,
        }}>
        <Text style={{...stylesCustom.username, color: Colors.black}}>
          John Doe
        </Text>

        <Text
          style={{...stylesCustom.bio, color: Colors.black, fontWeight: '700'}}>
          John.roader525@gmail.com
        </Text>
        <Text style={stylesCustom.bio}>
          WM ID :{' '}
          <Text style={{color: Colors.black, fontWeight: '700'}}>
            A572C86BEAC864BD543
          </Text>
        </Text>
        <Text style={stylesCustom.location}>
          Location :{' '}
          <Text style={{color: Colors.black, fontWeight: '700'}}>
            Lagos Ikorodu
          </Text>
        </Text>
      </View>
      <Spacer height={15} />
      <View style={stylesCustom.detailsContainer}>
        <Text style={stylesCustom.location}>
          Registered Since :{' '}
          <Text style={{color: Colors.mainColor, fontWeight: '700'}}>
            02.2022
          </Text>
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={stylesCustom.location}>Sec Date:</Text>
          <Text
            style={{
              ...stylesCustom.bio,
              color: Colors.mainColor,
              fontWeight: '700',
            }}>
            10-12-2000
          </Text>
        </View>
        <Text style={stylesCustom.location}>
          Hint :{' '}
          <Text style={{color: Colors.mainColor, fontWeight: '700'}}>
            Baby Billy
          </Text>
        </Text>
        <Text style={{...stylesCustom.location, marginBottom: horizScale(0)}}>
          Usertype :{' '}
          <Text style={{color: Colors.mainColor, fontWeight: '700'}}>Free</Text>
        </Text>
        <Pressable
          onPress={() => {
            setpopupUpdate(!popupUpdate);
          }}
          style={{
            position: 'absolute',
            bottom: 15,
            right: 15,
            borderWidth: 1,
            borderRadius: horizScale(25),
            paddingHorizontal: horizScale(15),
            paddingVertical: horizScale(5),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.mainColor,
              fontWeight: '700',
              fontSize: fontSize.regular,
            }}>
            UPGRADE PLAN
          </Text>
        </Pressable>
      </View>
      <Spacer height={30} />
      <View style={stylesCustom.homeBtnView}>
        <Pressable
          onPress={() => {
            navigation.navigate('Forget', {
              ispassword: true,
            });
          }}
          style={{
            ...stylesCustom.homeBtn,
            borderWidth: horizScale(2),
            borderColor: Colors.black,
          }}>
          <Text style={{...stylesCustom.buttonText, color: Colors.mainColor}}>
            I Forgot
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('UpdateProfile');
          }}
          style={{
            ...stylesCustom.homeBtn,
            backgroundColor: Colors.mainColor,
            borderWidth: horizScale(2),
            borderColor: Colors.mainColor,
          }}>
          <Text style={stylesCustom.buttonText}>Update Profile</Text>
        </Pressable>
      </View>
      <Spacer height={30} />
      <View style={stylesCustom.homeBtnView}>
        <Pressable
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
          style={{
            ...stylesCustom.homeBtn,
            backgroundColor: Colors.mainColor,
            borderWidth: horizScale(2),
            borderColor: Colors.mainColor,
          }}>
          <Text style={stylesCustom.buttonText}>Change Password</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            alert('Coming Soon');
          }}
          style={{
            ...stylesCustom.homeBtn,
            backgroundColor: Colors.red,
            borderWidth: horizScale(2),
            borderColor: Colors.yellow,
          }}>
          <Text style={stylesCustom.buttonText}>DELETE ACCOUNT</Text>
        </Pressable>
      </View>
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    marginHorizontal: horizScale(15),
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.black,
  },
});

export default Profile;
