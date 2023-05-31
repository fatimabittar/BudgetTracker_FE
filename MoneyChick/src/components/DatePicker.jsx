import React, { useState } from 'react';
import { windowHeight } from '../utils/dimensions.js';
import { TouchableOpacity, Text, StyleSheet, Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from './Icon.jsx';

export const DatePicker = ({ date, onChange, children, style }) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowPicker(Platform.OS === 'ios');
        if (selectedDate) {
            onChange(selectedDate);
        }
    };


    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Select Date</Text>
            </View>
        );
    };

    const renderConfirmButton = () => {
        return (
            <TouchableOpacity style={styles.confirmButton} onPress={() => setShowPicker(false)}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        );
    };


    const showDatePicker = () => {
        setShowPicker(true);
    };
    return (
        <>
            <TouchableOpacity style={style} onPress={showDatePicker} >
                {children}
            </TouchableOpacity>
            {showPicker ? (
                <View style={styles.modalContainer}>
                    {renderHeader()}
                    <DateTimePicker
                        value={date || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                    {renderConfirmButton()}
                </View>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
    dateContainer: {
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
    dateIcon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    dateText: {
        width: '100%',
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#333',
        justifyContent: 'center',
    },
    dateTextContainer: {
        width: '100%',
    },
    datePlaceHolderText: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#666',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10,
    },
    header: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    confirmButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});
