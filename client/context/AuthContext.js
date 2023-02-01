
import { createContext, useEffect, useState } from 'react';
import { request } from '../axios';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [appLoading, setAppLoading] = useState(true);
    
    const [loggedIn, setLoggedIn] = useState(false);

    const getLoggedIn = async () => {

        
        const res = await request.get("/isloggedin");
        
        setLoggedIn(res?.data || false);

        setAppLoading(false);

    };

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{
            loggedIn,
            getLoggedIn,
            setLoggedIn,
            appLoading
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;