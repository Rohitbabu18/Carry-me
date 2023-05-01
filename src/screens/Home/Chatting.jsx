import {
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
        text: 'Hello developer',
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
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={CustomImage.back} style={styles.backBtnStyle} />
        </Pressable>
        <Image source={CustomImage.chaticon} style={styles.chatIcon} />
        <Text style={styles.chatHeading}>Bad Boy</Text>
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
    </SafeAreaView>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatIcon: {
    height: horizScale(40),
    width: horizScale(40),
    resizeMode: 'contain',
    marginHorizontal: horizScale(5),
  },
  headerView: {
    paddingHorizontal: horizScale(15),
    paddingVertical: horizScale(15),
    backgroundColor: Colors.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
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
