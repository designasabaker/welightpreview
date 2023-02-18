import React, { createContext, useContext } from 'react'


type UserContextType = {
    hasLoggedIn: boolean,
    setHasLoggedIn: (hasLoggedIn: boolean) => void
}

export const UserContext = createContext<UserContextType>({
    hasLoggedIn: false,
    setHasLoggedIn(): void {}
})

//@ts-ignore
export const UserProvider = ({ children }) => {
    const [hasLoggedIn, setHasLoggedIn] = React.useState(false)
    return (
        <UserContext.Provider value={{hasLoggedIn, setHasLoggedIn}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext)
}