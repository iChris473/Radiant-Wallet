
import { createContext, useEffect, useState } from 'react';
import { request } from '../axios';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [appLoading, setAppLoading] = useState(true);
    
    const [loggedIn, setLoggedIn] = useState(false);

    const getLoggedIn = async () => {

        try {
            
            const res = await request.get("/isloggedin");
            
            setLoggedIn(res?.data || false);
    
            setAppLoading(false);
        } catch (error) {
            console.log(error)
        }

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