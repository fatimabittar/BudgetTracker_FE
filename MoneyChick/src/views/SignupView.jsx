import React, { useState } from 'react';
import { FormInput } from '../components/FormInput.jsx';
import { FormButton } from '../components/FormButton.jsx';
import { useAuthContext } from '../hooks/useAuthContext';
import { signup } from "../helpers/apiHelper.js";
import { ScrollView, Text, StyleSheet, Image } from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons.js';

export const SignupView = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { saveUser } = useAuthContext();


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/logo1.png')}
        style={styles.logo}
      />
      <FormInput
        labelValue={name}
        onChangeText={(userName) => setName(userName)}
        placeholderText="Name"
        iconType="user"
        iconComponent={<Icon name="" size={20} color="#333" />}
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
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => signup({ name, email, password },
          (data) => saveUser(data),
          (error) => setError(error))}
      />
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
    marginBottom: 10,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#183c24',
    fontFamily: 'Roboto',
  },
});
