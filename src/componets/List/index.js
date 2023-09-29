import Card from "../Card";
import style from "./List.module.css";

export default function List({tema, dados}){


    return(
        <div className={style.container}>
        
        {
            dados.map((dados) => <Card populacao={dados.population.toLocaleString()} capital={dados.capital} regiao={dados.region} img={dados.flags.png} alt={dados.capital} pais={dados.translations.pt} back={tema}/>)
        }
        </div>
    )
}