import { UserContextStore } from "../../store/UserContext"
import style from "./Container.module.css"

export default function Container({ children }) {

    const { theme } = UserContextStore()

    return (
        <section
            className={`${theme} ${style.container}`}>
            {children}
        </section>
    )
}