import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/dimensions.js';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto.js';

export const FormInput = ({ labelValue, placeholderText, iconType, familyIcon, danger = false, ...rest }) => {
    const renderIcon = () => {
        if (familyIcon === 'Fontisto') {
            return <Fontisto name={iconType} size={25} color={danger ? 'red' : "#666"} />;
        } else {
            return <AntDesign name={iconType} size={25} color={danger ? 'red' : "#666"} />;
        }
    };
    return (
        <View style={[styles.inputContainer, danger ? { borderColor: 'red' } : {}]}>
            <View style={styles.iconStyle}>{renderIcon()}</View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});
