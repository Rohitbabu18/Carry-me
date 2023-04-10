import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomImage from '../../util/Images';
import { horizScale } from '../../util/Layout';
import { Colors } from '../../util/Colors';
import fontSize from '../../util/Fonts';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Header = props => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.mainColor} barStyle={'light-content'} />
            <Pressable
                style={styles.profileView}
                onPress={() => {
                    props.navigation.navigate('Profile');
                }}>
                <Image source={CustomImage.profile} style={styles.backBtnStyle} />
            </Pressable>
            <Text style={styles.TextH3}>Carry Me</Text>
            <Pressable
                style={styles.notificationView}
                onPress={() => {
                    props.navigation.navigate('Notification');
                }}>
                <View style={styles.notificationView1}>

                    <Fontisto name={'bell'} size={20} color={Colors.white} />
                </View>
            </Pressable>
        </SafeAreaView>

    );
};

export default Header;

const styles = StyleSheet.create({
    TextH3: {
        color: Colors.white,
        textAlignVertical: 'center',
        paddingLeft: horizScale(20),
        fontSize: fontSize.h45,
        fontWeight: 'bold',
        flex: 0.7
    },

    profileView: {
        flex: 0.15
    },
    notificationView: {
        flex: 0.15,

    },
    notificationView1: {
        backgroundColor: Colors.darkgrey,
        height: horizScale(35),
        width: horizScale(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: horizScale(20)

    },
    backText: {
        color: Colors.grey,
        marginHorizontal: horizScale(5),
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.mainColor,
        height: horizScale(65),
        paddingHorizontal: horizScale(15)
    },
    backBtnStyle: {
        height: horizScale(38),
        width: horizScale(38),
        resizeMode: 'cover',
    },
});
