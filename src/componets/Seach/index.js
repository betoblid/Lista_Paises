import React from "react"
import style from "./Seach.module.css"
import { UserContextStore } from "../../store/UserContext"
import { useSearchParams } from "react-router-dom"
import { debounce } from "../../utils/useDebounce"


export default function Seach() {

    const [, setSearchParams] = useSearchParams()

    const HandleInputValue = (e) => {

        debounce(setSearchParams((params) => {
            params.set("filter", e)
            return params
        }), 2000)

    }
    const { theme } = UserContextStore()
    return (
        <>
            <div className={style.container}>

                <form
                >
                    <label htmlFor="seach" className={theme === "dark" ? "dark_blue" : "light"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </label>
                    <input
                        placeholder="Digite o nome do pais desejado"
                        onChange={(e) => HandleInputValue(e.target.value)}
                        className={theme === "dark" ? "dark_blue" : "light"}
                        id="seach"
                    />
                </form>

                <div>
                    <select
                        className={theme === "dark" ? "dark_blue" : "light"}
                        onChange={e => HandleInputValue(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>

        </>
    )
}