import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaunchView } from '../views/LaunchView.jsx';
import { CategoryView } from '../views/CategoryView.jsx';


const Stack = createNativeStackNavigator();

export const LaunchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={LaunchView} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}