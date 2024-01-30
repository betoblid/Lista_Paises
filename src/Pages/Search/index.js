import { useParams } from "react-router-dom";
import CardSearch from "../../componets/Card_Search";
import Header from "../../componets/Header";
import Container from "../../componets/Container";
import BtnClose from "../../componets/Button";
import { filtra } from "../../utils/FilterPais";

export default function Search() {
    //pegando id do card e passando para o filtro apos a function achar o card volta um array e com map e montado um card com as informações achadas
    const { id } = useParams()
    const newList = filtra(id);

    return (
        <>
            <Header />
            <Container>
                <div style={{paddingBlock: 20, marginLeft: 20}}>
                    <BtnClose key="back#21" title="Voltar"/>
                </div>        
                {
                    newList.map((dados, index) => <CardSearch
                        key={index}
                        population={dados.population.toLocaleString()}
                        capital={dados.capital}
                        region={dados.region}
                        thumb={dados.flags.png}
                        alt={dados.capital}
                        pais={dados.translations.pt}
                        currency={dados.currencies[0].code}
                        lang={dados.languages[0].name}
                        level={dados.topLevelDomain}
                        sub={dados.subregion}
                        border={dados.borders.map(dado => dado === undefined ? [] : <span>{dado}</span>)} />)
                }
            </Container>
        </>
    );
}