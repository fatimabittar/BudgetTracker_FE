import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { textColor } from '../utils/globalStyle';

export const ReportForWalletAmount = ({ walletAmount }) => {

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.label}>Current Amount In Wallet:</Text>
                <Text style={styles.value}>{walletAmount}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: textColor,
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        color: textColor,
    },

});
