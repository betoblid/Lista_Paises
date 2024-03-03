import style from "./Header.module.css"
import { UserContextStore } from "../../store/UserContext"
import { SunMoon, MoonStarIcon } from "lucide-react"
const Header = () => {

    const { theme, ChangedTheme } = UserContextStore()

    return (
        <header className={theme} id={style.container}>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
                <button
                    onClick={() => ChangedTheme()}
                    className={theme}>
                    {theme === "light" ? <SunMoon /> : <MoonStarIcon />}

                    {theme === "dark" ? "Tema Dark" : "Tema Light"}
                </button>
            </div>
        </header>
    );
}
export default Header;
