
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__logo">
            <div>
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <p className="footer__paragraph">We will add the side-designer to your ongoing project so we can have more than one priority task at a time or even to simply speed.</p>
            <p className="footer__email"><span>Email:</span>  pets@yuppipets.com</p>
        </div>
        <div className="footer__navega">
            <h3>NAVEGA</h3>
            <a href="#">Yuppipets</a>
            <a href="#">Pre Registro</a>
            <a href="#">Comunidad</a>
            <a href="#">Proveedores</a>
            <a href="#">Contacto</a>
        </div>
        <div className="footer__compania">
            <h3>COMPAÑIA</h3>
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
            <a href="#">Yuppi Card</a>
            <a href="#">Yuppi ID </a>
            <a href="#">Ayuda</a>
        </div>
        <div className="footer__social">
            <h3>SOCIAL MEDIA</h3>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
        </div>

                           

        <div className="footer__low">
          <div className="footer__copyright">
            <p>
              Copyright &copy; {new Date().getFullYear()} Yuppipets Inc., Todos
              los derechos reservados.
            </p>
          </div>
          <div className="footer__made">
            <p>
              Made with <img src="/images/made.svg" alt="hecho en mexico" /> in
              México
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
