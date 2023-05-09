import { useEffect, useState } from "react";

export const NewFriends = () => {
  const inicial = 750;
  const [acumuladorFriends, setAcumuladorFriends] = useState(parseInt(localStorage.getItem('acumuladorFriends')) || inicial);
  const [horaInicio, setHoraInicio] = useState(parseInt(localStorage.getItem('horaInicio')) || Date.now());

  useEffect(() => {
    const INTERVALO = 45 * 60 * 1000;
    const tiempoTranscurrido = Date.now() - horaInicio;
    const tiempoRestante = INTERVALO - (tiempoTranscurrido % INTERVALO);

    const intervalId = setTimeout(() => {
      setAcumuladorFriends((acumuladorAnterior) => {
        localStorage.setItem('acumuladorFriends', (acumuladorAnterior + 1).toString());
        setHoraInicio(Date.now());
        return acumuladorAnterior + 1;
      });
    }, tiempoRestante);

    return () => clearTimeout(intervalId);
  }, [acumuladorFriends, horaInicio]);


  return (
    <div className="header__newfriends">
      <div className="header__newfriends-images ">

       <div>
         <img src="/images/nuevos-amigos1.png" alt="" />
       </div>

        <div className="header__newfriends-images2 ">
          <img src="/images/nuevos-amigos2.png" alt="" />
        </div>

        <div className="header__newfriends-images3 ">
          <img src="/images/nuevos-amigos3.png" alt="" />
        </div>
        
      </div>
        <div className="header__newfriends-box ">
          <p className="header__number">{acumuladorFriends.toLocaleString()}</p>
          <p className="header__newfriends-p">Nuevos Amigos</p>
        </div>
    </div>
  )
}
