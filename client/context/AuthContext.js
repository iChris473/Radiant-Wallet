
import { createContext, useEffect, useState } from 'react';
import { request } from '../axios';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [appLoading, setAppLoading] = useState(true);
    
    const [loggedIn, setLoggedIn] = useState(true);

    const getLoggedIn = async () => {

        setAppLoading(false);

        const res = await request.get("/isloggedin");

        setLoggedIn(res?.data || false);

    };

    useEffect(() => {
        // getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{
            loggedIn,
            getLoggedIn,
            appLoading
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;