import { createContext, useContext, useState } from "react";

const CurentUserContext = createContext({
    name :null,
    lastname : null,
    emailcon : null,
    token: null,
    setName : () => {}
});

const UserContextProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [emailcon, setEmailCon] = useState(null);
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
        <CurentUserContext.Provider value={{userId,name,lastname,emailcon,token,setUserId,setName,setLastname,setEmailCon,setApiToken }}>
            {children}
        </CurentUserContext.Provider>
    )
}

const UseCurentUser = () => useContext(CurentUserContext);

export {UserContextProvider, UseCurentUser}