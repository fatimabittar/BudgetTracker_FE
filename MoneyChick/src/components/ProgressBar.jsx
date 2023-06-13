import { primaryColor, secondaryColor } from "../utils/globalStyle";
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ProgressBar = ({ done, total }) => {
    const progress = done / total;
    let progressColor;

    if (progress >= 1) {
        progressColor = 'red';
    } else if (progress >= 0.8) {
        progressColor = 'orange';
    } else if (progress >= 0.6) {
        progressColor = 'yellow';
    } else {
        progressColor = primaryColor;
    }
    return (
        <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress * 100}%`, backgroundColor: progressColor }]}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        width: '100%',
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 2,
        marginTop: 5,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#ccc',
        borderRadius: 2,
    },
    progressFill: {
        height: '100%',
        borderRadius: 2,
    },
});