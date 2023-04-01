import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../util/Styles'
import Back from '../Componets/Back'
import { Spacer, horizScale } from '../../util/Layout'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { Colors } from '../../util/Colors'
import DatePicker from 'react-native-date-picker';
const Signup2 = ({ navigation }) => {
    const [reminder, setReminder] = useState('')
    const [date, setDate] = useState(new Date())

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerView}>
                <Back navigation={navigation} />
            </View>
            <ScrollView>
                <Spacer height={20} />
                <Text style={styles.TextH5}>Security Date</Text>
                <Spacer height={20} />
                <Text style={{ ...styles.unSelectedText, textAlign: 'auto', paddingHorizontal: horizScale(20) }}>{`Please Select a Date You can not forget.
Regardless if its your Birthday 
or of your family Member
Your Marriage or a Burial.

Write in the Reminder Field below what ever will remind you of what date you declared 

Make Sure You Can not Forget This Date!

If you do you might not regain access to your account
`}</Text>
                <View>

                    <FloatingLabelInput
                        label={'Your Reminder*'}
                        value={reminder}
                        onChangeText={value => setReminder(value)}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: reminder !== '' ? Colors.mainColor : Colors.darkgrey,
                        }}
                    />
                </View>
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


                <Spacer height={50} />
                <Pressable
                    onPress={() => {
                        navigation.navigate('Signup3')
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup2

const stylesCustom = StyleSheet.create({})