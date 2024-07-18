import tenis from '../assets/jordan.png'

const Conteudo = () => {
    return ( 
        <>
            <div className="conteudoCentro">
                <div className="coluna-conteudo">
                    <h1 className="h1">Melhores ofertas personalizados</h1>
                    <h2 className="h2">Queima de estoque Nike 🔥</h2>
                    <p className="texto1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta architecto dignissimos doloremque odio animi nesciunt, a repellat, ducimus labore, repudiandae sequi atque! Molestiae, corrupti? Itaque neque harum dolores rerum.</p>
                    <button id="butao-conteudo">Ver ofertas</button>
                </div>
                <div className="image">
                        <img src={tenis} alt="tenis do jordan" />
                </div>
              
                <div className="eclipse">
                    <div className="eclipse1"></div>
                    <div className="eclipse2"></div>
                    <div className="eclipse3"></div>
                    <div className="eclipse4"></div>
                </div>
            </div>
        </>
     );
}
 
export default Conteudo;