import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../../Componets/Back';
import {Colors} from '../../../util/Colors';
import CustomImage from '../../../util/Images';
import {horizScale} from '../../../util/Layout';
import fontSize from '../../../util/Fonts';
import {Spacer} from '../../../util/Layout';
import {Rating} from 'react-native-ratings';

const data = [
  {
    id: 1,
    name: 'Bad Boy',
    price: 1200,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 4.6,
    numOfReviews: 160,
    image: CustomImage.auto,
  },
  {
    id: 2,
    name: 'Other Driver',
    price: 1230,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 3.5,
    numOfReviews: 130,
    image: CustomImage.auto,
  },
  {
    id: 3,
    name: 'Tumaro the First',
    price: 1000,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 4.4,
    numOfReviews: 664,
    image: CustomImage.auto,
  },
  {
    id: 4,
    name: 'Bad Boy',
    price: 1200,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 4.6,
    numOfReviews: 160,
    image: CustomImage.auto,
  },
  {
    id: 5,
    name: 'Other Driver',
    price: 1230,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 3.5,
    numOfReviews: 130,
    image: CustomImage.auto,
  },
  {
    id: 6,
    name: 'Tumaro the First',
    price: 1000,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 4.4,
    numOfReviews: 664,
    image: CustomImage.auto,
  },
];

const RiderList = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatView}>
        <View style={styles.btnView}>
          <Pressable
            onPress={() => {
              navigation.navigate('Chatting');
            }}
            style={({pressed}) =>
              pressed ? {...styles.imgView, opacity: 0.8} : styles.imgView
            }>
            <Image source={CustomImage.message} style={styles.iconStyle} />
          </Pressable>
          <Pressable
            onPress={() => {
              alert('Coming Soon');
            }}
            style={({pressed}) =>
              pressed
                ? {...styles.imgView, backgroundColor: Colors.red, opacity: 0.6}
                : {...styles.imgView, backgroundColor: Colors.red}
            }>
            <Image source={CustomImage.delete} style={styles.iconStyle} />
          </Pressable>
        </View>
        <View style={styles.subView}>
          <Image source={item.image} style={styles.flatImage} />
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Rating
              style={styles.ratingStyle}
              type="star"
              readonly
              fractions={true}
              startingValue={item.rating}
              ratingCount={5}
              imageSize={18}
            />
            <Text style={styles.numRating}>({item.numOfReviews})</Text>
          </View>
          <Text style={styles.priceText}>
            Price :<Text style={{fontSize: fontSize.medium}}>{item.price}</Text>{' '}
            /-
          </Text>
        </View>
        <Spacer height={10} />
        <View style={styles.subViewBtm}>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text style={styles.fromToText}>From :</Text>
            <Text style={styles.boldText}>{item.from}</Text>
          </View>
          <View style={styles.vertiLine}></View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Text style={styles.fromToText}>To :</Text>
            <Text style={styles.boldText}>{item.to}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={'light-content'}
      />
      <View style={styles.headerView}>
        <Back navigation={navigation} />
      </View>
      <View style={styles.searchView}>
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholderTextColor={Colors.grey}
          style={styles.textInput}
        />
        <Image source={CustomImage.search} style={styles.searchIcon} />
      </View>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default RiderList;

const styles = StyleSheet.create({
  btnView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: horizScale(-15),
    right: horizScale(15),
  },
  imgView: {
    backgroundColor: Colors.mainColor,
    marginHorizontal: horizScale(4),
    padding: horizScale(12),
    borderRadius: horizScale(25),
  },
  iconStyle: {
    height: horizScale(20),
    width: horizScale(20),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  vertiLine: {
    height: horizScale(20),
    borderWidth: 0.5,
    borderColor: Colors.background,
  },
  numRating: {
    color: Colors.grey,
    fontSize: fontSize.medium,
  },
  ratingStyle: {
    alignSelf: 'flex-start',
    marginVertical: horizScale(4),
  },
  priceText: {
    color: Colors.green,
    fontWeight: '500',
    fontSize: fontSize.small,
    marginVertical: horizScale(5),
    flex: 0.3,
  },
  nameText: {
    fontSize: fontSize.regular,
    color: Colors.black,
    fontWeight: '500',
  },
  fromToText: {
    color: Colors.grey,
    fontSize: fontSize.small,
  },
  boldText: {
    color: Colors.black,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },
  nameView: {
    marginHorizontal: horizScale(10),
    flex: 0.4,
  },
  subViewBtm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    height: horizScale(25),
    width: horizScale(25),
    resizeMode: 'cover',
  },
  flatImage: {
    height: horizScale(100),
    width: horizScale(100),
    resizeMode: 'contain',
    borderRadius: horizScale(5),
    flex: 0.3,
  },
  flatView: {
    marginHorizontal: horizScale(10),
    marginVertical: horizScale(15),
    padding: horizScale(10),
    borderRadius: horizScale(10),
    backgroundColor: Colors.white,
    elevation: 7,
  },
  textInput: {
    fontSize: fontSize.input,
    color: Colors.black,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    elevation: 7,
    margin: horizScale(10),
    borderRadius: horizScale(25),
    paddingHorizontal: horizScale(15),
  },
  searchIcon: {
    height: horizScale(20),
    width: horizScale(20),
    resizeMode: 'cover',
  },
  headerView: {
    paddingHorizontal: horizScale(10),
    paddingVertical: horizScale(15),
    backgroundColor: Colors.mainColor,
  },
});
