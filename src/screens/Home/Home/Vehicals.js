import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView, StyleSheet,
    Text, View
} from 'react-native'
import React, { useState } from 'react'
import styles from '../../../util/Styles'
import { Colors } from '../../../util/Colors'
import { Spacer } from '../../../util/Layout'
import Back from '../../Componets/Back'
import { useDispatch, useSelector } from 'react-redux'
import { vehiaclSelectAction } from '../../../redux/action'
// import styles from '../../util/Styles'
// import Back from '../Componets/Back'
// import CustomImage from '../../util/Images'
// import { Spacer } from '../../util/Layout'
// import { Colors } from '../../util/Colors'

const Vehicals = ({ navigation }) => {
    const active = useSelector(state => state.userData.vehiaclSelected)
    const dispatch = useDispatch()
    const language = [
        {
            id: 1,
            name: 'Scooter',
            img: 'https://www.freepnglogos.com/uploads/scooter-png/scooter-png-images-available-for-download-12.png',
        },
        {
            id: 2,
            name: 'Bike',
            img: 'https://images.carandbike.com/bike-images/colors/honda/cb-unicorn-160/honda-cb-unicorn-160-imperial-red-metallic.png?v=1589473715',
        },
        {
            id: 3,
            name: 'Auto',
            img: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/3-wheelers-and-qute/re/diesel/eco-green/00.png',
        },
        {
            id: 4,
            name: 'E-ricsa',
            img: 'https://kineticgreenvehicles.com/images/category/super-dx-thumb-new.png',
        },
        {
            id: 5,
            name: 'Car',
            img: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png',
        },
        {
            id: 6,
            name: 'Bus',
            img: 'https://pngimg.com/d/bus_PNG101203.png',
        },
        {
            id: 7,
            name: 'Pickup',
            img: 'https://pngimg.com/d/pickup_truck_PNG16325.png',
        },
        {
            id: 8,
            name: 'Truck',
            img: 'https://static.wixstatic.com/media/175e3f_b5c41bc8e2ae4eca8a0a2c0a5d73bfe8~mv2.png/v1/fill/w_560,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Lorry3%20(1).png',
        },
    ]
    const renderItem = ({ item, index }) => {
        return <Pressable
            onPressIn={() => {
                dispatch(vehiaclSelectAction(item.id))

            }}
            onPress={() => {
                navigation.goBack();
            }}
            style={{
                ...styles.list2ColumContainer,
                backgroundColor: active == item.id ? Colors.mainColor : Colors.white,
            }}>
            <Image source={{ uri: item.img }} style={styles.smallCircleImage} />
            <Text style={{ ...styles.unSelectedText, color: active !== item.id ? Colors.mainColor : Colors.white, }}>{item.name}</Text>
        </Pressable>
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Back navigation={navigation} color={Colors.black} />
            </View>
            <Spacer height={20} />
            <Text style={styles.headingText}>Choose Vehical</Text>
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

export default Vehicals

const stylesCustom = StyleSheet.create({})