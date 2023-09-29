import { Link } from "react-router-dom"
import style from "./Card.module.css"

export default function Card({populacao, capital, regiao, img, alt, pais, back}){


    return(
        <Link to={`Search/${pais}`} className={style.link}>
            <div id={style.container}  className={back}>
                <div className={style.card_img}>
                    <img src={img} alt={alt} />
                </div>
                <div className={style.card_text}>
                    <h3>{pais}</h3>
                    <p><span>Population</span> {populacao}</p>
                    <p><span>Region</span> {regiao}</p>
                    <p><span>Capital</span> {capital}</p>
                </div>
            
            </div>
        </Link>
    )
}