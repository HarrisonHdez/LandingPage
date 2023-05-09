// import { useState } from "react";

// export const Accordion = () => {

//     const [activeIndex, setActiveIndex] = useState(null);

//     const handleClick = (index) => {
//       setActiveIndex(index === activeIndex ? null : index);
//     }
  
//     return (
//         <div>
//           <h2>Accordion with symbols</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           <button className={`accordion ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>Section 1</button>
//           <div className="panel" style={{maxHeight: activeIndex === 1 ? "1000px" : "0"}}>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           </div>
    
//           <button className={`accordion ${activeIndex === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>Section 2</button>
//           <div className="panel" style={{maxHeight: activeIndex === 2 ? "1000px" : "0"}}>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           </div>
    
//           <button className={`accordion ${activeIndex === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>Section 3</button>
//           <div className="panel" style={{maxHeight: activeIndex === 3 ? "1000px" : "0"}}>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           </div>
//         </div>
//       );
// }










// import { useState } from 'react';

// const sections = [
//   { title: 'Section 1', content: 'Lorem ipsum dolor sit amet', contentHeight: 100 },
//   { title: 'Section 2', content: 'Lorem ipsum dolor sit amet', contentHeight: 150 },
//   { title: 'Section 3', content: 'Lorem ipsum dolor sit amet', contentHeight: 200 },
// ];

// export const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div>
//       {sections.map((section, index) => (
//         <div key={index}>
//           <button className={`accordion ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
//             {section.title}
//           </button>
//           <div className="panel" style={{ maxHeight: activeIndex === index ? `${section.contentHeight}px` : '0px' }}>
//             {section.content}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };























// import { useState } from 'react';

// const sections = [

//   { title: '¿Qué es Yuppipets?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contentHeight: 100 },

//   { title: '¿Puedo registrar a más de una mascota?', content: 'Por supuesto. Si eres un humano al que adoran más de una mascota en casa puedes registrarlos felizmente en nuestra comunidad.', contentHeight: 150 },

//   { title: '¿Qué es el Club Yuppipets?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contentHeight: 200 },

//   { title: '¿Para que sirve la Yuppicard?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contentHeight: 200 },

//   { title: '¿Cómo puedo solicitar una placa para mi mascota?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', contentHeight: 200 },
// ];

// export const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion__content">
//       {sections.map((section, index) => (
//         <div key={index}>
//           <button className={`accordion ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
//             {section.title}
//           </button>
//           <div className="panel" style={{ maxHeight: activeIndex === index ? `${section.contentHeight}px` : '0px' }}>
//             {section.content}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };



import { useState } from 'react';

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion__content">

      <div>
        <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)} aria-label="abrir contenido de preguntas y respuestas">
        ¿Qué es Yuppipets?
        </button>
        <p className="panel" style={{ maxHeight: activeIndex === 0 ? '50px' : '0px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div>
        <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)} aria-label="abrir contenido de preguntas y respuestas">
        ¿Puedo registrar a más de una mascota?
        </button>
        <p className="panel" style={{ maxHeight: activeIndex === 1 ? '50px' : '0px' }}>
        Por supuesto. Si eres un humano al que adoran más de una mascota en casa puedes registrarlos felizmente en nuestra comunidad.
        </p>
      </div>
      <div>
        <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)} aria-label="abrir contenido de preguntas y respuestas">
        ¿Qué es el Club Yuppipets?
        </button>
        <p className="panel" style={{ maxHeight: activeIndex === 2 ? '50px' : '0px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <button className={`accordion ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)} aria-label="abrir contenido de preguntas y respuestas">
        ¿Para que sirve la Yuppicard?
        </button>
        <p className="panel" style={{ maxHeight: activeIndex === 3 ? '50px' : '0px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <button className={`accordion accordion2 ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)} aria-label="abrir contenido de preguntas y respuestas">
        ¿Cómo puedo solicitar una placa para mi mascota?
        </button>
        <p className="panel" style={{ maxHeight: activeIndex === 4 ? '50px' : '0px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};
