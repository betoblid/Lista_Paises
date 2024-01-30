import { Link } from "react-router-dom"
import style from "./Card.module.css"
import { UserContextStore } from "../../store/UserContext"

export default function Card({ population, capital, region, thumb, alt, pais }) {

    const { btnTheme } = UserContextStore();

    return (
        <Link
            to={`Search/${pais}`}
            title="Card de paises"
            className={style.link}>
            <div id={style.container} className={btnTheme}>
                <div className={style.card_img}>
                    <img
                        src={thumb}
                        alt={alt}
                        title={alt} />
                </div>
                <div className={style.card_text}>
                    <h3>{pais}</h3>
                    <p><span>Population:</span> {population}</p>
                    <p><span>Region:</span> {region}</p>
                    <p><span>Capital:</span> {capital}</p>
                </div>

            </div>
        </Link>
    )
}