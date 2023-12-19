import { createContext, useContext, useState } from "react";

const CurentUserContext = createContext({
    userId :null,
    token: null,
    setUserId : () => {},
    setApiToken : () => {}
});

const UserContextProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("USER_TOKEN") || "");

    const setApiToken = (token) => {
        if(token){
            localStorage.setItem("USER_TOKEN", token);
        }else{
            localStorage.removeItem("USER_TOKEN");
        }

        setToken(token);
    }

    return (
        <CurentUserContext.Provider value={{userId,setUserId,token,setApiToken }}>
            {children}
        </CurentUserContext.Provider>
    )
}

const UseCurentUser = () => useContext(CurentUserContext);

export {UserContextProvider, UseCurentUser}