import { useState } from 'react';

export const PreRegistro = () => {

  const [showPreRegistro, setShowPreRegistro] = useState(true);

  const handleClosePreRegistro = () => {
      setShowPreRegistro(false);
  };

  return (
    <>
    {showPreRegistro && (
      <div className="pre-registro animate__animated animate__fadeInDown">
        <p className='animate__animated animate__backInDown animate__delay-05s'>PRE REGISTRO YUPPIPETS 2023 - REGISTRA A TU MASCOTA Y OBTÉN UN REGALO ESPECIAL PARA TU MEJOR AMIGO(A).</p>
        <button className="pre-registro__button" onClick={handleClosePreRegistro}>
          <img src="/images/close-circle.svg" alt="cerrar" />
        </button >
      </div>
    )}
    </>
  )
}
