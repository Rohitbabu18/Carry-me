import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView, StyleSheet,
    Text, View
} from 'react-native'
import React from 'react'
import styles from '../../util/Styles'
import Back from '../Componets/Back'
import CustomImage from '../../util/Images'
import { Spacer } from '../../util/Layout'
import { Colors } from '../../util/Colors'

const Language = ({ navigation }) => {
    const language = [
        {
            id: 1,
            name: 'English',
            logo: CustomImage.unitedkingdom
        },
        {
            id: 2,
            name: 'Germon',
            logo: CustomImage.germany
        },
        {
            id: 3,
            name: 'Chinese',
            logo: CustomImage.china
        },
        {
            id: 4,
            name: 'Japnaese',
            logo: CustomImage.japan
        },
        {
            id: 5,
            name: 'France',
            logo: CustomImage.france
        },
        {
            id: 6,
            name: 'Hindi',
            logo: CustomImage.india
        },
    ]
    const renderItem = ({ item, index }) => {
        return <Pressable
            onPress={() => {
                navigation.navigate('TermsAndCondition', { button: true })
            }}
            style={styles.list2ColumContainer}>
            <Image source={item.logo} style={styles.smallCircleImage} />
            <Text style={styles.unSelectedText}>{item.name}</Text>
        </Pressable>
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Back navigation={navigation} color={Colors.black} />
            </View>
            <Spacer height={20} />
            <Text style={styles.headingText}>Choose Language</Text>
            <Text style={styles.smallText}>You want to learn & master it.</Text>
            <Spacer height={70} />
            <FlatList
                data={language}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{ alignSelf: 'center' }}

            />
        </SafeAreaView>
    )
}

export default Language

const stylesCustom = StyleSheet.create({})