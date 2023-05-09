import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import { Form } from "./Form";
import { Link as Links} from 'react-scroll';
import { FormContainer } from "./FormContainer";
import { FormContainerMovil } from "./FormContainerMovil";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarFormularioMovil, setMostrarFormularioMovil] = useState(false);


  const [mostrarEnlaces, setMostrarEnlaces] = useState(false);
  const [cursorSobreEnlaces, setCursorSobreEnlaces] = useState(false);
  const timeoutRef = useRef(null);

  const abrirFormulario = () => {
    setMostrarFormulario(true);
  }
  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  }


  const abrirFormularioMovil = () => {
    setMostrarFormularioMovil(true);
  }
  const cerrarFormularioMovil = () => {
      setMostrarFormularioMovil(false);
  }
 





  const cerrarMenu = () => {
    setMenuOpen(false)
  }











  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleMouseEnter = () => {
    setIsActive(true);
    setShowDiv(true);
  };
  const handleMouseEnter2 = () => {
    setIsActive2(true);
    setShowDiv2(true);
  };
  const handleMouseEnter3 = () => {
    setIsActive3(true);
    setShowDiv3(true);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setIsActive(false);
        setShowDiv(false);
      }, 300)
    );
  };
  const handleMouseLeave2 = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setIsActive2(false);
        setShowDiv2(false);
      }, 300)
    );
  };
  const handleMouseLeave3 = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setIsActive3(false);
        setShowDiv3(false);
      }, 300)
    );
  };


  
  
  
  





  const handleMostrarEnlaces = () => {
    clearTimeout(timeoutRef.current);
    setMostrarEnlaces(true);
  };

  const handleOcultarEnlaces = () => {
    timeoutRef.current = setTimeout(() => {
      if (!cursorSobreEnlaces) {
        setMostrarEnlaces(false);
      }
    }, 500); 
  };

  const handleCursorEnEnlaces = () => {
    setCursorSobreEnlaces(true);
  };

  const handleCursorFueraEnlaces = () => {
    setCursorSobreEnlaces(false);
    setMostrarEnlaces(false);
  };






  const handleSuperMenuEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  const handleSuperMenuEnter2 = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  const handleSuperMenuEnter3 = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleSuperMenuLeave = () => {
    setTimeoutId(
      setTimeout(() => {
        setIsActive(true);
        setShowDiv(true);
      }, 100)
    );
  };
  const handleSuperMenuLeave2 = () => {
    setTimeoutId(
      setTimeout(() => {
        setIsActive2(true);
        setShowDiv2(true);
      }, 100)
    );
  };
  const handleSuperMenuLeave3 = () => {
    setTimeoutId(
      setTimeout(() => {
        setIsActive3(true);
        setShowDiv3(true);
      }, 100)
    );
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  const location = useLocation(); 

  let logoUrl, linkColor, bgColor, elementClass, linkClass, menuMovil, call;
  
  if (location.pathname === '/') {
    menuMovil = '/images/menu-movil.svg'
    call = '/images/call.svg'
    logoUrl = '/images/Logo.svg';
    linkColor = '#333133';
    elementClass = 'element';
    // bgColor = '#BF83B3';
    bgColor = '#F8F8F5';
    linkClass = 'nav__link';
  } else {
    logoUrl = '/images/logo-menu.svg';
    linkColor = '#F4F4F4';
    elementClass = 'element active';
    bgColor = '#F8F8F5';
    linkClass = 'nav__link';
    menuMovil = '/images/menu-mobile2.svg'
    call = '/images/call2.svg'

  }
  

  const handleClick = (event) => {
    event.preventDefault();
    // setMenuOpen(false); 
  }

    

  return (
    <header>
      <nav
        className="nav"
        role="navigation"
        aria-label="Barra de navegación principal"
      >
        <button
          className="nav__menu-movil animate__animated animate__slideInUp"
          onClick={() => setMenuOpen(true)}
        >
          <img src={menuMovil} alt="menu movil" className="nav__movil-img" />
        </button>
        
        <NavLink to={"/"}>
          <img
            // src="/images/Logo.svg"
            src={logoUrl}
            alt="Logo"
            className="nav__logo "
            // animate__animated animate__slideInUp
          />
        </NavLink>

        <Links  
          className="nav__call"
          to="informacion-reservas"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img
            src={call}
            alt="call"
            className="nav__call-img animate__animated animate__slideInUp"
          />
        </Links>
        <ul className="nav__links ">
          <li>
            <a
              className={`nav__link${isActive ? " active" : ""}`}
              style={{ color: linkColor }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              TAMAULIPAS 80
            </a>
            {showDiv && (
              <div
                className="super-menu"
                onMouseEnter={handleSuperMenuEnter}
                onMouseLeave={handleSuperMenuLeave}
              >
                <LazyLoad>
                  <div className="super-menu1">
                    <img src="/images/super-menu1.jpg" alt="img" />
                    <p>Studio</p>
                    <p>DESDE $15,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu2">
                    <img src="/images/super-menu2.jpg" alt="img" />
                    <p>Una Habitación</p>
                    <p>DESDE $18,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu3">
                    <img src="/images/super-menu3.jpg" alt="img" />
                    <p>Dos Habitaciones</p>
                    <p>DESDE $20,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu4">
                    <img src="/images/super-menu4.jpg" alt="img" />
                    <p>Tres Habitaciones</p>
                    <p>DESDE $25,000 POR MES</p>
                  </div>
                </LazyLoad>
              </div>
            )}
          </li>

          <li>
            <a
              className={`nav__link${isActive2 ? " active2" : ""}`}
              style={{ color: linkColor }}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={handleClick}
            >
              BAJA CALIFORNIA 262
            </a>
            {showDiv2 && (
              <div
                className="super-menu"
                onMouseEnter={handleSuperMenuEnter2}
                onMouseLeave={handleSuperMenuLeave2}
              >
                {/* <div className="triangle"></div> */}
                <LazyLoad>
                  <div className="super-menu1">
                    <img src="/images/super-menu1.jpg" alt="img" />
                    <p>Studio</p>
                    <p>DESDE $15,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu2">
                    <img src="/images/super-menu2.jpg" alt="img" />
                    <p>Una Habitación</p>
                    <p>DESDE $18,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu3">
                    <img src="/images/super-menu3.jpg" alt="img" />
                    <p>Dos Habitaciones</p>
                    <p>DESDE $20,000 POR MES</p>
                  </div>
                </LazyLoad>
              </div>
            )}
          </li>

          <li>
            <a
              className={`nav__link${isActive3 ? " active3" : ""}`}
              style={{ color: linkColor }}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              onClick={handleClick}
            >
              AMORES 127
            </a>
            {showDiv3 && (
              <div
                className="super-menu-tercero"
                onMouseEnter={handleSuperMenuEnter3}
                onMouseLeave={handleSuperMenuLeave3}
              >
                {/* <div className="triangle"></div> */}
                <LazyLoad>
                  <div className="super-menu1">
                    <img src="/images/super-menu1.jpg" alt="img" />
                    <p>Studio</p>
                    <p>DESDE $15,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu2">
                    <img src="/images/super-menu2.jpg" alt="img" />
                    <p>Una Habitación</p>
                    <p>DESDE $18,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu3">
                    <img src="/images/super-menu3.jpg" alt="img" />
                    <p>Dos Habitaciones</p>
                    <p>DESDE $20,000 POR MES</p>
                  </div>
                </LazyLoad>

                <LazyLoad>
                  <div className="super-menu4">
                    <img src="/images/super-menu4.jpg" alt="img" />
                    <p>Tres Habitaciones</p>
                    <p>DESDE $25,000 POR MES</p>
                  </div>
                </LazyLoad>
              </div>
            )}
          </li>

          <li>
          <Links  
            to="informacion-reservas"
            spy={true}
            smooth={true}
            offset={0}
            className="nav__link-bookings nav__link-button"
            duration={500}
        >
        RESERVAR
          
        </Links>
           
          </li>
                {/* -------------------------  ABRE --------------------------- */}

          <button
            className="nav__menu-desktop"
            onClick={() => setMenuOpen(true)}
          >
            <img
              src="/images/menu-desktop.svg"
              alt="Menú"
              className="nav__menu"
            />
          </button>
        </ul>
      </nav>
      {menuOpen && (
        // <div className="nav__menu-open-container">
          <div className={`nav__menu-open animate__animated ${
            menuOpen ? "animate__fadeInRight" : "animate__fadeOutRight"}`}>
            <div className="nav__menu-open-content">
              <button
                className="nav__menu-movil "
                onClick={cerrarMenu}
              >
                <img
                  src="/images/close-menu-movil.svg"
                  alt="menu movil"
                  className="nav__movil-img"
                />
              </button>
              
              <a href="/" onClick={handleClick}>
                <img
                  src="/images/logo-menu-movil.svg"
                  alt="Logo"
                  className="nav__logo-dropdown-menu "
                />
              </a>
              <button className="nav__call">
                <img
                  src="/images/call-menu-movil.svg"
                  alt="call"
                  className="nav__call-img"
                onClick={ abrirFormularioMovil }
                />
              </button>
              {mostrarFormularioMovil && <FormContainerMovil onCloseMovil={cerrarFormularioMovil} />}
            </div>
          
            <div className="nav__menu-header">
              <div className="nav__menu-phone">
                <img src="/images/call-menu.svg" alt="call menu" />
                <p className="nav__menu-number">+52 55 4204 7091</p>
              </div>
              <div className="nav__menu-buttons">
                <button
                  className="nav__menu-button-call"
                  onClick={ abrirFormulario }
                >
                  
                  SOLICITAR LLAMADA
                </button>
                {mostrarFormulario && <FormContainer onClose={cerrarFormulario} />}

                {/* -------------------------  CIERRA --------------------------- */}
                <button
                  className="nav__close-menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <img
                    className="nav__close-image"
                    src="/images/close-menu.svg"
                    alt="Cerrar menú"
                  />
                </button>
              </div>
            </div>
            <LazyLoad>
              <div className="nav__menu-content">
                <div className="nav__menu-image">
                  <img src="/images/image-menu.png" alt="image" />
                </div>
          
                <div className="nav__menu-content-links">
                  <img src="/images/logo-menu.svg" alt="logo" />
                  <p>MENÚ</p>
                  <ul>
                    <li>
                      <NavLink
                        className="nav__menu-enlaces"
                        to={"/amenidades"}
                        onClick={handleLinkClick}
                      >
                        Amenidades
                      </NavLink>
                    </li>
                    <li
                      onMouseOver={handleMostrarEnlaces}
                      onMouseOut={handleOcultarEnlaces}
                    >
                      <a
                        className="nav__menu-enlaces"
                        href="#"
                        onClick={handleClick}
                      >
                        Departamentos
                      </a>
                      <div className="nav__enlaces-desplegales">
                        {mostrarEnlaces && (
                          <ul
                            onMouseOver={handleCursorEnEnlaces}
                            onMouseOut={handleCursorFueraEnlaces}
                          >
                            <li>
                              <Link className="link-1" href="/">
                                Tamaulipas 80 <span>DESDE $15,400 POR MES</span>
                              </Link>
                            </li>
                            <li>
                              <Link className="link-2" href="/">
                                Baja California 262{" "}
                                <span>DESDE $17,400 POR MES</span>
                              </Link>
                            </li>
                            <li>
                              <Link className="link-3" href="/">
                                Amores 127 <span>DESDE $21,400 POR MES</span>
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                    <li>
                      <NavLink
                        className="nav__menu-enlaces"
                        to={"/nosotros"}
                        onClick={handleLinkClick}
                      >
                        Nosotros
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav__menu-enlaces"
                        to={"/contacto"}
                        onClick={handleLinkClick}
                      >
                        Contacto
                      </NavLink>
                    </li>
                  </ul>
                </div>
          
                <div className="nav__menu-go-home-page" onClick={handleLinkClick}>
                  <NavLink to={"/"}>ir a página principal</NavLink>
                </div>
          
                <button className="nav__menu-button-call-movil">
                  SOLICITAR LLAMADA
                </button>
              </div>
            </LazyLoad>
          
            <div className="nav__menu-footer">
              <div className="nav__menu-a">
                <p>{new Date().getFullYear()} &copy; MY SUITES BY LA CONDESA</p>
          
                <NavLink
                  to={"/aviso-de-privacidad"}
                  className="nav__menu-enlace"
                  onClick={handleLinkClick}
                >
                  AVISO DE PRIVACIDAD
                </NavLink>
          
                <a
                  className="nav__menu-enlace nav__email-desktop"
                  href="/"
                  onClick={handleClick}
                >
                  info@mysuiteslacondesa.com
                </a>
                <a
                  className="nav__menu-enlace nav__email-movil"
                  href="/"
                  onClick={handleClick}
                >
                  info@CASASANRAFAEL.CO
                </a>
                <a className="nav__menu-enlace" href="/" onClick={handleClick}>
                  DEPARTAMENTOS CASA SAN RAFAEL
                </a>
              </div>
              <LazyLoad>
                <div className="nav__menu-img">
                  <a href="https://www.instagram.com" target="_blank">
                    <img src="/images/trip-advisor.svg" alt="icon" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <img src="/images/instagram-menu.svg" alt="icon" />
                  </a>
                </div>
              </LazyLoad>
            </div>
          </div>
        // </div>
      )}
    </header>
  );
}
