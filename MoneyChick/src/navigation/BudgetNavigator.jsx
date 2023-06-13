import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { textColor } from '../utils/globalStyle.js';
import { CategorySelectionView } from '../views/CategorySelectionView.jsx';
import { BudgetsView } from '../views/BudgetView.jsx';
import { EditBudgetView } from '../views/EditBudgetView.jsx';
import { AddBudgetView } from '../views/AddBudgetView.jsx';


const Stack = createNativeStackNavigator();

export const BudgetNavigator = () => {

    return (<Stack.Navigator>
        <Stack.Screen name="Budget List" component={BudgetsView} options={{ headerShown: false }} />
        <Stack.Screen name="Edit Budget" component={EditBudgetView} options={{
            headerStyle: {
                backgroundColor: '#d9f3c0',
            },
            headerTintColor: textColor,
            headerShadowVisible: false,
        }} />
        <Stack.Screen name="Add Budget" component={AddBudgetView} options={{
            headerStyle: {
                backgroundColor: '#d9f3c0',
            },
            headerTintColor: textColor,
            headerShadowVisible: false,
        }} />
        <Stack.Screen name="Select Category" children={(props) => <CategorySelectionView {...props} disableIncome disbaleHasBudget warnHasTransaction />} options={{
            headerStyle: {
                backgroundColor: '#d9f3c0',
            },
            headerTintColor: textColor,
            headerShadowVisible: false,
        }} />
    </Stack.Navigator>)
}