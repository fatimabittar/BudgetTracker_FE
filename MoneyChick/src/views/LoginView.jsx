import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { FormInput } from '../components/FormInput.jsx';
import { FormButton } from '../components/FormButton.jsx';
import { useAuthContext } from '../hooks/useAuthContext';
import { login } from "../helpers/apiHelper.js";


export const LoginView = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    console.log(email);
    console.log(password);
    console.log(error);
    const { saveUser } = useAuthContext();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/images/logo1.png')}
                style={styles.logo}
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                familyIcon="Fontisto"
                iconType="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                danger={error}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                danger={error}
            />

            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(
                    { email, password },
                    (data) => {
                        saveUser(data)
                        console.log('user logged in successfuly!', data)
                    },
                    (error) => setError(error)
                )}
            />
            {error && <Text style={styles.errorText}>Failed to login, please try again</Text>}
            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.forgotButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        resizeMode: 'center',
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    errorText: {
        color: '#ff0000',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 20,
    },
    forgotButtonText: {
        color: '#183c24',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#183c24',
        fontFamily: 'Roboto',
    },
});

