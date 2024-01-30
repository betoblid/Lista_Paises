import BtnClose from "../../componets/Button"
import Container from "../../componets/Container"
import style from "./Erro.module.css"

export default function Erro() {

    return (
        <Container>
            <div className={style.cardErro}>
                <h1>Erro 404</h1>
                <p>erro essa pagina não existe...</p>
                <BtnClose key="btn#2" title="Voltar" />
            </div>
        </Container>
    )
}