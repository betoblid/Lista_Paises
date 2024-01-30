import React, { useEffect, useState } from "react"
import style from "./Seach.module.css"
import List from "../List"
import { UserContextStore } from "../../store/UserContext"
import { filtra } from "../../utils/FilterPais"


export default function Seach() {

    useEffect(() => {
        setNewList(filtra(""))
    }, [])

    const [newList, setNewList] = useState([])

    const FilterListExistent = (reference) => {
        setNewList(filtra(reference))
    }

    const { theme } = UserContextStore()

    return (
        <>
            <div className={style.container}>

                <form
                    onSubmit={(e) => e.preventDefault()}>


                    <label htmlFor="seach" className={theme === "dark" ? "dark_blue" : "light"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </label>
                    <input
                        placeholder="Digite o nome do pais desejado"

                        onChange={(e) => FilterListExistent(e.target.value)}
                        // onKeyDown={() => setSelectFilter("")}
                        className={theme === "dark" ? "dark_blue" : "light"}
                        id="seach"
                    />
                </form>

                <div>
                    <select
                        className={theme === "dark" ? "dark_blue" : "light"}

                        onChange={e => FilterListExistent(e.target.value)}
                    // onFocus={() => setSearch("")}

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

            <List dados={newList} />
        </>
    )
}