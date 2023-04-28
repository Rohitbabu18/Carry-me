import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const AddRideTab = ({navigation}) => {
  useEffect(() => {
    navigation.replace('RegisterRide');
  }, []);

  return null;
};

export default AddRideTab;
