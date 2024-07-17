import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produto from "../pages/Produto";
import Categoria from "../pages/Categoria";
import Pedido from "../pages/Pedido";
import NotFound from "../pages/NotFound";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}>
                        <Route path="/produtos" element={<Produto/>}/>
                        <Route path="/categoria" element={<Categoria/>}/>
                        <Route path="/pedido" element={<Pedido/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default Paths;