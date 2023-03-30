import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../Componets/Back';
import {Colors} from '../../util/Colors';
import CustomImage from '../../util/Images';
import {horizScale, vertScale} from '../../util/Layout';
import fontSize from '../../util/Fonts';

const data = [
  {
    id: 1,
    name: 'Bad Boy',
    price: 1200,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 4.5,
    numOfReviews: 160,
    image: require('../../assets/auto.jpg'),
  },
  {
    id: 2,
    name: 'Other Driver',
    price: 1200,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 3.5,
    numOfReviews: 130,
    image: require('../../assets/auto.jpg'),
  },
  {
    id: 3,
    name: 'Tumaro the First',
    price: 1200,
    from: 'Isolo Bustop',
    to: 'Gadoro Bustop',
    rating: 4,
    numOfReviews: 664,
    image: require('../../assets/auto.jpg'),
  },
];

const RiderList = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatView}>
        <View style={styles.subView}>
          <Image source={item.image} style={styles.flatImage} />
          <View style={styles.nameView}>
            <Text>{item.name}</Text>
            <Text>Price : {item.price}</Text>
          </View>
        </View>
        <View style={styles.subViewBtm}>
          <View>
            <Text>From :</Text>
            <Text>{item.from}</Text>
          </View>
          <View>
            <Text>To :</Text>
            <Text>{item.to}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={'dark-content'}
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
  nameView: {
    marginHorizontal: horizScale(10),
  },

  subViewBtm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteIcon: {
    height: horizScale(25),
    width: horizScale(25),
    resizeMode: 'cover',
  },
  flatImage: {
    height: horizScale(100),
    width: horizScale(100),
    borderRadius: horizScale(10),
  },
  flatView: {
    marginHorizontal: horizScale(10),
    marginVertical: horizScale(5),
    padding: horizScale(10),
    borderRadius: horizScale(10),
    backgroundColor: Colors.white,
    elevation: 10,
  },
  textInput: {
    fontSize: fontSize.input,
    color: Colors.black,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    margin: horizScale(10),
    borderRadius: horizScale(10),
    paddingHorizontal: horizScale(15),
  },
  searchIcon: {
    height: horizScale(20),
    width: horizScale(20),
    resizeMode: 'cover',
  },
  headerView: {
    marginHorizontal: horizScale(10),
    marginVertical: horizScale(15),
  },
});
