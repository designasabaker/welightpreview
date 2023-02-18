import { createContext, useContext } from 'react'

interface User {
    id: string
    name: string
    hasLoggedIn: boolean
}

export async function getServerSideProps(){
    return {
        props: {
            user: {
                userId: `ID`,
                username: `NAME`,
                hasLoggedIn: false
            }
        }
    }
}

const useUserController = (user: User) => {
    return {
        userId: user.id,
        username: user.name,
        hasLoggedIn: user.hasLoggedIn
    }
}

const UserContext = createContext<ReturnType<typeof useUserController>>({
    userId: "",
    username: "",
    hasLoggedIn: false
})

//@ts-ignore
export const UserProvider = ({ user, children }) => {
    return (
        <UserContext.Provider value={useUserController(user)}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext)
}