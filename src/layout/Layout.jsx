import Conteudo from "../components/Conteudo";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = ({children}) => {
    return (  
        <>
            <Header/>
            {children}
            <Conteudo/>
            <Footer/>
        </>
    );
}
 
export default Layout;