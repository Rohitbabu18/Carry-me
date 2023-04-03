import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from '../../util/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {Colors} from '../../util/Colors';
import CustomImage from '../../util/Images';
import {horizScale, Spacer} from '../../util/Layout';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [accepts, setAccepts] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[Colors.white, Colors.homeGradient]}
          style={styles.containerLinearGradient}>
          <Spacer height={30} />
          <Text style={styles.titleText}>Carry Me</Text>
          <Image source={CustomImage.logo} style={styles.logoImage} />

          <View>
            <Text style={styles.headingText}>Login to continue</Text>
          </View>
          <Spacer height={20} />
          <View>
            <FloatingLabelInput
              label={'Username'}
              value={username}
              onChangeText={value => setUsername(value)}
              customLabelStyles={styles.floatinglabelstyle}
              labelStyles={styles.labelstyle}
              inputStyles={styles.floatinginputstyle}
              containerStyles={{
                ...styles.floatingcontainerstyle,
                borderBottomColor:
                  username !== '' ? Colors.mainColor : Colors.darkgrey,
              }}
            />
          </View>
          <Spacer height={15} />
          <View>
            <FloatingLabelInput
              label={'Password'}
              isPassword
              togglePassword={show}
              value={password}
              onChangeText={value => setPassword(value)}
              customShowPasswordComponent={
                <Icon
                  size={20}
                  color={Colors.mainColor}
                  style={{marginRight: horizScale(15)}}
                  name="eye-with-line"
                />
              }
              customHidePasswordComponent={
                <Icon
                  size={20}
                  color={Colors.mainColor}
                  style={{marginRight: horizScale(15)}}
                  name="eye"
                />
              }
              customLabelStyles={styles.floatinglabelstyle}
              labelStyles={styles.labelstyle}
              inputStyles={styles.floatinginputstyle}
              containerStyles={{
                ...styles.floatingcontainerstyle,
                borderBottomColor:
                  password !== '' ? Colors.mainColor : Colors.darkgrey,
              }}
            />
          </View>

          <Spacer height={15} />
          <View
            style={{
              ...styles.rowCenterItem,
              justifyContent: 'flex-start',
              marginLeft: horizScale(20),
            }}>
            <Pressable
              onPress={() => {
                setAccepts(!accepts);
              }}>
              <Ionicons
                size={20}
                color={Colors.mainColor}
                style={{marginRight: horizScale(15)}}
                name={accepts ? 'ios-checkbox' : 'ios-square-outline'}
              />
            </Pressable>
            <Text style={styles.normalText}>I accept the </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('TermsAndCondition', {button: false});
              }}>
              <Text
                style={{...styles.forgetPassword, paddingLeft: horizScale(5)}}>
                Terms & Condition.
              </Text>
            </Pressable>
          </View>
          <Spacer height={25} />
          <Pressable
            onPress={() => {
              navigation.navigate('Forget');
            }}
            style={{alignSelf: 'flex-end'}}>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
          </Pressable>
          <Spacer height={50} />
          <Pressable
            onPress={() => {
              navigation.navigate('HomeStack');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
          <Spacer height={35} />
          <View style={styles.rowCenterItem}>
            <Text>Not a member</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('Language');
              }}>
              <Text
                style={{...styles.forgetPassword, paddingLeft: horizScale(5)}}>
                Register?
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
