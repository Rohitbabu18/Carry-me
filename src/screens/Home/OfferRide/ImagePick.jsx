import React, { useState } from 'react';
import { View, Button, Image, SafeAreaView, Pressable, Text, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../../../util/Styles';
import Back from '../../Componets/Back';
import { Spacer, horizScale } from '../../../util/Layout';
import CustomImage from '../../../util/Images';
import { Colors } from '../../../util/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const ImagePick = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('')
    const pickImage = () => {
        ImagePicker?.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image?.path);
            setImage({ uri: image?.path })
        });

    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Back navigation={navigation} color={Colors.black} />
            </View>
            <ScrollView>
                <Spacer height={8} />
                <View style={styles.rowSpaceEvenly}>
                    <Text style={styles.headingText}>Preview</Text>
                    <Pressable style={styles.selected}
                        onPress={() => {
                            pickImage()
                        }}
                    >
                        <Entypo size={25} color={Colors.white} style={{}} name="basecamp" />
                        <Text style={styles.selectedText}>Pick Image</Text>
                    </Pressable>
                </View>

                <Spacer height={40} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {image !== null ?
                        <Image source={image} style={styles.imageBig} />
                        : <Image source={CustomImage.previewImage} style={{ ...styles.imageBig, tintColor: Colors.mainColor }} />}
                </View>
                <FloatingLabelInput
                    label={'Image Description...'}
                    value={description}
                    multiline
                    onChangeText={value => setDescription(value)}
                    customLabelStyles={styles.floatinglabelstyle}
                    labelStyles={styles.labelstyle}
                    inputStyles={styles.floatinginputstyle}
                    containerStyles={{
                        ...styles.floatingcontainerstyle,
                        borderBottomColor: description !== '' ? Colors.mainColor : Colors.darkgrey,
                    }}
                />
                <Spacer height={40} />
                <View style={styles.rowSpaceEvenly}>
                    <Pressable
                        onPress={() => {
                            navigation.goBack()
                        }}
                        style={{ ...styles.unSelected, paddingVertical: horizScale(12) }}>

                        <Text style={styles.unSelectedText}>Change</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            alert('coming soon')
                        }}
                        style={{ ...styles.selected, paddingVertical: horizScale(12) }}>

                        <Text style={styles.selectedText}>Continue</Text>
                    </Pressable>
                </View>
                <Spacer height={80} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ImagePick;
