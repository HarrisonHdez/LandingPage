import { useEffect, useState } from "react";

export const UserRegistration = () => {
  const inicial = 100398;
  const [acumulador, setAcumulador] = useState(parseInt(localStorage.getItem('acumulador')) || inicial);

  useEffect(() => {
    const intervalo = 60 * 1000; 
    const intervalId = setInterval(() => {
      setAcumulador((acumuladorAnterior) => {
        localStorage.setItem('acumulador', (acumuladorAnterior + 1).toString());
        return acumuladorAnterior + 1;
      });
    }, intervalo);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="registro__usuario">
      <p>YA SE HAN REGISTRADO </p>
        <img src="/images/usuarios-registrados.png" alt="usuarios registrados" /> <span>{acumulador.toLocaleString()}</span> 
      <p> YUPPIFRIENDS CON SUS BELLAS MASCOTAS.</p>
    </div>
  );
};







// import { useEffect, useState } from "react";

// export const Accumulator = () => {
//     const INICIAL = 100000;
//     const [acumulador, setAcumulador] = useState(INICIAL);
  
//   const generarIncrementoAleatorio = () => {
//     return Math.floor(Math.random() * 26) + 25;
//   };

//   useEffect(() => {
//     const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']; // nombres de los días
//     const INTERVALO = 1000; // cada 1 segundo
//     const intervalId = setInterval(() => {
//       const diaActual = DIAS[new Date().getDay()];
//       const incremento = generarIncrementoAleatorio();
//       setAcumulador(acumuladorAnterior => {
//         if (diaActual === 'lunes') {
//           return acumuladorAnterior + incremento;
//         } else {
//           return acumuladorAnterior + 1;
//         }
//       });
//     }, INTERVALO);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1>Se han registrado {acumulador.toLocaleString()} usuarios</h1>
//     </div>
//   )
// }
