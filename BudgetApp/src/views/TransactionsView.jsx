import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TransactionsList } from '../components/TransactionsList';
import { primaryColor } from '../utils/globalStyle';


const Tab = createMaterialTopTabNavigator();

export const TransactionsView = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 15 },
                style: { backgroundColor: '#d9f3c0' },
                indicatorStyle: { backgroundColor: primaryColor },
            }}>
            <Tab.Screen name="Day" children={(props) => <TransactionsList {...props} type='day' />} />
            <Tab.Screen name="Month" children={(props) => <TransactionsList  {...props} type='month' />} />
            <Tab.Screen name="Year" children={(props) => <TransactionsList  {...props} type='year' />} />
        </Tab.Navigator>
    );
};
