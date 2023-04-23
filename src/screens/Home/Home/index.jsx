
import {
    Image, Pressable, SafeAreaView, ScrollView,
    StatusBar, StyleSheet, Text, View,
    ImageBackground,
    Dimensions,
    FlatList,
    Animated,
    PanResponder
} from 'react-native'
import React from 'react'
import styles from '../../../util/Styles'
import Modal from "react-native-modal";
import { Spacer, horizScale, vertScale } from '../../../util/Layout';
import CustomImage from '../../../util/Images';
import { Colors } from '../../../util/Colors';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../Componets/Header';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import fontSize from '../../../util/Fonts';

const db = [
    {

        id: 1,
        name: 'Richard Hendricks',
        img: CustomImage.auto
    },
    {
        id: 2,
        name: 'Erlich Bachman',
        img: CustomImage.auto
    },
    {
        id: 3,
        name: 'Monica Hall',
        img: CustomImage.auto
    },
    {
        id: 4,
        name: 'Jared Dunn',
        img: CustomImage.auto
    },
    {
        id: 5,
        name: 'Dinesh Chugtai',
        img: CustomImage.auto
    }
]
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = horizScale(590)
export default class Home extends React.Component {

    constructor() {
        super()
        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            selectedVehical: null,
            viewVehicalDetails: {},
            vehicals: [
                {
                    id: 1,
                    name: 'Richard Hendricks',
                    img: 'https://www.freepnglogos.com/uploads/scooter-png/scooter-png-images-available-for-download-12.png'
                },
                {
                    id: 2,
                    name: 'Erlich Bachman',
                    img: 'https://images.carandbike.com/bike-images/colors/honda/cb-unicorn-160/honda-cb-unicorn-160-imperial-red-metallic.png?v=1589473715'
                },
                {
                    id: 3,
                    name: 'Monica Hall',
                    img: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/3-wheelers-and-qute/re/diesel/eco-green/00.png'
                },
                {
                    id: 4,
                    name: 'Jared Dunn',
                    img: 'https://kineticgreenvehicles.com/images/category/super-dx-thumb-new.png'
                },
                {
                    id: 5,
                    name: 'Dinesh Chugtai',
                    img: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/43648/2023-Honda-Civic-front_43648_032_1860x760_RE_cropped.png'
                },
                {
                    id: 6,
                    name: 'Dinesh Chugtai',
                    img: 'https://pngimg.com/d/bus_PNG101203.png'
                },
                {
                    id: 7,
                    name: 'Dinesh Chugtai',
                    img: 'https://pngimg.com/d/pickup_truck_PNG16325.png'
                },
                {
                    id: 8,
                    name: 'Dinesh Chugtai',
                    img: 'https://static.wixstatic.com/media/175e3f_b5c41bc8e2ae4eca8a0a2c0a5d73bfe8~mv2.png/v1/fill/w_560,h_362,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Lorry3%20(1).png'
                }
            ],
            data: [
                {

                    id: 1,
                    name: 'Richard Hendricks',
                    uri: CustomImage.auto
                },
                {
                    id: 2,
                    name: 'Erlich Bachman',
                    uri: CustomImage.auto
                },
                {
                    id: 3,
                    name: 'Monica Hall',
                    uri: CustomImage.auto
                },
                {
                    id: 4,
                    name: 'Jared Dunn',
                    uri: CustomImage.auto
                },
                {
                    id: 5,
                    name: 'Dinesh Chugtai',
                    uri: CustomImage.auto
                }
            ],
            count: 0,

            showOption: false,
            detailsModal: false,
            departure: '',
            destination: '',
            pinedDestination: '',
        }


        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-30deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })

    }
    UNSAFE_componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {

                this.position.setValue({ x: gestureState.dx, y: 0 })
            },
            onPanResponderRelease: (evt, gestureState) => {

                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: 0 },
                        useNativeDriver: true
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: 0 },
                        useNativeDriver: true
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4,
                        useNativeDriver: true
                    }).start()
                }
            }
        })
    }

    renderUsers = () => {

        return this.state.data.map((item, i) => {
            console.log(this.state.currentIndex, this.state.data.length)

            if (i < this.state.currentIndex) {
                console.log('come')
                return null
            }
            else if (i == this.state.currentIndex) {
                console.log('if else')
                return (
                    <Animated.View

                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>Accept</Text>

                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>Reject</Text>

                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                            source={item.uri} />
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
                                this.setState({ detailsModal: !this.state.detailsModal, viewVehicalDetails: item })
                            }}>
                                <Ionicons name={'eye'} size={20} color={Colors.mainColor} />
                            </Pressable>

                        </View>

                    </Animated.View>
                )
            }
            else {
                console.log('else')
                return (
                    <Animated.View

                        key={item.id} style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                        }]}>
                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>Accept</Text>

                        </Animated.View>

                        <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>Reject</Text>

                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                            source={item.uri} />
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
                                this.setState({ detailsModal: !this.state.detailsModal, viewVehicalDetails: item })
                            }}>
                                <Ionicons name={'eye'} size={20} color={Colors.mainColor} />
                            </Pressable>

                        </View>

                    </Animated.View>
                )
            }

        }).reverse()
    }
    renderVehicals = ({ item, index }) => {

        return (
            <Pressable
                onPress={() => {
                    this.setState({ selectedVehical: item.id })
                }}
                style={{ ...styles.smallCircle, backgroundColor: this.state.selectedVehical == item.id ? Colors.mainColor : null }}>
                <Image source={{ uri: item.img }} style={styles.smallIconVehical} />
            </Pressable>
        )

    }
    render() {
        return (

            <SafeAreaView style={styles.container}>
                <Modal
                    isVisible={this.state.showOption}
                    animationType="slide"
                    onBackdropPress={() => this.setState({ showOption: !this.state.showOption })}
                    onRequestClose={() => {
                        this.setState({ showOption: !this.state.showOption })
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
                                    this.setState({ showOption: !this.state.showOption })
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
                                        this.setState({ showOption: !this.state.showOption })
                                        this.props.navigation.navigate('RiderList');
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
                                        this.setState({ showOption: !this.state.showOption })
                                        this.props.navigation.navigate('RegisterRide');
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
                <Header navigation={this.props.navigation} />
                <View>
                    <FlatList
                        data={this.state.vehicals}
                        horizontal
                        style={{ marginHorizontal: horizScale(10) }}
                        renderItem={this.renderVehicals}
                        keyExtractor={(item, index) => item.id + index}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Spacer height={5} />
                <View style={{
                    ...styles.rowSpaceEvenly, borderBottomColor:
                        this.state.departure !== '' ? Colors.mainColor : Colors.darkgrey,
                    // borderBottomWidth: vertScale(2),
                    marginHorizontal: horizScale(15),
                    height: horizScale(75)
                }}>
                    <View style={{ flex: 0.8, }}>
                        <FloatingLabelInput
                            staticLabel
                            label={'Departure Address'}
                            hint='Type here'
                            hintTextColor={Colors.grey}
                            value={this.state.departure}
                            multiline
                            onChangeText={value => this.setState({ departure: value })}
                            customLabelStyles={styles.floatinglabelstyle}
                            labelStyles={styles.labelstyle}
                            inputStyles={styles.floatinginputstyle}
                            containerStyles={{
                                ...styles.floatingcontainerstyle,
                                marginHorizontal: 0,
                                // borderBottomWidth: 0,
                                marginTop: 0,
                                borderRadius: 20,
                                borderWidth: .8,
                                borderBottomWidth: .8,
                            }}

                        />
                    </View>
                    <View style={stylesCustom.bottonContainer}>
                        <Pressable onPress={() => {
                            alert('Coming Soon')
                        }}>
                            <Ionicons name={'ios-search'} size={20} color={Colors.mainColor} />
                        </Pressable>
                        <Pressable onPress={() => {
                            alert('Coming Soon')
                        }}>
                            <Octicons name={'pin'} size={20} color={Colors.mainColor} />
                        </Pressable>

                    </View>
                </View>
                <Spacer height={5} />
                <View style={{
                    ...styles.rowSpaceEvenly, borderBottomColor:
                        this.state.destination !== '' ? Colors.mainColor : Colors.darkgrey,
                    // borderBottomWidth: vertScale(2),
                    marginHorizontal: horizScale(15),
                    height: horizScale(75)
                }}>
                    <View style={{ flex: 0.8 }}>
                        <FloatingLabelInput
                            staticLabel
                            hint='Type here'
                            hintTextColor={Colors.grey}

                            label={'Destination Address'}
                            value={this.state.destination}
                            multiline
                            onChangeText={value => this.setState({ destination: value })
                            }
                            customLabelStyles={styles.floatinglabelstyle}
                            labelStyles={styles.labelstyle}
                            inputStyles={styles.floatinginputstyle}
                            containerStyles={{
                                ...styles.floatingcontainerstyle,
                                marginHorizontal: 0,
                                borderBottomWidth: 0,
                                marginTop: horizScale(1),
                                borderRadius: 20,
                                borderWidth: .8,
                                borderBottomWidth: .8,
                            }}
                        />
                    </View>
                    <View style={stylesCustom.bottonContainer}>
                        <Pressable onPress={() => {
                            alert('Coming Soon')
                        }}>
                            <Ionicons name={'ios-search'} size={20} color={Colors.mainColor} />
                        </Pressable>
                        <Pressable onPress={() => {
                            alert('Coming Soon')
                        }}>
                            <Octicons name={'pin'} size={20} color={Colors.mainColor} />
                        </Pressable>
                    </View>
                </View>
                <Spacer height={5} />
                <View style={{
                    height: horizScale(590),
                    overflow: 'hidden'
                }}>
                    {this.renderUsers()}
                </View>
                <Modal
                    isVisible={this.state.detailsModal}
                    animationType="slide"
                    onBackdropPress={() => this.setState({ detailsModal: !this.state.detailsModal })}
                    onRequestClose={() => {
                        this.setState({ detailsModal: !this.state.detailsModal })
                    }}
                    style={{ margin: 0 }}
                >
                    <StatusBar backgroundColor='rgba(52, 52, 52, 0.8)' />
                    <View style={styles.modalBox1}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <LinearGradient
                                colors={[Colors.white, Colors.homeGradient]}
                                style={styles.containerLinearGradientModal}>
                                <Spacer height={10} />
                                <View style={styles.rowCenter}>
                                    <View>
                                        <Text style={styles.headingText}>Name of vahical</Text>
                                        <Text style={styles.TextH3}>Auto Rickshaw</Text>
                                    </View>
                                    <Pressable onPress={() => {
                                        this.setState({ detailsModal: !this.state.detailsModal })
                                    }}>
                                        <AntDesign name={'closecircle'} size={40} color={Colors.mainColor} style={{ margin: horizScale(20) }} />
                                    </Pressable>

                                </View>
                                <Spacer height={20} />
                                <Image source={this.state.viewVehicalDetails.uri} style={styles.bigImage} />
                                <Spacer height={20} />
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Nickname</Text>
                                    <Text style={stylesCustom.text1}>Road Champion 23</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Ride Type</Text>
                                    <Text style={stylesCustom.text1}>Treacle</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Seats</Text>
                                    <Text style={stylesCustom.text1}>3</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Departure Address</Text>
                                    <Text style={stylesCustom.text1}>Tamara Close 23 janapaja Lagos</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Destination Address</Text>
                                    <Text style={stylesCustom.text1}>Lare waju Bustop 12 Ikoji Lagos</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Fixed Price</Text>
                                    <Text style={stylesCustom.text1}>$ 1200/-</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Luggage</Text>
                                    <Text style={stylesCustom.text1}>4</Text>
                                </View>
                                <View style={stylesCustom.textContainer}>
                                    <Text style={stylesCustom.text}>Description</Text>
                                    <Text style={stylesCustom.text1}>The Sucked burned. I have already got a new one of the same model. So it is just Required to change them.</Text>
                                </View>
                                <Spacer height={40} />
                            </LinearGradient>


                        </ScrollView>
                    </View>
                </Modal>
            </SafeAreaView>

        );
    }
}
const stylesCustom = StyleSheet.create({
    bottonContainer: {
        minHeight: horizScale(80),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 0.15

    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: horizScale(.8),
        borderBottomColor: Colors.black,
        marginHorizontal: horizScale(20),
        paddingVertical: horizScale(5)
    },
    text: {
        color: Colors.mainColor,
        paddingLeft: horizScale(20),
        fontSize: fontSize.das,
        fontWeight: 'bold',
        width: horizScale(100)
    },
    text1: {
        color: Colors.mainColor,
        paddingLeft: horizScale(20),
        fontSize: fontSize.small,
        fontWeight: 'bold',
        width: horizScale(250)
    }
})
const styless = StyleSheet.create({
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
        height: horizScale(460),
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
        zIndex: 2
    },
    buttons: {
        position: 'absolute',
        bottom: 5,
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
})