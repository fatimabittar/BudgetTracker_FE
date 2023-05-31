import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TransactionsList } from '../components/TransactionsList';
import { primaryColor } from '../utils/globalStyle';
import { BudgetList } from '../components/BudgetList';


const Tab = createMaterialTopTabNavigator();

export const BudgetsView = (props) => {
    console.log('what');
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15 },
            tabBarStyle: { backgroundColor: '#d9f3c0' },
            tabBarIndicatorStyle: { backgroundColor: primaryColor },
        }}
        initialRouteName='This Month'>
        <Tab.Screen name="History" children={(props) => <BudgetList {...props} type='history' />} />
        <Tab.Screen name="This Month"  children={(props) => <BudgetList  {...props} type='thisMonth' />} />
        {/* <Tab.Screen name="Year" children={(props) => <TransactionsList  {...props} type='year' />} /> */}
    </Tab.Navigator>)
};


// return (
        
//     <Tab.Navigator
//         tabBarOptions={{
//             labelStyle: { fontSize: 15 },
//             style: { backgroundColor: '#d9f3c0' },
//             indicatorStyle: { backgroundColor: primaryColor },
//         }}>
//         <Tab.Screen name="Last Month" children={(props) => <BudgetList {...props} type='day' />} />
//         <Tab.Screen name="This Month" children={(props) => <BudgetList  {...props} type='month' />} />
//         {/* <Tab.Screen name="Year" children={(props) => <TransactionsList  {...props} type='year' />} /> */}
//     </Tab.Navigator>
// );