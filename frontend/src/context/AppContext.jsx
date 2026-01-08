import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { useState } from "react";
export const AppContext = createContext()

const AppContextProvider = (props) => {
    const[token,setToken] = useState(
        localStorage.getItem("token") ? localStorage.getItem("token") : false
    );
    const currencySymbol = '₹'

    const value = {
        doctors,
        currencySymbol,
        token,
        setToken,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider