import Conteudo from "../components/Conteudo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Oferta from "../components/Oferta";


const Layout = ({children}) => {
    return (  
        <>
            <Header/>
            {children}
            <Conteudo/>
            <Oferta/>
            <Footer/>
            
        </>
    );
}
 
export default Layout;