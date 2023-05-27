import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext.jsx'

export const useLaunchContext = () => {
    const context = useContext(TransactionContext)

    if (!context) {
        throw Error('useTransactionContext must be used inside an TransactionContextProvider')
    }
    return context
}