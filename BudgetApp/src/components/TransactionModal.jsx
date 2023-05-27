import React from 'react'
import { View } from 'react-native'

export const TransactionModal = () => {

    return (
        <View>
            <TouchableOpacity
                onPress={() => deleteTransaction(transaction._id)}
                style={styles.iconContainer}
            >
                <Icon name="close-circle-outline" color={transaction.color} />
            </TouchableOpacity>
            
        </View>
    )
}
