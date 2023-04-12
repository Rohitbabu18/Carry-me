import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import {Colors} from '../../../util/Colors';
import fontSize from '../../../util/Fonts';
import {horizScale} from '../../../util/Layout';

const MyOffer = () => {
  const data = [
    {id: '1', title: 'Offer 1', description: 'Description for Offer 1'},
    {id: '2', title: 'Offer 2', description: 'Description for Offer 2'},
    {id: '3', title: 'Offer 3', description: 'Description for Offer 3'},
    {id: '4', title: 'Offer 4', description: 'Description for Offer 4'},
    {id: '5', title: 'Offer 5', description: 'Description for Offer 5'},
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.mainLight}}>
      <StatusBar
        backgroundColor={Colors.mainColor}
        barStyle={'light-content'}
      />
      <View style={styles.notificationView}>
        <Text style={styles.notificationText}>My Offers</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notificationText: {
    color: Colors.white,
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
  notificationView: {
    backgroundColor: Colors.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: horizScale(15),
    marginBottom: horizScale(5),
    paddingHorizontal: horizScale(20),
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  list: {
    padding: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default MyOffer;
