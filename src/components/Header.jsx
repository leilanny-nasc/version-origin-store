import Logo from "./Logo";
import minicart from '../assets/mini-cart.svg'

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
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Categorias</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </nav>
            </div>
        </>
     );
}
 
export default Header;