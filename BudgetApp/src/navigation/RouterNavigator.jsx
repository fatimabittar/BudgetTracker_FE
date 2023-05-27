import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLaunchContext } from '../hooks/useLaunchContext';
import { getLocalStorageItem, storeLocalStorageItem } from '../utils/localStorage';
import { LaunchView } from '../views/LaunchView';
import { LaunchNavigator } from './LaunchNavigator';

export const Routes = () => {

  const { user, setUser } = useAuthContext();
  const { launching, setLaunching } = useLaunchContext()

  useEffect(() => {
    // Check async storage if user is logged in
    const checkUserLoggedIn = (async function () {
      setLaunching(true);
      const res = await getLocalStorageItem('user');
      setUser(JSON.parse(res));

      setTimeout(() => {
        setLaunching(false)
      }, 2000);
    });
    checkUserLoggedIn()
  }, []);
  console.log(launching);
  return (
    <NavigationContainer>
      {launching ? <LaunchNavigator /> : user?.token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}