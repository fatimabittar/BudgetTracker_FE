import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pie from 'react-native-pie';
import { textColor } from '../utils/globalStyle.js';

export const PieChart = ({ data, total }) => {
    const rupeesSymbol = '\u20B9';
    const gaugeText = `${total} ${rupeesSymbol}`;

    const datad = data.map((item) => ({
        value: item.totalExpenses,
        svg: {
          fill: item.categoryColor,
        },
        key: item.categoryId,
      }));
    return (
        <View style={styles.container}>
            <Pie
                radius={90}
                innerRadius={50}
                sections={datad}
                // dividerSize={2}
                backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
                <Text style={styles.gaugeText}>{gaugeText}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 175,
        alignItems: 'center',
        // marginTop: 10,
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: textColor,
        fontSize: 24,
        fontWeight: '500',
    },
});
