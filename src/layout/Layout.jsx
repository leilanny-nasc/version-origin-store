import Conteudo from "../components/Conteudo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Oferta from "../components/Oferta";
import ProdutosAlta from "../components/ProdutosAlta";


const Layout = ({children}) => {
    return (  
        <>
            <Header/>
            {children}
            <Conteudo/>
            <ProdutosAlta/>
            <Oferta/>
            <Footer/>
        </>
    );
}
 
export default Layout;