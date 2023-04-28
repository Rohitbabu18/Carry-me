import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from '../../util/Styles';
import Back from '../Componets/Back';
import {horizScale, Spacer} from '../../util/Layout';
import {Colors} from '../../util/Colors';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Entypo';

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Back navigation={navigation} color={Colors.black} />
      </View>
      <View style={styles.headerView}>
        <Back navigation={navigation} />
      </View>
      <Spacer height={8} />
      <View>
        <Spacer height={90} />
        <FloatingLabelInput
          label={'Old Password'}
          isPassword
          togglePassword={show}
          value={oldPassword}
          onChangeText={value => setOldPassword(value)}
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
          <Text style={styles.buttonText}>Change Password</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

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
