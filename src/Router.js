import { BrowserRouter, Routes, Route } from "react-router-dom";
//paginas usadas na aplicação...
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Erro from "./Pages/Erro404";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Search/:id" element={<Search />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

