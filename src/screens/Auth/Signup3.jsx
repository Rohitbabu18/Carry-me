import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../util/Styles'
import Back from '../Componets/Back'
import { Spacer, horizScale } from '../../util/Layout'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { Colors } from '../../util/Colors'
import CustomImage from '../../util/Images'
import ImagePicker from 'react-native-image-crop-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Signup3 = ({ navigation }) => {
    const [name, setName] = useState('')
    const [userImage, setUserImage] = useState('')
    const ImgaePick = () => {
        ImagePicker?.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image?.path);
            setUserImage(image?.path)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.rowCenter}>

                <View style={styles.headerView}>
                    <Back navigation={navigation} />
                </View>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                    style={{ ...styles.unSelected, marginRight: horizScale(20) }}
                >
                    <Text style={styles.unSelectedText}>Next</Text>
                    <MaterialIcons size={20} color={Colors.mainColor} style={{ marginRight: horizScale(15) }} name="keyboard-arrow-right" />
                </Pressable>
            </View>
            <Spacer height={20} />
            <Text style={styles.TextH5}>Choose a Nickname</Text>
            <Spacer height={12} />
            <Text style={{ ...styles.normalText, marginHorizontal: horizScale(20) }}>Our Users will see you Nickname in there Notifications
            </Text>
            <Spacer height={20} />
            <View>
                <FloatingLabelInput
                    label={'Nick name'}
                    value={name}
                    onChangeText={value => setName(value)}
                    customLabelStyles={styles.floatinglabelstyle}
                    labelStyles={styles.labelstyle}
                    inputStyles={styles.floatinginputstyle}
                    containerStyles={{
                        ...styles.floatingcontainerstyle,
                        borderBottomColor: name !== '' ? Colors.mainColor : Colors.darkgrey,
                    }}
                />
            </View>
            <Spacer height={30} />
            <View style={styles.rowCenter}>
                <Text style={styles.headingText}>Profile Image</Text>
                <Pressable
                    onPress={() => {
                        ImgaePick()
                    }}
                    style={{ ...styles.selected, marginRight: horizScale(20) }}>
                    <Image source={CustomImage.user} style={{ ...styles.smallIcon, tintColor: Colors.white }} />
                    <Text style={styles.selectedText}>add</Text>
                </Pressable>
            </View>
            <Spacer height={30} />
            {userImage == '' ?
                <View style={stylesCustom.imageView} />
                : <Image source={{ uri: userImage }} style={stylesCustom.imageView} />}

        </SafeAreaView>
    )
}

export default Signup3

const stylesCustom = StyleSheet.create({
    imageView: {
        height: horizScale(420),
        width: horizScale(380),
        backgroundColor: Colors.grey,
        alignSelf: 'center'
    }
})