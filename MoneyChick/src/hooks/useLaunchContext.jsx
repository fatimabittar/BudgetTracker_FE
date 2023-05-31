import { useContext } from 'react'
import { LaunchContext } from '../context/LaunchContext'

export const useLaunchContext = () => {
    const context = useContext(LaunchContext)

    if (!context) {
        throw Error('useLaunchContext must be used inside an LaunchContextProvider')
    }
    return context
}