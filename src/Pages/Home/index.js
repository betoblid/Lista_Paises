import Header from "../../componets/Header";
//exportando os components
import Container from "../../componets/Container"
import Search from "../../componets/Seach"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import List from "../../componets/List";
import { filtra } from "../../utils/FilterPais";

export default function Home() {

    const [searchParams] = useSearchParams()

    const [listPaises, setListPaises] = useState([])

    const HanleFilter = searchParams.get("filter") ?? ''

    useEffect(() => {
        setListPaises(filtra(HanleFilter))
    }, [HanleFilter])
    return (
        <>
            <Header />
            <Container >
                <Search />

                <List dados={listPaises} />
            </Container>
        </>
    )
}