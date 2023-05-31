import { createContext, useReducer, useEffect, useState } from 'react'
import { getLocalStorageItem, storeLocalStorageItem } from '../utils/localStorage';

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            saveUser: (user) => { setUser(user); storeLocalStorageItem('user', JSON.stringify(user)) },
        }}>
            {children}
        </AuthContext.Provider>
    )
}
