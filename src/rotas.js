import { BrowserRouter, Routes, Route } from "react-router-dom";
//paginas usadas na aplicação...
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Erro from "./Pages/Erro404";
import { ContextProvaider } from "./Context/Context";

export default function Rotas(){


    return(
        <BrowserRouter>
        <ContextProvaider>
            <Routes>
                
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Search/:id" element={<Search />} />
                    <Route path="*" element={<Erro />} />
                
            </Routes>
        </ContextProvaider>
        </BrowserRouter>
    )
}

