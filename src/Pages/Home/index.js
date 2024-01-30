import Header from "../../componets/Header";
//exportando os components
import Container from "../../componets/Container"
import Search from "../../componets/Seach"

export default function Home(){
    
    return(
        <>
            <Header />
            <Container >
                <Search />
            </Container>
        </>
    )
}