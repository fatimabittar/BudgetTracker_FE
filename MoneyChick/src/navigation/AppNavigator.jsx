
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeView } from '../views/HomeView.jsx';
import { TransactionNavigator } from './TransactionNavigator.jsx';
import { SideBar } from '../components/SideBar.jsx';
import { CategoryNavigator } from './CategoryNavigator.jsx';
import { textColor } from '../utils/globalStyle.js';
import { BudgetNavigator } from './BudgetNavigator.jsx';


const Drawer = createDrawerNavigator();

export const AppNavigator = () => {

    const screenOptions = {
        headerStyle: {
            backgroundColor: '#d9f3c0',
        },
        headerTintColor: textColor,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerShadowVisible: false,
    };


    return (
        <Drawer.Navigator
            initialRouteName="HomeView"
            useLegacyImplementation
            drawerContent={(props) => <SideBar {...props}
            />}>
            <Drawer.Screen name="Home" component={HomeView} options={screenOptions} />
            <Drawer.Screen name="Categories" component={CategoryNavigator} options={screenOptions} />
            <Drawer.Screen name="All Transactions" component={TransactionNavigator} options={screenOptions} />
            <Drawer.Screen name="Budgets" component={BudgetNavigator} options={screenOptions} />

        </Drawer.Navigator>
    );
}