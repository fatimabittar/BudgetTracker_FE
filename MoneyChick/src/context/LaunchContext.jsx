import { createContext, useState } from 'react'

export const LaunchContext = createContext();

export const LaunchContextProvider = ({ children }) => {
    const [launching, setLaunching] = useState(true);

    return (
        <LaunchContext.Provider value={{ launching, setLaunching }}>
            {children}
        </LaunchContext.Provider >
    )
}
