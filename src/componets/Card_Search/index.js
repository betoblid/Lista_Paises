import style from "./CardSearch.module.css"


const CardSearch = ({populacao, capital, regiao, img, alt, pais, sub, level, currency, lang, fronteira}) => {


    return(
        <div className={style.container}> 
            <div>
                <img src={img} alt={alt} />
            </div>
            <div className={style.card_text}>
                <h2>{pais}</h2>
                <ul className={style.box}>
                    <li>
                        <ul>
                            <li><p><span>Native National: </span>{pais}</p></li>
                            <li><p><span>Population: </span>{populacao}</p></li>
                            <li><p><span>Region: </span>{regiao}</p></li>
                            <li><p><span>Sub Region: </span> {sub}</p></li>
                            <li><p><span>Capital: </span>{capital}</p></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><p><span>Top Level Domain</span>{level}</p></li>
                            <li><p><span>Currencies</span>{currency}</p></li>
                            <li><p><span>Languages: </span>{lang}</p></li>
                        </ul>
                    </li>
                </ul>
                <h3>Border Countries:{fronteira}
                </h3>
            </div>
        </div>
    )
}

export default CardSearch;