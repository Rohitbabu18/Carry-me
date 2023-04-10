import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Back from '../../Componets/Back';
import { Colors } from '../../../util/Colors';
import { Spacer, horizScale } from '../../../util/Layout';
import CustomImage from '../../../util/Images';
import { Dropdown } from 'react-native-element-dropdown';
import RadioForm from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-crop-picker';
import fontSize from '../../../util/Fonts';
import styles from '../../../util/Styles';

const rideTypeData = [
  { label: 'Bicycle', value: '1' },
  { label: 'Motorbike', value: '2' },
  { label: 'Car', value: '3' },
  { label: 'Tricycle', value: '4' },
  { label: 'Truck', value: '5' },
];
const luggageTypeData = [
  { label: '1x Luggage 30x30x30', value: '1' },
  { label: '2x Luggage 50x50x50', value: '2' },
  { label: '3x Luggage 60x60x60', value: '3' },
];
const destinationTypeData = [
  { label: 'Fixed', value: '1' },
  { label: 'Not Fixed', value: '2' },
  { label: 'Nearby', value: '3' },
];
const currencyData = [
  { label: '€ EURO', value: '1' },
  { label: '$ DOLLAR', value: '2' },
  { label: '₹ RUPEE', value: '3' },
];

const RegisterRide = ({ navigation }) => {
  //Ride Type Dropdown component start
  const [rideType, setRideType] = useState(null);
  const [rideTypeFocus, setRideTypeFocus] = useState(false);
  const renderRideLabel = () => {
    if (rideType || rideTypeFocus) {
      return (
        <Text
          style={[rStyle.label, rideTypeFocus && { color: Colors.mainColor }]}>
          Selected Ride Type
        </Text>
      );
    }
    return null;
  };
  //Ride Type Dropdown component end

  //Luggage Type Dropdown component start
  const [luggageType, setluggageType] = useState(null);
  const [luggageTypeFocus, setLuggageTypeFocus] = useState(false);
  const renderLuggageLabel = () => {
    if (luggageType || luggageTypeFocus) {
      return (
        <Text
          style={[rStyle.label, luggageTypeFocus && { color: Colors.mainColor }]}>
          Selected Luggage Type
        </Text>
      );
    }
    return null;
  };
  //Luggage Type Dropdown component end

  //Destination Type Dropdown component start
  const [destinationType, setDestinationType] = useState(null);
  const [destinationTypeFocus, setDestinationTypeFocus] = useState(false);
  const renderDestinationLabel = () => {
    if (destinationType || destinationTypeFocus) {
      return (
        <Text
          style={[
            rStyle.label,
            destinationTypeFocus && { color: Colors.mainColor },
          ]}>
          Selected Destination Type
        </Text>
      );
    }
    return null;
  };
  //Destination Type Dropdown component end

  //Currency Type Dropdown component start
  const [currencyType, setCurrencyType] = useState(null);
  const [currencyFocus, setCurrencyTypeFocus] = useState(false);
  const renderCurrencyLabel = () => {
    if (currencyType || currencyFocus) {
      return (
        <Text
          style={[rStyle.label, currencyFocus && { color: Colors.mainColor }]}>
          Selected Currency
        </Text>
      );
    }
    return null;
  };
  //Currency Type Dropdown component end

  //For Luggage radio button
  const [luggge, setLuggge] = useState(1);
  let luggage_props = [
    { label: 'Yes', value: 0 },
    { label: 'No', value: 1 },
  ];
  //For Price Radio Button
  const [fixedPrice, setFixedPrice] = useState(1);
  let fixed_price_props = [
    { label: 'Yes', value: 0 },
    { label: 'No', value: 1 },
  ];

  const [availableSeats, setAvailableSeats] = useState(1);
  const [fixedPriceAmt, setFixedPriceAmt] = useState(null);
  const [departureAddress, setDepartureAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState([]);

  const ImgaePick = () => {
    ImagePicker?.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setSelectedImage(image?.path);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar backgroundColor={Colors.background} />
      <View style={rStyle.headerView}>
        <Back navigation={navigation} />
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}
          onPress={() => {
            alert('Coming Soon');
          }}>
          <Image source={CustomImage.save} style={rStyle.saveIcon} />
        </Pressable>
      </View>
      <ScrollView>
        <View style={rStyle.formStyle}>
          <Spacer height={30} />
          <Image
            source={
              selectedImage?.length > 0
                ? { uri: selectedImage }
                : CustomImage.profile
            }
            style={rStyle.profileIcon}
          />
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.7 } : null)}
            onPress={() => {
              ImgaePick();
            }}>
            <View
              style={{
                position: 'absolute',
                padding: 7,
                borderRadius: 20,
                right: 150,
                bottom: 0,
                backgroundColor: Colors.mainColor,
              }}>
              <Image
                source={CustomImage.camera}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: 'white',
                }}
              />
            </View>
          </Pressable>
          <Spacer height={10} />
          <Text style={rStyle.uploadText}>Upload Photo</Text>
          <Spacer height={20} />
          <View style={rStyle.rideView}>
            {renderRideLabel()}
            <Dropdown
              style={[
                rStyle.dropdown,
                rideTypeFocus && { borderColor: Colors.mainColor },
              ]}
              placeholderStyle={rStyle.placeholderStyle}
              selectedTextStyle={rStyle.selectedTextStyle}
              itemTextStyle={rStyle.itemTextStyle}
              data={rideTypeData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!rideTypeFocus ? 'Select Ride Type' : '...'}
              value={rideType}
              onFocus={() => setRideTypeFocus(true)}
              onBlur={() => setRideTypeFocus(false)}
              onChange={item => {
                setRideType(item.value);
                setRideTypeFocus(false);
              }}
            />
          </View>
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Available Seats</Text>
            <View style={rStyle.incDec}>
              <Pressable
                style={({ pressed }) =>
                  pressed
                    ? { ...rStyle.incDecBtn, opacity: 0.7 }
                    : rStyle.incDecBtn
                }
                onPress={() => {
                  if (availableSeats > 1) {
                    setAvailableSeats(availableSeats => availableSeats - 1);
                  }
                }}>
                <Image style={rStyle.incDecIcon} source={CustomImage.minus} />
              </Pressable>
              <Text style={rStyle.availCount}>{availableSeats}</Text>
              <Pressable
                style={({ pressed }) =>
                  pressed
                    ? { ...rStyle.incDecBtn, opacity: 0.7 }
                    : rStyle.incDecBtn
                }
                onPress={() => {
                  setAvailableSeats(availableSeats => availableSeats + 1);
                }}>
                <Image style={rStyle.incDecIcon} source={CustomImage.plus} />
              </Pressable>
            </View>
          </View>
          <Spacer height={15} />
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Luggage</Text>
            <RadioForm
              formHorizontal={true}
              animation={false}
              buttonColor={Colors.mainColor}
              selectedButtonColor={Colors.mainColor}
              style={rStyle.radioBtnStyle}
              buttonSize={15}
              radio_props={luggage_props}
              initial={luggge}
              onPress={value => {
                setLuggge(value);
              }}
            />
          </View>
          <Spacer height={15} />
          {luggge === 0 && (
            <View style={rStyle.rideView}>
              {renderLuggageLabel()}
              <Dropdown
                style={[
                  rStyle.dropdown,
                  luggageTypeFocus && { borderColor: Colors.mainColor },
                ]}
                placeholderStyle={rStyle.placeholderStyle}
                selectedTextStyle={rStyle.selectedTextStyle}
                itemTextStyle={rStyle.itemTextStyle}
                data={luggageTypeData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!luggageTypeFocus ? 'Select Luggage Type' : '...'}
                value={luggageType}
                onFocus={() => setLuggageTypeFocus(true)}
                onBlur={() => setLuggageTypeFocus(false)}
                onChange={item => {
                  setluggageType(item.value);
                  setLuggageTypeFocus(false);
                }}
              />
            </View>
          )}
          <View style={rStyle.rideView}>
            {renderDestinationLabel()}
            <Dropdown
              style={[
                rStyle.dropdown,
                destinationTypeFocus && { borderColor: Colors.mainColor },
              ]}
              placeholderStyle={rStyle.placeholderStyle}
              selectedTextStyle={rStyle.selectedTextStyle}
              itemTextStyle={rStyle.itemTextStyle}
              data={destinationTypeData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={
                !destinationTypeFocus ? 'Select Destination Type' : '...'
              }
              value={destinationType}
              onFocus={() => setDestinationTypeFocus(true)}
              onBlur={() => setDestinationTypeFocus(false)}
              onChange={item => {
                setDestinationType(item.value);
                setDestinationTypeFocus(false);
              }}
            />
          </View>
          <View style={rStyle.rideView}>
            {renderCurrencyLabel()}
            <Dropdown
              style={[
                rStyle.dropdown,
                currencyFocus && { borderColor: Colors.mainColor },
              ]}
              placeholderStyle={rStyle.placeholderStyle}
              selectedTextStyle={rStyle.selectedTextStyle}
              itemTextStyle={rStyle.itemTextStyle}
              data={currencyData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!currencyFocus ? 'Select Currency' : '...'}
              value={currencyType}
              onFocus={() => setCurrencyTypeFocus(true)}
              onBlur={() => setCurrencyTypeFocus(false)}
              onChange={item => {
                setCurrencyType(item.value);
                setCurrencyTypeFocus(false);
              }}
            />
          </View>
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Fixed Price</Text>
            <RadioForm
              formHorizontal={true}
              animation={false}
              buttonColor={Colors.mainColor}
              selectedButtonColor={Colors.mainColor}
              style={rStyle.radioBtnStyle}
              buttonSize={15}
              radio_props={fixed_price_props}
              initial={fixedPrice}
              onPress={value => {
                setFixedPrice(value);
              }}
            />
          </View>
          <Spacer height={15} />
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Fixed Price Amount</Text>
            <TextInput
              placeholder="Please Enter Amount"
              placeholderTextColor={Colors.grey}
              inputMode="numeric"
              keyboardType="numeric"
              onChangeText={text => setFixedPriceAmt(text)}
              value={fixedPriceAmt}
              style={rStyle.inputStyle}
            />
          </View>
          <Spacer height={15} />
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Departure Address</Text>
            <TextInput
              placeholder="Please Enter Departure Address"
              placeholderTextColor={Colors.grey}
              onChangeText={text => setDepartureAddress(text)}
              value={departureAddress}
              style={rStyle.inputStyle}
            />
          </View>
          <Spacer height={15} />
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Destination Address</Text>
            <TextInput
              placeholder="Please Enter Destination Address"
              placeholderTextColor={Colors.grey}
              onChangeText={text => setDestinationAddress(text)}
              value={destinationAddress}
              style={rStyle.inputStyle}
            />
          </View>
          <Spacer height={15} />
          <View style={rStyle.radioView}>
            <Text style={rStyle.radioText}>Description</Text>
            <TextInput
              placeholder="Please Enter Description..."
              placeholderTextColor={Colors.grey}
              numberOfLines={4}
              multiline={true}
              textAlignVertical="top"
              onChangeText={text => setDescription(text)}
              value={description}
              style={rStyle.inputStyle}
            />
          </View>
          <Spacer height={30} />
          <Pressable
            onPress={() => {
              navigation.navigate('ImagePick');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
          <Spacer height={30} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterRide;

const rStyle = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: horizScale(10),
    paddingHorizontal: horizScale(10),
    fontSize: fontSize.regular,
  },
  availCount: {
    color: Colors.black,
    fontSize: fontSize.h5,
    fontWeight: 'bold',
  },
  incDec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: horizScale(25),
  },
  incDecBtn: {
    backgroundColor: Colors.mainColor,
    padding: horizScale(10),
    borderRadius: horizScale(25),
  },
  incDecIcon: {
    height: horizScale(15),
    width: horizScale(15),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  //Radio Button Style
  radioView: {
    marginHorizontal: horizScale(15),
  },
  radioText: {
    fontSize: fontSize.regular,
    fontWeight: '600',
    color: Colors.black,
    marginVertical: horizScale(15),
  },
  radioBtnStyle: {
    justifyContent: 'space-evenly',
  },
  //Dropdown Style Start
  itemTextStyle: {
    color: Colors.black,
  },
  rideView: {
    backgroundColor: Colors.white,
    padding: horizScale(15),
  },
  dropdown: {
    height: horizScale(55),
    borderColor: Colors.mainColor,
    borderWidth: 1,
    borderRadius: horizScale(8),
    paddingHorizontal: horizScale(8),
  },
  label: {
    position: 'absolute',
    left: horizScale(20),
    top: horizScale(7),
    zIndex: 999,
    paddingHorizontal: horizScale(3),
    fontSize: fontSize.das,
    color: Colors.grey,
    backgroundColor: Colors.white,
  },
  placeholderStyle: {
    fontSize: fontSize.regular,
    color: Colors.grey,
  },
  selectedTextStyle: {
    fontSize: fontSize.regular,
    color: Colors.black,
  },
  //Dropdown Style End
  uploadText: {
    color: Colors.black,
    alignSelf: 'center',
  },
  formStyle: {
    //form style here
  },
  profileIcon: {
    height: horizScale(100),
    width: horizScale(100),
    borderRadius: horizScale(50),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  saveIcon: {
    height: horizScale(25),
    width: horizScale(25),
    resizeMode: 'contain',
    marginHorizontal: horizScale(10),
  },
  headerView: {
    backgroundColor: Colors.background,
    paddingVertical: horizScale(20),
    paddingHorizontal: horizScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
