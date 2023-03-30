import React from 'react';
import { Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
const REFERENCE_WIDTH = 414;
const REFERENCE_HEIGHT = 736;

const { height, width } = Dimensions.get('window');

const horizScale = (val) => width * (val / REFERENCE_WIDTH);

const vertScale = (val) => height * (val / REFERENCE_HEIGHT);
const Spacer = (props) => (
    <View style={{ width: '100%', height: horizScale(props.height) }} />
);
Spacer.propTypes = {
    height: PropTypes.number,
};
export {
    Spacer,
    horizScale,
    vertScale,
}