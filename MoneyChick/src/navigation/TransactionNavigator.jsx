import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { textColor } from '../utils/globalStyle.js';
import { TransactionModal } from '../components/TransactionModal.jsx';
import { TransactionsView } from '../views/TransactionsView.jsx';
import { EditTransactionView } from '../views/EditTransactionView.jsx';
import { AddTransactionView } from '../views/AddTransactionView.jsx';
import { CategorySelectionView } from '../views/CategorySelectionView.jsx';


const Stack = createNativeStackNavigator();

export const TransactionNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Transaction View" component={TransactionsView} options={{ headerShown: false }} />
            <Stack.Screen name="Transaction Modal" component={TransactionModal} options={{
                title: ' View Transaction',
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="Edit Transaction" component={EditTransactionView} options={{
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="Add Transaction" component={AddTransactionView} options={{
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="Select Category" component={CategorySelectionView} options={{
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />

        </Stack.Navigator>
    )
}