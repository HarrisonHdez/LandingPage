// import { useState } from "react";

// export const NavBar = () => {
//   const [isDivVisible, setIsDivVisible] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const handleCloseMenu = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsDivVisible(false);
//     }, 500);
//   };

//   const handleDivToggle = () => {
//     if (isDivVisible) {
//       handleCloseMenu();
//     } else {
//       setIsDivVisible(true);
//       setIsClosing(false);
//     }
//   };

//   return (
//     <div className="nav__content">
//       <nav className="nav container">
//         <div className="nav__logo-enlaces">
//           <div className="nav__logo">
//             <img src="/images/logo.svg" alt="logo" />
//           </div>

//           <div className="nav__enlaces">
//             <a href="">Consigue Amigos</a>
//             <a href="">Encuentra Proveedores & Servicios</a>
//             <a href="">Regístrate Gratis</a>
//           </div>
//         </div>

//         <div className="nav__buttons">
//           <a href="">PUBLICA TU NEGOCIO</a>
//           <button className="nav__button" onClick={handleDivToggle}>
//             {isDivVisible ? (
//               <img src="/images/closenav.svg" alt="icono para cerrar menu" />
//             ) : (
//               <img src="/images/bars.svg" alt="icono para abrir menu" />
//             )}
//           </button>
//         </div>
//       </nav>
//       {isDivVisible && (
//         <div
//           className={`nav__dropdown animate__animated ${
//             isClosing ? "animate__fadeOutRight" : "animate__fadeInRight"
//           }`}
//         >
//           <p>Contenido del div aquí</p>
//         </div>
//       )}
//     </div>
//   );
// }




























import { useState } from "react";

export const NavBar = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDivVisible(false);
    }, 500);
  };

  const handleDivToggle = () => {
    if (isDivVisible) {
      handleCloseMenu();
    } else {
      setIsDivVisible(true);
      setIsClosing(false);
    }
  };

  return (
    <div className="nav__content">
      <nav
        className="nav container animate__animated animate__fadeInUp"
        aria-label="barra de navegacion"
      >
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

          <button
            className="nav__button"
            aria-label="abrir/cerrar menu desplegable"
            onClick={handleDivToggle}
          >
            <img src="/images/bars.svg" alt="icono para abrir/cerrar menu" />
          </button>
        </div>
      </nav>

      {isDivVisible && (
        <div
          className={`nav__dropdown animate__animated ${
            isClosing ? "animate__fadeOutRight" : "animate__fadeInRight"
          }`}
        >
          <button
            className="nav__button2"
            aria-label="abrir/cerrar menu desplegable"
            onClick={handleCloseMenu}
          >
            <img
              src="/images/closenav.svg"
              alt="icono para abrir/cerrar menu"
            />
          </button>
          <div className="menu__desplegable">
            <a href="">Inicio</a>
            <a href="">Servicios</a>
            <a href="">Club</a>
            <a href="">Quienes Somos</a>
            <a href="">Contacto</a>
            <div className="menu__desplegable-image">
              <img src="/images/logo.svg" alt="logo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




// import { useState } from "react";

// export const NavBar = () => {
//   const [isDivVisible, setIsDivVisible] = useState(false);
//   const [isOpening, setIsOpening] = useState(false);

//   const handleDivToggle = () => {
//     setIsOpening(!isDivVisible);
//     setIsDivVisible(!isDivVisible);
//   };

//   return (
//     <div className="nav__content">
//       <nav
//         className="nav container animate__animated animate__fadeInUp"
//         aria-label="barra de navegacion"
//       >
//         <div className="nav__logo-enlaces">
//           <div className="nav__logo">
//             <img src="/images/logo.svg" alt="logo" />
//           </div>

//           <div className="nav__enlaces">
//             <a href="">Consigue Amigos</a>
//             <a href="">Encuentra Proveedores & Servicios</a>
//             <a href="">Regístrate Gratis</a>
//           </div>
//         </div>

//         <div className="nav__buttons">
//           <a href="">PUBLICA TU NEGOCIO</a>

//           <button
//             className="nav__button"
//             aria-label="abrir/cerrar menu desplegable"
//             onClick={handleDivToggle}
//           >
//             <img src="/images/bars.svg" alt="icono para abrir/cerrar menu" />
//           </button>
//         </div>
//       </nav>

//       {isDivVisible && (
//         <div
//           className={`nav__dropdown animate__animated ${
//             isOpening ? "animate__fadeInRight" : "animate__fadeOutRight"
//           }`}
//         >
//           <button
//             className="nav__button2"
//             aria-label="abrir/cerrar menu desplegable"
//             onClick={() => {
//               setIsOpening(false);
//               setTimeout(() => setIsDivVisible(false), 500);
//             }}
//           >
//             <img
//               src="/images/closenav.svg"
//               alt="icono para abrir/cerrar menu"
//             />
//           </button>
//           <p>Contenido del div aquí</p>
//         </div>
//       )}
//     </div>
//   );
// };
