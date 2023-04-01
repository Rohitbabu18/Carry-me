import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../util/Styles'
import Back from '../Componets/Back'
import { Spacer, horizScale } from '../../util/Layout'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { Colors } from '../../util/Colors'
import Icon from 'react-native-vector-icons/Entypo';
const Signup1 = ({ navigation, route }) => {
    const { workmanId } = route?.params
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [inviteCode, setInviteCode] = useState('')
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerView}>
                <Back navigation={navigation} />
            </View>
            <ScrollView>
                <Spacer height={20} />
                <Text style={styles.TextH5}>We have created your</Text>
                <Text style={styles.TextH3}>Workman ID</Text>
                <Text style={styles.TextH5}> {workmanId}</Text>
                <Spacer height={20} />
                <Text style={{ ...styles.unSelectedText, textAlign: 'auto', paddingHorizontal: horizScale(20) }}>Make sure you note or Screenshot your ID{'\n'}
                    You need it to Login{'\n\n'}
                    Please Enter your Email where we can send you{'\n'}Your Workman ID.{'\n'}
                    In case you Forget it Set a Password for you Account
                </Text>
                <View>

                    <FloatingLabelInput
                        label={'Your Email'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: email !== '' ? Colors.mainColor : Colors.darkgrey,
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
                        customShowPasswordComponent={<Icon size={20} color={Colors.mainColor} style={{ marginRight: horizScale(15) }} name="eye-with-line" />}
                        customHidePasswordComponent={<Icon size={20} color={Colors.mainColor} style={{ marginRight: horizScale(15) }} name="eye" />}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: password !== '' ? Colors.mainColor : Colors.darkgrey,
                        }}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        label={'Repeat Password'}
                        isPassword
                        togglePassword={show}
                        value={confirmPassword}
                        onChangeText={value => setConfirmPassword(value)}
                        customShowPasswordComponent={<Icon size={20} color={Colors.mainColor} style={{ marginRight: horizScale(15) }} name="eye-with-line" />}
                        customHidePasswordComponent={<Icon size={20} color={Colors.mainColor} style={{ marginRight: horizScale(15) }} name="eye" />}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: confirmPassword !== '' ? Colors.mainColor : Colors.darkgrey,
                        }}
                    />
                </View>

                <View>

                    <FloatingLabelInput
                        label={'Invite Code for Bonus'}
                        value={inviteCode}
                        onChangeText={value => setInviteCode(value)}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: inviteCode !== '' ? Colors.mainColor : Colors.darkgrey,
                        }}
                    />
                </View>
                <Spacer height={50} />
                <Pressable
                    onPress={() => {
                        navigation.navigate('Signup2')
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup1

const stylesCustom = StyleSheet.create({})