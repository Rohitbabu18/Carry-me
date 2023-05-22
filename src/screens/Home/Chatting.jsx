import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {horizScale} from '../../util/Layout';
import {Colors} from '../../util/Colors';
import CustomImage from '../../util/Images';
import fontSize from '../../util/Fonts';

const Chatting = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'From : Isolo Bustop\nTo : Gadroo Bustop\nFor : 1200$\n\nI am Nickname Please Chat with me here.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: CustomImage.chaticon,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.mainColor}
      />
      <View style={styles.headerView}>
        <View style={styles.headerSubView}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={CustomImage.back} style={styles.backBtnStyle} />
          </Pressable>
          <Image source={CustomImage.chaticon} style={styles.chatIcon} />
          <Text style={styles.chatHeading}>Bad Boy</Text>
        </View>
        <Pressable
          onPress={() => {
            Alert.alert('Coming Soon', 'Send your Travel Manifest Data');
          }}
          style={styles.manifestBtn}>
          <Text style={styles.manifestBtnText}>
            Send your Travel{'\n'}Manifest Data
          </Text>
        </Pressable>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        messagesContainerStyle={{
          backgroundColor: Colors.mainColorDim,
        }}
        textInputStyle={{color: Colors.black}}
      />
      <View style={styles.chatBtnView}>
        <Pressable
          onPress={() => {
            navigation.navigate('RatingScreen');
          }}
          style={styles.chatBtns}>
          <Image source={CustomImage.rate} style={styles.chatBtnsImg} />
        </Pressable>
        <Pressable
          onPress={() => {
            alert('Coming Soon');
          }}
          style={styles.chatBtns}>
          <Image source={CustomImage.trash} style={styles.chatBtnsImg} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatBtnView: {
    position: 'absolute',
    top: horizScale(100),
    right: horizScale(10),
  },
  chatBtns: {
    // backgroundColor: Colors.black,
    marginVertical: horizScale(10),
  },
  chatBtnsImg: {
    height: horizScale(50),
    width: horizScale(50),
    resizeMode: 'contain',
  },
  manifestBtnText: {
    color: Colors.black,
    fontWeight: '500',
  },
  manifestBtn: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: horizScale(10),
    paddingVertical: horizScale(3),
    borderRadius: horizScale(10),
  },
  chatIcon: {
    height: horizScale(40),
    width: horizScale(40),
    resizeMode: 'contain',
    marginHorizontal: horizScale(5),
  },
  headerSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerView: {
    paddingHorizontal: horizScale(15),
    paddingVertical: horizScale(15),
    backgroundColor: Colors.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtnStyle: {
    height: horizScale(20),
    width: horizScale(20),
    resizeMode: 'cover',
    tintColor: Colors.white,
  },
  chatHeading: {
    color: Colors.white,
    fontSize: fontSize.regular,
    marginHorizontal: horizScale(10),
  },
});
