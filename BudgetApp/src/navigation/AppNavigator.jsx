
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeView } from '../views/HomeView.jsx';
import { TransactionsView } from '../views/TransactionsView.jsx';
import { ReminderView } from '../views/ReminderView.jsx';
import { ChartView } from '../views/ChartView.jsx';
import { SideBar } from '../components/SideBar.jsx';
import { CategoryNavigator } from './CategoryNavigator.jsx';
import { textColor } from '../utils/globalStyle.js';


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
            <Drawer.Screen name="AllTransactions" component={TransactionsView} options={screenOptions} />
            <Drawer.Screen name="Reminders" component={ReminderView} options={screenOptions} />
            <Drawer.Screen name="Charts" component={ChartView} options={screenOptions} />

        </Drawer.Navigator>
    );
}