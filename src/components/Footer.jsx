import logo2 from "../assets/logo-footer.svg";
import face from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import tt from "../assets/twitter.svg";

const Footer = () => {

  return (
    <>
      <div className="footer">
        <div className="coluna">
          <p>
            <img className="logo2" src={logo2} alt="logo footer" />
          </p>
          <ul className="ul">
            <li className="textofooter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus adipisci praesentium aspernatur autem laudantium
              maiores quidem.
            </li>
            <li className="facebook">
              <img src={face} alt="" />
            </li>
            <li className="instagram">
              <img src={insta} alt="" />
            </li>
            <li className="twitter">
              <img src={tt} alt="" />
            </li>
          </ul>
          <hr />
          <div className="p">&copy;2024 Digital Store</div>
        </div>
        <div className="coluna1">
          <p className="informacao">Informação</p>
          <ul className="ul1">
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>
        <div className="coluna2">
          <p className="categoria">Categorias</p>
          <ul className="ul2">
            <li>Camisetas</li>
            <li>Calcas</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tenis</li>
          </ul>
        </div>
        <div className="coluna3">
          <p className="contato">Contato</p>
          <ul className="ul3">
            <li>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </li>
            <li>(85) 3051-3411</li>
          </ul>
        </div>
      </div>
    </>
  );
  
};

export default Footer; 

