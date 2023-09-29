import React, { createContext, useContext, useState } from "react"


const Mycontext = createContext()

//essa function e apenas para exporta o context de maneira facil e simples
export function ExportContext() {

    return useContext(Mycontext)
}



export const ContextProvaider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const functionSetTheme = () => {

        return theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <Mycontext.Provider value={{
            theme,
            functionSetTheme
        }}>

            {children}

        </Mycontext.Provider>
    )
}