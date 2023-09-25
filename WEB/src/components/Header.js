import imageHeader from "../images/image_header.jpg";

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__description">
          <div className="header__wrap">
            <h1 className="header__title">
              O uso da IA no controle e diagnóstico do Diabetes
            </h1>
            <p className="header__paragraph">
              Especificamente na esfera do diabetes (doença de incidência
              crescente que atinge 8,8% da população mundial e já representa 10%
              do gasto global em saúde), dados de bases populacionais,
              prontuários eletrônicos ou dispositivos vestíveis ou de
              monitorização contínua da glicemia podem fornecer substrato para
              algoritmos que executem diagnósticos mais precoces e acurados
            </p>
            <a className="header__link" href="#ia">
              Saiba mais...
            </a>
          </div>
        </div>
        <div
          className="header__image"
          /*           src={imageHeader}
          alt="imagem de uma mão de robô tocando linhas de fibra óptica" */
        ></div>
      </div>
    </header>
  );
}

export default Header;
