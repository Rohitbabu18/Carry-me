import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from './Colors'
import fontSize from './Fonts'
import { horizScale, vertScale } from './Layout'
const styles = StyleSheet.create({
    smallText: {
        color: Colors.darkgrey,
        fontSize: fontSize.small,
        fontWeight: '400',
        paddingHorizontal: horizScale(20),
        textAlign: 'left'
    },
    modalBox: {
        backgroundColor: Colors.white,
        width: horizScale(300),
        borderRadius: horizScale(15),
        alignSelf: 'center',
    },
    selected: {
        backgroundColor: Colors.mainColor,
        borderRadius: horizScale(20),
        elevation: 3,
        padding: horizScale(8),
        width: horizScale(120),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    unSelected: {
        borderWidth: horizScale(1),
        borderColor: Colors.mainColor,
        borderRadius: horizScale(20),
        padding: horizScale(8),
        width: horizScale(120),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    selectedText: {
        color: Colors.white,
        fontSize: fontSize.small,
        fontWeight: '600',
        paddingHorizontal: horizScale(10),
        textAlign: 'center'
    },
    unSelectedText: {
        fontSize: fontSize.small,
        fontWeight: '600',
        color: Colors.mainColor,
        paddingHorizontal: horizScale(10),
        textAlign: 'center'

    },
    TextH3: {
        color: Colors.mainColor,
        textAlignVertical: 'center',
        paddingLeft: horizScale(20),
        fontSize: fontSize.h3,
        fontWeight: 'bold'
    },
    TextH5: {
        color: Colors.mainColor,
        textAlignVertical: 'center',
        paddingLeft: horizScale(20),
        fontSize: fontSize.h5,
        fontWeight: '600'
    },
    TextMedium: {
        color: Colors.black,
        textAlignVertical: 'center',
        fontSize: fontSize.medium,
        fontWeight: '400'
    },
    headerView: {
        marginHorizontal: horizScale(10),
        marginVertical: horizScale(15),
    },
    button: {
        paddingVertical: vertScale(15),
        width: '80%',
        backgroundColor: Colors.mainColor,
        borderRadius: horizScale(40),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    smallbutton: {
        paddingVertical: vertScale(5),
        width: '40%',
        backgroundColor: Colors.mainColor,
        borderRadius: horizScale(40),
        alignSelf: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: fontSize.regular,
        fontWeight: '700'
    },
    floatingcontainerstyle: {
        marginTop: vertScale(15),
        marginHorizontal: horizScale(20),
        borderBottomWidth: vertScale(2),
    },
    floatinginputstyle: {
        color: Colors.black,
        fontSize: fontSize.medium,
        marginTop: horizScale(5),
        fontWeight: '700'
    },
    labelstyle: {
        paddingVertical: horizScale(5),
        color: Colors.black,
    },
    floatinglabelstyle: {
        fontSizeFocused: fontSize.small,
        fontSizeBlurred: fontSize.medium,
        colorBlurred: Colors.black,
        colorFocused: Colors.black,
        fontWeight: 'bold'
    },
    floatingContainer: {
        height: horizScale(60),
        borderWidth: horizScale(1),
        marginHorizontal: horizScale(40),
        borderRadius: horizScale(10)
    },
    logoImage: {
        marginVertical: horizScale(30),
        height: horizScale(80),
        width: horizScale(260),
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    titleText: {
        textAlign: 'center',
        fontSize: fontSize.h3,
        fontWeight: '700',
        color: Colors.mainColor,
        textShadowOffset: { width: -3, height: 2 },
        textShadowColor: Colors.darkgrey,
        textShadowOpacity: 0.2,
        textShadowRadius: 6,
    },
    rowCenter: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: horizScale(10)
    },
    rowSpaceEvenly: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    rowCenterItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    addressHeading: {
        marginHorizontal: horizScale(20),
        backgroundColor: Colors.grey,
        padding: horizScale(15),
        borderRadius: horizScale(10)
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    containerLinearGradient: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    headingText: {
        color: Colors.mainColor,
        textAlignVertical: 'center',
        paddingLeft: horizScale(20),
        fontSize: fontSize.input,
        fontWeight: 'bold'
    },
    forgetPassword: {
        color: Colors.mainColor,
        textAlignVertical: 'center',
        paddingRight: horizScale(20),
        fontSize: fontSize.medium,
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    listContainer: {
        marginHorizontal: horizScale(2),
        marginVertical: horizScale(10),
        backgroundColor: Colors.white,
        elevation: 3,
        borderRadius: horizScale(15),
        padding: horizScale(20)
    },
    name: {
        color: Colors.blue,
        fontSize: fontSize.regular,
        fontWeight: '600'
    },
    username: {
        color: Colors.blue,
        fontSize: fontSize.h5,
        fontWeight: 'bold'
    },
    email: {
        color: Colors.black,
        fontSize: fontSize.small,
        fontWeight: '500'
    },
    smallIcon: {
        height: horizScale(20),
        width: horizScale(20),
        resizeMode: "contain",
    },
    backView: {
        flexDirection: "row",
        marginLeft: horizScale(20),
        marginTop: horizScale(10),
        alignItems: "center",
    },
    backText: {
        color: Colors.darkgrey,
        marginLeft: horizScale(10),
        fontSize: fontSize.medium,
    },
    infoView: {
        margin: horizScale(20),
        padding: horizScale(30),
        backgroundColor: Colors.blueLight,
        borderRadius: horizScale(15)
    },
    testUnderline: {
        marginHorizontal: horizScale(20),
        height: horizScale(45),
        borderBottomWidth: horizScale(0.8),
        borderColor: Colors.grey,
        textAlignVertical: 'bottom',
        color: Colors.black,
        fontWeight: '600',
        fontSize: fontSize.regular
    }

})
export default styles