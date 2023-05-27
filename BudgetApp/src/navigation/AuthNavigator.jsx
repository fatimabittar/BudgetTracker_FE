import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginView } from '../views/LoginView.jsx';
import { SignupView } from '../views/SignupView.jsx';


const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginView}
                options={{ title: 'hala bel 7abayeb' }}
            />
            <Stack.Screen name="Signup" component={SignupView} />
            <Stack.Screen name="ForgetPassword" component={LoginView} />
        </Stack.Navigator>
    )
}