import React from 'react'
import {
    Text, View,
    Pressable,
    Image, Linking
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../util/Colors'
import CustomImage from '../util/Images'
import { horizScale } from '../util/Layout'
import styles from '../util/Styles'
const UserInfo = ({ navigation, route }) => {
    const { data } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.goBack()
                }}
                style={styles.backView} >
                <Image source={CustomImage.back} style={styles.smallIcon} />
                <Text style={styles.backText}>Back</Text>
            </Pressable>
            <View style={styles.infoView}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.username}>{data.username}</Text>
                <Text style={styles.email}>{data.email}</Text>
                <View style={styles.rowCenter}>
                    <Text>{data.phone}</Text>
                    <Pressable
                        onPress={() => {
                            Linking.openURL(`tel:${data.phone}`)
                        }} >
                        <Image source={CustomImage.call} style={{ ...styles.smallIcon, tintColor: Colors.white }} />
                    </Pressable>
                </View>
            </View>

            <View style={[styles.rowCenter, styles.addressHeading]}>
                <Text style={styles.email}>Address</Text>
                <Pressable
                    onPress={() => {
                        var latitude = data?.address?.geo?.lat
                        var longitude = data?.address?.geo?.lng
                        Linking.openURL(`geo://?q=${latitude},${longitude}`);
                    }}
                >
                    <Image source={CustomImage.location} style={{ ...styles.smallIcon, tintColor: Colors.white }} />
                </Pressable>
            </View>
            <Text style={{ ...styles.testUnderline, marginTop: horizScale(20) }}>{data?.address?.suite}</Text>
            <Text style={styles.testUnderline}>{data?.address?.street}</Text>
            <Text style={styles.testUnderline}>{data?.address?.city}</Text>
            <Text style={styles.testUnderline}>{data?.address?.zipcode}</Text>
            <View style={[styles.rowCenter, styles.addressHeading, { marginVertical: horizScale(10) }]}>
                <Text style={styles.email}>Website</Text>
                <Text style={styles.name}>{data.website}</Text>
            </View>
            <View style={{ ...styles.infoView, backgroundColor: Colors.blue2 }}>
                <Text style={styles.name}>{data?.company.name}</Text>
                <Text style={styles.username}>{data?.company?.catchPhrase}</Text>
                <Text style={styles.email}>{data.company.bs}</Text>
            </View>
        </SafeAreaView>
    )
}
export default UserInfo