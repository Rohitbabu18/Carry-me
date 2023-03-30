import {
    StyleSheet, Text, View,
    SafeAreaView,
    Pressable
} from 'react-native'
import React, { useState } from 'react'
import styles from '../../util/Styles'
import Back from '../Componets/Back'
import { Spacer } from '../../util/Layout'
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../util/Colors'

const Forget = ({ navigation }) => {
    const [forgetOption, setForgetOption] = useState('1')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Back navigation={navigation} />
            </View>
            <Spacer height={8} />
            <Text style={styles.TextH5}>What did you forget?</Text>
            <Spacer height={20} />
            <View style={styles.rowSpaceEvenly}>
                <Pressable
                    style={forgetOption == 1 ? styles.selected : styles.unSelected}
                    onPress={() => {
                        setForgetOption('1')
                    }}>
                    {forgetOption == 1 ? <Feather size={20} color={Colors.white} name={"check-circle"} /> : null}
                    <Text style={forgetOption == 1 ? styles.selectedText : styles.unSelectedText}>Username</Text>
                </Pressable>
                <Pressable
                    style={forgetOption == 2 ? styles.selected : styles.unSelected}
                    onPress={() => {
                        setForgetOption('2')
                    }}>
                    {forgetOption == 2 ? <Feather size={20} color={Colors.white} name={"check-circle"} /> : null}
                    <Text style={forgetOption == 2 ? styles.selectedText : styles.unSelectedText}>Password</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Forget

const stylesCustom = StyleSheet.create({})