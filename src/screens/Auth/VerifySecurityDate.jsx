import {
    StyleSheet, Text, View,
    SafeAreaView,
    Pressable,
    TextInput,
    ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../util/Styles'
import Back from '../Componets/Back'
import { horizScale, Spacer } from '../../util/Layout'
import { Colors } from '../../util/Colors'
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fontSize from '../../util/Fonts'
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux'
import { forgetOptionAction, userIdForgetPassword, usernameSentModalAction } from '../../redux/action'
import { ToastMessage } from '../../util/ToastMessage'
const VerifySecurityDate = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const { isUserScreen } = route.params;
    const [date, setDate] = useState(new Date())
    const [visible, setVisible] = useState(false)
    const [catchaCode, setCatchaCode] = useState('876532')
    const [userCode, setUserCode] = useState('')
    function randomIntFromInterval(min, max) {
        bounceTockenn = Math.floor(Math.random() * (max - min + 1) + min)
        setCatchaCode(bounceTockenn)
    }
    useEffect(() => {
        randomIntFromInterval(100000, 999999)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Back navigation={navigation} color={Colors.black} />
            </View>
            <ScrollView>
                <Spacer height={8} />
                <Text style={styles.TextH5}>Please Verify Yourself with{'\n'}<Text style={{ fontSize: fontSize.h4, fontWeight: 'bold' }}>Security Date</Text></Text>


                <View>
                    <Spacer height={35} />
                    <Text style={styles.smallText}>Your Reminder is -</Text>
                    <Spacer height={10} />
                    <Text style={styles.headingText}>My Sister's birth.</Text>
                    <Spacer height={15} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        {/* <Text style={styles.TextMedium}>Choose Date</Text> */}
                        <DatePicker
                            mode="date"
                            date={date}
                            onConfirm={date => {
                                setDate(date);
                            }}
                        />
                    </View>

                    <Spacer height={20} />

                    <Text style={styles.headingText}>Captcha</Text>
                    <Spacer height={20} />
                    <View style={stylesCustom.captchaContainer}>
                        <View style={styles.rowSpaceEvenly}>
                            <Text style={styles.headingText}>{catchaCode}</Text>
                            <Pressable
                                onPress={() => {
                                    randomIntFromInterval(100000, 999999)
                                }}
                            >
                                <Ionicons size={35} color={Colors.mainColor} name="ios-reload-circle" />
                            </Pressable>
                        </View>
                        <View style={styles.rowSpaceEvenly}>
                            <TextInput
                                value={userCode}
                                onChangeText={(value) => {
                                    setUserCode(value)
                                }}
                                style={stylesCustom.inputCaptch}
                            />
                            {userCode == catchaCode ?
                                <Octicons size={20} color={Colors.mainColor} name="verified" />
                                : null}

                        </View>
                    </View>
                </View>
                <Spacer height={20} />
                <Pressable
                    onPress={() => {
                        if (userCode == catchaCode) {
                            if (isUserScreen) {
                                dispatch(usernameSentModalAction(true))
                            } else {
                                dispatch(userIdForgetPassword('10'))
                                dispatch(forgetOptionAction('2'))
                            }
                            navigation.goBack()
                        } else {
                            ToastMessage('Invalid Captcha')
                        }
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Get ID</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}

export default VerifySecurityDate

const stylesCustom = StyleSheet.create({
    inputCaptch: {
        backgroundColor: Colors.white,
        width: horizScale(200),
        borderRadius: horizScale(5),
        borderWidth: horizScale(0.8),
        borderColor: Colors.mainColor,
        color: Colors.mainColor,
        textAlign: 'center',
        letterSpacing: horizScale(5)
    },
    captchaContainer: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.mainColorDim,
        padding: horizScale(10),
        borderRadius: horizScale(10),
        borderWidth: 1,
        width: '90%',
        height: horizScale(200)
    }
})