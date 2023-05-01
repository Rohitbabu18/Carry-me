import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../Componets/Back';
import styles from '../../util/Styles';
import {Spacer, horizScale, vertScale} from '../../util/Layout';
import CustomImage from '../../util/Images';
import {Colors} from '../../util/Colors';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-detect';
import {generateUUID} from '../../util/UniqueIdGenerator';
import Modal from 'react-native-modal';
import {ToastMessage} from '../../util/ToastMessage';
import ProgressCircle from 'react-native-progress-circle';
import fontSize from '../../util/Fonts';
const GenerateWorkmanId = ({navigation}) => {
  const t0 = '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0';
  const t1 = '1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1';
  const t2 = '2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2';
  const t3 = '3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3';
  const t4 = '4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4';
  const t5 = '5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5';
  const t6 = '6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6';
  const t7 = '7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7';
  const t8 = '8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8';
  const t9 = '9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9';
  const tA = 'A A A A A A A A A A A A A A A';
  const tB = 'B B B B B B B B B B B B B B B';
  const tC = 'C C C C C C C C C C C C C C C';
  const tD = 'D D D D D D D D D D D D D D D';
  const tE = 'E E E E E E E E E E E E E E E E';
  const tF = 'F F F F F F F F F F F F F F F F';
  const [count, setCount] = useState(15);
  const [persent, setPersent] = useState(0);
  function onSwipe() {
    if (count < 17) {
      setCount(count => count + 1);
      let d = (count * 100) / 16;
      setPersent(parseInt(d));
      setKey(generateUUID(count));
    }
  }
  const [Key, setKey] = useState('');
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={visible}
        animationType="slide"
        onBackdropPress={() => setVisible(!visible)}
        onRequestClose={() => {
          setVisible(!visible);
        }}
        style={{margin: 0}}>
        <StatusBar backgroundColor="rgba(52, 52, 52, 0.8)" />
        <View style={styles.modalBox1}>
          <Spacer height={10} />
          <Text
            style={{
              ...styles.headingText,
              textAlign: 'center',
              paddingLeft: horizScale(0),
            }}>
            Welcome to Workman select. Create workman ID demo
          </Text>
          <Spacer height={10} />
          <View style={stylesCustom.Icon}>
            <Image
              source={CustomImage.codedemo}
              style={styles.codeGeneretorImage}
            />
          </View>
          <Spacer height={10} />
          <View style={{alignItems: 'center', marginTop: vertScale(25)}}>
            <Text
              style={{color: Colors.black, width: '80%', textAlign: 'center'}}>
              Move your finger on the screen.
            </Text>
          </View>
          <Spacer height={25} />
          <Pressable
            style={styles.button}
            onPress={() => {
              setVisible(!visible);
            }}>
            <Text style={styles.buttonText}>Ok</Text>
          </Pressable>
          <Spacer height={40} />
        </View>
      </Modal>
      <View style={styles.rowCenter}>
        <View style={styles.headerView}>
          <Back navigation={navigation} color={Colors.black} />
        </View>
        <Pressable
          onPress={() => {
            setVisible(true);
          }}
          style={{...styles.selected, marginRight: horizScale(20)}}>
          <Image
            source={CustomImage.demo}
            style={{
              ...styles.smallIcon,
              backgroundColor: Colors.white,
              borderRadius: horizScale(7),
            }}
          />
          <Text style={styles.selectedText}>Demo</Text>
        </Pressable>
      </View>

      <Spacer height={20} />
      <View style={styles.rowSpaceEvenly}>
        <View style={{flex: 0.6}}>
          <Text style={styles.TextH5}>Welcome to</Text>
          <Text style={styles.TextH3}>Workman Select </Text>
        </View>
        <View style={{flex: 0.3}}>
          <ProgressCircle
            percent={persent}
            radius={35}
            borderWidth={8}
            color={Colors.mainColor}
            shadowColor={Colors.grey}
            bgColor={Colors.white}>
            <Text
              style={{
                fontSize: fontSize.regular,
                color: Colors.mainColor,
                fontWeight: '700',
              }}>{`${persent}%`}</Text>
          </ProgressCircle>
        </View>
      </View>
      <Spacer height={20} />
      <Text style={styles.unSelectedText}>
        We need to generate new Workman Id.{'\n'}Move your finger in the
        character field to generate{'\n'}random data for your key.{' '}
      </Text>
      <Spacer height={20} />
      <GestureRecognizer
        onSwipe={direction => onSwipe(direction)}
        style={styles.codeGeneretorContainer}>
        <Text style={styles.codeGeneretorText}>{t0}</Text>
        <Text style={styles.codeGeneretorText}>{t1}</Text>
        <Text style={styles.codeGeneretorText}>{t2}</Text>
        <Text style={styles.codeGeneretorText}>{t3}</Text>
        <Text style={styles.codeGeneretorText}>{t4}</Text>
        <Text style={styles.codeGeneretorText}>{t5}</Text>
        <Text style={styles.codeGeneretorText}>{t6}</Text>
        <Text style={styles.codeGeneretorText}>{t7}</Text>
        <Text style={styles.codeGeneretorText}>{t8}</Text>
        <Text style={styles.codeGeneretorText}>{t9}</Text>
        <Text style={styles.codeGeneretorText}>{tA}</Text>
        <Text style={styles.codeGeneretorText}>{tB}</Text>
        <Text style={styles.codeGeneretorText}>{tC}</Text>
        <Text style={styles.codeGeneretorText}>{tD}</Text>
        <Text style={styles.codeGeneretorText}>{tE}</Text>
        <Text style={styles.codeGeneretorText}>{tF}</Text>
      </GestureRecognizer>

      <Spacer height={15} />
      {Key == '' ? null : (
        <Text style={styles.smallText}>
          Your Key - <Text style={styles.headingText}>{Key}</Text>
        </Text>
      )}
      <Spacer height={20} />
      <Pressable
        onPress={() => {
          if (Key == '') {
            ToastMessage(
              'Drag your finger on hexa number box. To create workman ID',
            );
          } else {
            navigation.navigate('Signup1', {workmanId: Key});
          }
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default GenerateWorkmanId;

const stylesCustom = StyleSheet.create({});
