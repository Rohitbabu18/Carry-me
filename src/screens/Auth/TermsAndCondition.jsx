import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '../../util/Styles';
import Back from '../Componets/Back';
import {horizScale, Spacer} from '../../util/Layout';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../util/Colors';

const TermsAndCondition = ({navigation, route}) => {
  const {button} = route?.params;
  const data = [
    {
      id: 1,
      text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.',
    },
    {
      id: 2,
      text: 'Certain of our Services, including signing up for updates regarding our programs or participating in certain functions provided by the Site, require Users to provide personal data, as detailed in our Privacy Policy. If you wish to obtain information regarding the Services, we may direct you away from the Site to a third-party site.',
    },
    {
      id: 3,
      text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.',
    },
    {
      id: 4,
      text: 'Certain of our Services, including signing up for updates regarding our programs or participating in certain functions provided by the Site, require Users to provide personal data, as detailed in our Privacy Policy. If you wish to obtain information regarding the Services, we may direct you away from the Site to a third-party site.',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: horizScale(15)}}>
        <Text style={styles.TextMedium}>
          {item.id}. {item.text}
          {'\n'}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {button ? (
        <LinearGradient
          colors={[Colors.white, Colors.homeGradient]}
          style={styles.containerLinearGradient}>
          <FlatList
            data={data}
            renderItem={renderItem}
            ListHeaderComponent={() => (
              <>
                <View style={styles.headerView}>
                  <Back navigation={navigation} />
                </View>
                <Text style={styles.TextH3}>Accepts{'\n'}Terms of Service</Text>
                <Spacer height={8} />
                <Text style={styles.TextH5}>Last Update March 2023</Text>
                <Spacer height={20} />
              </>
            )}
            ListFooterComponent={() => <Spacer height={100} />}
          />
          <View style={styles.smallLinearGradient}>
            <Pressable
              onPress={() => {
                navigation.navigate('GenerateWorkmanId');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </LinearGradient>
      ) : (
        <>
          <View style={styles.headerView}>
            <Back navigation={navigation} />
          </View>
          <Text style={styles.TextH3}>Accepts{'\n'}Terms of Service</Text>
          <Spacer height={8} />
          <Text style={styles.TextH5}>Last Update March 2023</Text>
          <Spacer height={20} />
          <FlatList data={data} renderItem={renderItem} />
        </>
      )}
    </SafeAreaView>
  );
};

export default TermsAndCondition;
