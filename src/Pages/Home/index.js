import Header from "../../componets/Header";

import { ExportContext } from "../../Context/Context";

//exportando os components
import Container from "../../componets/Container"
import Search from "../../componets/Seach"

export default function Home(){

    const {theme} = ExportContext();
    
    return(
        <>
            <Header />
            <Container tema={theme}>
                <Search tema={theme}/>

            </Container>
        </>
    )
}