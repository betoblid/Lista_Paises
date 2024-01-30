import Card from "../Card";
import style from "./List.module.css";

export default function List({ dados }) {

    return (
        <div className={style.container}>
            {
                dados.map((dados) => <Card
                    population={dados.population.toLocaleString()}
                    capital={dados.capital}
                    region={dados.region}
                    thumb={dados.flags.png}
                    alt={dados.capital}
                    pais={dados.translations.pt} />)
            }
        </div>
    )
}