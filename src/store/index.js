import { useState } from "react"
import { Mycontext } from "./CreateContext"

export const ContextProvaider = ({ children }) => {

    const [theme, setTheme] = useState("light")
    const [ btnTheme, setBtnTheme ] = useState("light")

    const ChangedTheme = () => {

        theme === "light" ? setTheme("dark") : setTheme("light")
        btnTheme === "light" ? setBtnTheme("dark_blue") : setBtnTheme("light")
        return;
    }

    return (
        <Mycontext.Provider value={{
            theme,
            ChangedTheme,
            btnTheme,
            setBtnTheme
        }}>
            {children}

        </Mycontext.Provider>
    )
}