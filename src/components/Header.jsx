import Logo from "./Logo";
import minicart from '../assets/mini-cart.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <header>
                <Logo/>
                <input className="barrapesquisa" type="text" placeholder="Pesquise Produtos..."/>
                <h2 className="texto"><a href="/">Cadastre-se</a></h2>
                <button className="botao">Entrar</button>
                <img className="carrinho" src={minicart} alt="" />

            </header>
            <div className="hearder">
                <nav>
                    <ul className="ul-header">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/produto'}>Produtos</Link></li>
                        <li><Link to={'/categoria'}>Categorias</Link></li>
                        <li><Link to={'/pedido'}>Meus Pedidos</Link></li>
                    </ul>
                </nav>
            </div>
        </>
     );
}
 
export default Header;