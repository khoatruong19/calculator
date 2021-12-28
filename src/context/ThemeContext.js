import { useContext, createContext, useState } from "react";
import { Theme } from "../helper/data";

const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [themeIndex,setThemeIndex] = useState(0) 
    const themeSelect = Theme[themeIndex]
    return (
        <ThemeContext.Provider value={{themeIndex, setThemeIndex, themeSelect}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)