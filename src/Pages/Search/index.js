import { useParams } from "react-router-dom";
import db from "../../dados/data.json"
import ContainerSearch from "../../componets/Container_search";
import CardSearch from "../../componets/Card_Search";
import Header from "../../componets/Header";
import { ExportContext } from "../../Context/Context";

export function filtra(dados, id) {

    return dados.filter((dado) => dado.translations.pt.toLowerCase().includes(id.toLowerCase()) || dado.region.toLowerCase().includes(id.toLowerCase()))
}


export default function Search() {

    //pegando id do card e passando para o filtro apos a function achar o card volta um array e com map e montado um card com as informações achadas
    const { id } = useParams()
    const filtro = filtra(db, id);

    //pegando o dado do context e passando para header
    const {theme} = ExportContext()



    return (
        <>
            <Header />

            <ContainerSearch tema={theme}>

                {

                    filtro.map((dados, index) => <CardSearch key={index} populacao={dados.population.toLocaleString()} capital={dados.capital} regiao={dados.region} img={dados.flags.png} alt={dados.capital} pais={dados.translations.pt} currency={dados.currencies[0].code} lang={dados.languages[0].name}
                        level={dados.topLevelDomain} sub={dados.subregion} fronteira={dados.borders.map(dado => dado === undefined ? [] : <span>{dado}</span>)} />)

                }
            </ContainerSearch>

        </>
    )
}