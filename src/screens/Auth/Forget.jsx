import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../util/Styles';
import Back from '../Componets/Back';
import {horizScale, Spacer, vertScale} from '../../util/Layout';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../util/Colors';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {forgetOptionAction, usernameSentModalAction} from '../../redux/action';
const Forget = ({navigation, route}) => {
  const isPassword = route?.params?.ispassword;
  const dispatch = useDispatch();
  const forgetPasswordId = useSelector(
    state => state.userData.forgetPasswordId,
  );
  const forgetOption = useSelector(state => state.userData.forgetOption);
  const visible = useSelector(state => state.userData.usernameSentModal);

  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  useEffect(() => {
    if (isPassword) {
      navigation.navigate('VerifySecurityDate', {
        isUserScreen: false,
      });
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Back navigation={navigation} color={Colors.black} />
      </View>
      <Modal
        isVisible={visible}
        animationType="slide"
        onBackdropPress={() => dispatch(usernameSentModalAction(!visible))}
        onRequestClose={() => {
          dispatch(usernameSentModalAction(!visible));
        }}
        style={{margin: 0}}>
        <StatusBar backgroundColor="rgba(52, 52, 52, 0.8)" />
        <View style={styles.modalBox}>
          <View style={stylesCustom.Icon}>
            <MaterialCommunityIcons
              size={35}
              color={Colors.mainColor}
              style={{}}
              name="email-send"
            />
          </View>
          <Spacer height={10} />
          <Text
            style={{
              ...styles.headingText,
              textAlign: 'center',
              paddingLeft: horizScale(0),
            }}>
            Email Sent
          </Text>
          <View style={{alignItems: 'center', marginTop: vertScale(25)}}>
            <Text
              style={{color: Colors.black, width: '80%', textAlign: 'center'}}>
              An email has been sent to you with your username.
            </Text>
          </View>
          <Spacer height={25} />
          <Pressable
            style={styles.button}
            onPress={() => {
              dispatch(usernameSentModalAction(!visible));
              navigation.goBack();
            }}>
            <Text style={styles.buttonText}>Ok</Text>
          </Pressable>
          <Spacer height={40} />
        </View>
      </Modal>
      <View style={styles.headerView}>
        <Back navigation={navigation} />
      </View>
      <Spacer height={8} />
      <Text style={styles.TextH5}>What did you forget?</Text>
      <Spacer height={80} />
      <View style={{...styles.rowSpaceEvenly, justifyContent: 'space-evenly'}}>
        <Pressable
          style={forgetOption == 1 ? styles.selected : styles.unSelected}
          onPress={() => {
            dispatch(forgetOptionAction('1'));
          }}>
          {forgetOption == 1 ? (
            <Feather size={20} color={Colors.white} name={'check-circle'} />
          ) : null}
          <Text
            style={
              forgetOption == 1 ? styles.selectedText : styles.unSelectedText
            }>
            Username
          </Text>
        </Pressable>
        <Pressable
          style={
            forgetOption == 3 || forgetOption == 2
              ? styles.selected
              : styles.unSelected
          }
          onPress={() => {
            // setForgetOption('2')
            // navigation.navigate('VerifySecurityDate', {
            //   isUserScreen: false,
            // });
            dispatch(forgetOptionAction('3'));
          }}>
          {forgetOption == 3 || forgetOption == 2 ? (
            <Feather size={20} color={Colors.white} name={'check-circle'} />
          ) : null}
          <Text
            style={
              forgetOption == 3 || forgetOption == 2
                ? styles.selectedText
                : styles.unSelectedText
            }>
            Password
          </Text>
        </Pressable>
      </View>
      {forgetOption == 1 ? (
        <View>
          <Spacer height={50} />
          <Text style={styles.smallText}>
            Please enter your email address, We will sent your USERNAME on your
            email.
          </Text>
          <Spacer height={15} />
          <FloatingLabelInput
            label={'Email'}
            value={email}
            onChangeText={value => setEmail(value)}
            customLabelStyles={styles.floatinglabelstyle}
            labelStyles={styles.labelstyle}
            inputStyles={styles.floatinginputstyle}
            containerStyles={{
              ...styles.floatingcontainerstyle,
              borderBottomColor:
                email !== '' ? Colors.mainColor : Colors.darkgrey,
            }}
          />
          <Spacer height={90} />
          <Pressable
            onPress={() => {
              navigation.navigate('VerifySecurityDate', {
                isUserScreen: true,
              });
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      ) : forgetOption == 3 ? (
        <View>
          <Spacer height={50} />
          <Text style={styles.smallText}>Please enter your User Id</Text>
          <Spacer height={15} />
          <FloatingLabelInput
            label={'Enter User Id'}
            value={userId}
            onChangeText={value => setUserId(value)}
            customLabelStyles={styles.floatinglabelstyle}
            labelStyles={styles.labelstyle}
            inputStyles={styles.floatinginputstyle}
            containerStyles={{
              ...styles.floatingcontainerstyle,
              borderBottomColor:
                userId !== '' ? Colors.mainColor : Colors.darkgrey,
            }}
          />
          <Spacer height={90} />
          <Pressable
            onPress={() => {
              navigation.navigate('VerifySecurityDate', {
                isUserScreen: false,
              });
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Spacer height={90} />

          <FloatingLabelInput
            label={'New Password'}
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
          <Spacer height={20} />
          <FloatingLabelInput
            label={'Repeat Password'}
            isPassword
            togglePassword={show2}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
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
                confirmPassword !== '' ? Colors.mainColor : Colors.darkgrey,
            }}
          />
          <Spacer height={90} />
          <Pressable
            onPress={() => {
              alert('Coming Soon');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Forget;

const stylesCustom = StyleSheet.create({
  Icon: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: horizScale(-30),
    padding: horizScale(10),
    borderRadius: horizScale(40),
    borderBottomWidth: 1,
  },
});
