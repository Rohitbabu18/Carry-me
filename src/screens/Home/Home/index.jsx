import {
    Image, Pressable, SafeAreaView, ScrollView,
    StatusBar, StyleSheet, Text, View,
    ImageBackground,
    Dimensions,
    FlatList
} from 'react-native'
import React, { useState, useRef, useMemo } from 'react'
import styles from '../../../util/Styles'
import Modal from "react-native-modal";
import { Spacer, horizScale } from '../../../util/Layout';
import CustomImage from '../../../util/Images';
import { Colors } from '../../../util/Colors';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../Componets/Header';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import TinderCard from 'react-tinder-card'
const db = [
    {
        name: 'Richard Hendricks',
        img: CustomImage.auto
    },
    {
        name: 'Erlich Bachman',
        img: CustomImage.auto
    },
    {
        name: 'Monica Hall',
        img: CustomImage.auto
    },
    {
        name: 'Jared Dunn',
        img: CustomImage.auto
    },
    {
        name: 'Dinesh Chugtai',
        img: CustomImage.auto
    }
]
const Home = ({ navigation }) => {
    const [showOption, setShowOption] = useState(true)
    const [departure, setDeparture] = useState('')
    const [destination, setDestination] = useState('')
    const [pinedDestination, setPinedDestination] = useState('')
    const [characters, setCharacters] = useState([
        {
            name: 'Richard Hendricks',
            img: CustomImage.auto
        },
        {
            name: 'Erlich Bachman',
            img: CustomImage.auto
        },
        {
            name: 'Monica Hall',
            img: CustomImage.auto
        },
        {
            name: 'Jared Dunn',
            img: CustomImage.auto
        },
        {
            name: 'Dinesh Chugtai',
            img: CustomImage.auto
        }
    ])
    const [lastDirection, setLastDirection] = useState()
    const [count, setCount] = useState(0)


    const outOfFrame = (dir, index) => {
        if (dir === "right") {

            //
        } else if (dir === "left") {
            //

        }
    }

    console.log("count===>", count)
    let childRefs = useMemo(
        () =>
            Array(characters.length)
                .fill(0)
                .map((i) => React.createRef()),
        [count]
    )

    return (

        <SafeAreaView style={styles.container}>
            <Modal
                isVisible={showOption}
                animationType="slide"
                onBackdropPress={() => setShowOption(!showOption)}
                onRequestClose={() => {
                    setShowOption(!showOption)
                }}
                style={{ margin: 0 }}
            >
                <StatusBar backgroundColor='rgba(52, 52, 52, 0.8)' />
                <View style={styles.modalBox1}>

                    <LinearGradient
                        colors={[Colors.white, Colors.homeGradient]}
                        style={styles.containerLinearGradientModal}>
                        <Spacer height={10} />
                        <View style={styles.rowCenter}>
                            <View>
                                <Text style={styles.headingText}>Welcome to</Text>
                                <Text style={styles.TextH3}>Carry Me</Text>
                            </View>
                            <Pressable onPress={() => {
                                setShowOption(!showOption)
                            }}>
                                <AntDesign name={'closecircle'} size={40} color={Colors.mainColor} style={{ margin: horizScale(20) }} />
                            </Pressable>

                        </View>
                        <Spacer height={20} />
                        <Image source={CustomImage.logo} style={styles.logoImage} />
                        <Spacer height={20} />
                        <View>
                            <Text style={styles.homeHeading}>Hi Someone,</Text>
                            <Spacer height={20} />
                            <Text style={styles.homeDec}>
                                Let us know if you Need someone to carry you destination? or Do
                                you have a ride and want to offer it to anyone that Needs?
                            </Text>
                            <Spacer height={20} />
                            <Text style={styles.chooseText}>Choose one ...</Text>
                        </View>
                        <Spacer height={40} />
                        <View style={styles.homeBtnView}>
                            <Pressable
                                onPress={() => {
                                    setShowOption(!showOption)
                                    navigation.navigate('RiderList');
                                }}
                                style={{
                                    ...styles.homeBtn,
                                    borderWidth: horizScale(2),
                                    borderColor: Colors.black,
                                }}>
                                <Text style={{ ...styles.buttonText, color: Colors.mainColor }}>
                                    Need
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setShowOption(!showOption)
                                    navigation.navigate('RegisterRide');
                                }}
                                style={{
                                    ...styles.homeBtn,
                                    backgroundColor: Colors.mainColor,
                                    borderWidth: horizScale(2),
                                    borderColor: Colors.mainColor,
                                }}>
                                <Text style={styles.buttonText}>Offer</Text>
                            </Pressable>
                        </View>
                        <Spacer height={20} />
                    </LinearGradient>

                </View>
            </Modal>
            <Header navigation={navigation} />
            <Spacer height={5} />
            <View style={styles.rowCenter}>
                <View style={{ width: horizScale(350) }}>
                    <FloatingLabelInput
                        label={'Departure Address'}
                        value={departure}
                        onChangeText={value => setDeparture(value)}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor:
                                departure !== '' ? Colors.mainColor : Colors.darkgrey,
                        }}
                    />
                </View>
                <View style={stylesCustom.bottonContainer}>
                    <Pressable onPress={() => {
                        alert('Coming Soon')
                    }}>
                        <Octicons name={'pin'} size={20} color={Colors.mainColor} />
                    </Pressable>
                    <Pressable onPress={() => {
                        alert('Coming Soon')
                    }}>
                        <Ionicons name={'ios-search'} size={20} color={Colors.mainColor} />
                    </Pressable>
                </View>
            </View>
            <Spacer height={20} />
            <View style={styles.rowCenter}>
                <View style={{ width: horizScale(350) }}>
                    <FloatingLabelInput
                        label={'Destination Address'}
                        value={destination}
                        onChangeText={value => setDestination(value)}
                        customLabelStyles={styles.floatinglabelstyle}
                        labelStyles={styles.labelstyle}
                        inputStyles={styles.floatinginputstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor:
                                destination !== '' ? Colors.mainColor : Colors.darkgrey,
                        }}
                    />
                </View>
                <View style={stylesCustom.bottonContainer}>
                    <Pressable onPress={() => {
                        alert('Coming Soon')
                    }}>
                        <Octicons name={'pin'} size={20} color={Colors.mainColor} />
                    </Pressable>
                    <Pressable onPress={() => {
                        alert('Coming Soon')
                    }}>
                        <Ionicons name={'ios-search'} size={20} color={Colors.mainColor} />
                    </Pressable>
                </View>
            </View>
            <Spacer height={20} />

            <View style={{ height: 400 }}>
                {/* <FlatList
                    data={characters}
                    renderItem={renderItem}
                /> */}
                {characters.length == count ?
                    <View style={{ zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Spacer height={50} />
                        <Pressable style={styless.smallCircle} onPress={async () => {
                            navigation.replace('MyTabs')
                        }}>
                            <Ionicons name={'ios-refresh'} size={20} color={Colors.mainColor} />
                        </Pressable>
                    </View>
                    : null}
                {characters.map((item, index) => <TinderCard
                    key={index}
                    ref={childRefs[index]}
                    preventSwipe={['up', 'down']}
                    onSwipe={() => setCount(prevCount => prevCount + 1)}
                    onCardLeftScreen={(dir) => outOfFrame(dir, index)}>
                    <View style={styless.card}>
                        <ImageBackground style={styless.cardImage} source={item.img}>
                            <Text style={styless.cardTitle}>{item.name}</Text>
                            <View style={styless.buttons}>
                                <Pressable style={styless.smallCircle} onPress={() => {
                                    alert('Coming Soon')
                                }}>
                                    <Ionicons name={'ios-refresh'} size={20} color={Colors.mainColor} />
                                </Pressable>
                                <Pressable style={styless.smallCircle} onPress={() => {
                                    alert('Coming Soon')
                                }}>
                                    <Ionicons name={'close'} size={20} color={Colors.mainColor} />
                                </Pressable>
                                <Pressable style={styless.smallCircle} onPress={() => {
                                    alert('Coming Soon')
                                }}>
                                    <Ionicons name={'heart'} size={20} color={Colors.mainColor} />
                                </Pressable>
                                <Pressable style={styless.smallCircle} onPress={() => {
                                    alert('Coming Soon')
                                }}>
                                    <Ionicons name={'eye'} size={20} color={Colors.mainColor} />
                                </Pressable>

                            </View>
                        </ImageBackground>
                    </View>
                </TinderCard>)}
            </View>
        </SafeAreaView>
    )
}

export default Home

const stylesCustom = StyleSheet.create({
    bottonContainer: {
        borderWidth: horizScale(1),
        borderRadius: horizScale(15),
        borderColor: Colors.mainColor,
        marginRight: horizScale(15),
        padding: horizScale(3),
        minHeight: horizScale(80),
        alignItems: 'center',
        justifyContent: 'space-evenly',

    }
})
const styless = {
    smallCircle: {
        backgroundColor: Colors.white,
        borderRadius: horizScale(35),
        width: horizScale(50),
        height: horizScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header: {
        color: '#000',
        fontSize: 30,
        marginBottom: 30,
    },
    cardContainer: {
        width: '90%',
        maxWidth: 260,
        height: 300,
    },
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: Dimensions.get('window').width - horizScale(20),
        height: 400,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
        alignSelf: 'center'

    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardTitle: {
        position: 'absolute',
        top: 0,
        margin: 10,
        color: Colors.mainColor,
    },
    buttons: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: Colors.mainColor,
        flexDirection: 'row',
        width: Dimensions.get('window').width - horizScale(40),
        justifyContent: 'space-evenly',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}