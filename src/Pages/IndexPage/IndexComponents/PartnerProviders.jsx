import { useEffect, useState } from "react";

export const PartnerProviders = () => {
    const INICIAL = 10;
    const [acumulador, setAcumulador] = useState(INICIAL);
  
    useEffect(() => {
      const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']; // nombres de los días
      const INTERVALOS = {
        lunes: 45 * 60 * 1000, // cada 45 minutos
        martes: 2 * 60 * 60 * 1000, // cada 2 horas
        miércoles: 80 * 60 * 1000, // cada 1 hora y 20 minutos
        jueves: 50 * 60 * 1000, // cada 50 minutos
        viernes: 30 * 60 * 1000, // cada 30 minutos
        sábado: 55 * 60 * 1000, // cada 55 minutos
        domingo: 100 * 60 * 1000, // cada 1 hora y 40 minutos
      };
      const intervalId = setInterval(() => {
        const diaActual = DIAS[new Date().getDay()];
        const incremento = Math.floor(Math.random() * 26) + 25;
        setAcumulador((acumuladorAnterior) => {
          const tiempo = INTERVALOS[diaActual];
          const incrementoAcumulado = (tiempo / 1000) * (incremento / 3600);
          return acumuladorAnterior + incrementoAcumulado;
        });
      }, INTERVALOS[DIAS[new Date().getDay()]]);
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <div>
      <p>{acumulador.toLocaleString()} <span></span>  PROVEEDORES ASOCIADOS</p>
    </div>
  )
}
