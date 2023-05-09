
export const NavBar = () => {
  return (
    <div className="nav__content">
        <nav className="nav container animate__animated animate__fadeInUp" aria-label="barra de navegacion">
            <div className="nav__logo-enlaces">
              <div className="nav__logo">
                      <img src="/images/logo.svg" alt="logo" />
                
              </div>
                
                <div className="nav__enlaces">
                  <a href="">Consigue Amigos</a>
                  <a href="">Encuentra Proveedores & Servicios</a>
                  <a href="">Regístrate Gratis</a>
                 </div>
            </div>


            

            <div className="nav__buttons">
                <a href="">PUBLICA TU NEGOCIO</a>
                <button className="nav__button" aria-label="abrir menu desplegable">
                  <img src="/images/bars.svg" alt="icono para abrir menu" />
                </button>
            </div>
        </nav>
    </div>
  )
}
