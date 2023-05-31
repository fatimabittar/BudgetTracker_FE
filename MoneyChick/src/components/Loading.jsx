import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { primaryColor } from '../utils/globalStyle.js';

export const Loading = ({ message }) => {
    return (
        <View>
            <ActivityIndicator size="large" color={primaryColor} />
            {message !== undefined && (
                <Text style={{ color: '#A5A5A5' }}>{message}</Text>
            )}
        </View>
    );
};
