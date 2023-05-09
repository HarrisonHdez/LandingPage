import { NavBar } from '../../Components/NavBar';
import './IndexPage.css';
import { PartnerProviders } from './IndexComponents/PartnerProviders';
import { PreRegistro } from './IndexComponents/PreRegistro';
import { SlidingText } from './IndexComponents/SlidingText';
import { UserRegistration } from './IndexComponents/UserRegistration';
import { NewFriends } from './IndexComponents/NewFriends';
import { Footer } from '../../Components/Footer';
import { Accordion } from './IndexComponents/Accordion';

export const IndexPage = () => {

  // const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //       setTimeout(() => {
  //           setLoading(false);
  //       }, 1000);
  //   }, []);
    
  //   if (loading) {
  //       return <Loader />;
  //   }


  return (
    <>
      <header className="header ">
        <PreRegistro />
        <NavBar />

        <section className="header__content container">
          <img
            className="header__circulo1 float "
            src="/images/circulo1.svg"
            alt="circulo icono"
          />

          <h1 className="header__title animate__animated animate__fadeInUp">
            encuentra muchos amigos para{" "}
            <span>
              <img src="/images/title-icon.svg" alt="icono del titulo" />
            </span>{" "}
            tu mascota y para ti.
          </h1>

          <img
            className="header__circulo2 float "
            src="/images/circulo2.svg"
            alt="circulo icono"
          />

          <p className="header__paragrahp animate__animated animate__fadeInUp">
            Únete y descubre con nuestra IA muchos amigos afines al perfil de tu
            mascota. entra los mejores proveedores de servicios relacionados con
            el mundo de las mascotas.
          </p>

          <img
            className="header__circulo3 float"
            src="/images/circulo3.svg"
            alt="circulo icono"
          />
          <img
            className="header__circulo4 float"
            src="/images/circulo4.svg"
            alt="circulo icono"
          />

          <div className="header__low">
            <div>
              <UserRegistration />
              <a href="">Registrate Gratis</a>
              <PartnerProviders />
            </div>

            <div className="header__low-img">
              <img src="/images/PETS-YUPPIPETS.png" alt="" />
            </div>

            <div className="header__giveaway">
              <div className="header__giveaway-image">
                <img
                  src="/images/giveaway.svg"
                  alt="img donar"
                  className="rotate-clockwise"
                />
              </div>

              <div className="header__giveaway-line"></div>
              <NewFriends />
            </div>
          </div>
        </section>
      </header>

      <SlidingText />

      <section className="social ">
        <div className="social__content container">
          <div className="social__image">
            <img src="/images/image-social.png" alt="imagen seccion social" />
          </div>

          <div className="social__comunidad">
            <h3>Comunidad Petfriendly</h3>
            <p>
              La red más grande de Yuppifriends que trasciende fronteras
              digitales para lograr convivencias reales.
            </p>
          </div>

          <div className="social__servicios">
            <h3>Servicios certificados</h3>
            <p>
              Haz match con marcas y proveedores certificados y especializados
              en el mundo de las mascotas.
            </p>
          </div>

          <div className="social__club">
            <h3>Club Yuppipets</h3>
            <p>
              Puedes suscribirte a nuestro Club Yuppipets y recibir
              periódicamente obsequios de nuestros patrocinadores.
            </p>
          </div>
        </div>
      </section>

      <main className="pasos">
        <div className="pasos__content container">

          <div className="paso1__container">
            <div className="paso1">
                <p className="paso__numero">PASO 1</p>
                <h2>Regístrate y conviértete en un Yuppifriend.</h2>

                <p className="paso1__paragraph">
                  Sé de los primeros en convertirte en un Yuppi amigo al <span>Pre
                  regístrarte</span>  en nuestra comunidad de mascotas
                </p>

                <p className="paso1__paragraph">
                  <span>Ayúdanos</span> siendo parte de Yuppipets para mejorar la vida de
                  nuestras mascotas y lograr una bella convivencia con los
                  animalitos del mundo.
                </p>
                
                <button className="pasos__button" aria-label='boton para registrarse'>
                  Registrarme
                </button>
            </div>

            <div className="paso1__ilustracion">
              <img
                src="/images/ilustracion1.png"
                alt="ilustracion del paso 1"
              />
            </div>
          </div>

          <div className="paso2__container">
            <div className="paso2__ilustracion">
              <img
                src="/images/ilustracion2.png"
                alt="ilustracion del paso 1"
              />
            </div>

            <div className="paso2">
              <p className="paso__numero">PASO 2</p>
              <h2>Crea el perfil Yuppi de tu o tus mascotas.</h2>

              <p>
                Sé de los primeros en convertirte en un Yuppi amigo al Pre
                regístrarte en nuestra comunidad de mascotas
              </p>

              <p>
                Ayúdanos siendo parte de Yuppipets para mejorar la vida de
                nuestras mascotas y lograr una bella convivencia con los
                animalitos del mundo.
              </p>

              <button className="pasos__button">
                Registrarme
              </button>
            </div>
          </div>

          <div className="paso3__container">
            <div className="paso3">
              <p className="paso__numero">PASO 3</p>
              <h2>Elige y recibe un regalo para tu mascota.</h2>

              <p>
                Sé de los primeros en convertirte en un Yuppi amigo al Pre
                regístrarte en nuestra comunidad de mascotas
              </p>

              <p>
                Ayúdanos siendo parte de Yuppipets para mejorar la vida de
                nuestras mascotas y lograr una bella convivencia con los
                animalitos del mundo.
              </p>

              <button className="pasos__button">
                Registrarme
              </button>
            </div>

            <div className="paso3__ilustracion">
              <img
                src="/images/ilustracion3.png"
                alt="ilustracion del paso 1"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="club">
        <div className="club__content container">
          <div className="club__icono">
            <img src="/images/club.svg" alt="image club" />
          </div>

          <div className="club__title">
            <h2>Yuppipets Club</h2>
            <p>
              Regalos para tu mascota <span>ILIMITADOS GRATIS.</span>
            </p>
          </div>

          <div className="suscripcion__box">
            <div className="suscripcion__boxup">
              <div className="suscripcion__precio">
                <h3>Suscripción YuppiClub</h3>
                <p>
                  <span>$ 1,800*</span> / pesos al año{" "}
                </p>
              </div>
              <div className="suscripcion__button-box">
                <button>Suscribirme Ahora</button>
              </div>
            </div>

            <div className="suscripcion__paragraph">
              <p>
                YuppiClub es un grupo selecto de Yuppifriends que se benefician
                de ofertas exclusivas y con obsequios que nuestros
                Patrocinadores otorgan a nuestra marca para ser enviados y
                dispersados entre nuestros asociados.
              </p>

              <p>Beneficios que obtienes al ser parte de nuestro club:</p>

              <p>
                <img src="/images/check.svg" alt="icono check" /> Envío de
                regalos de nuestros patrocinadores para tu mascota
                periódicamente.
              </p>
              <p>
                <img src="/images/check.svg" alt="icono check" /> Recibirás
                cupones digitales para canjearlos por productos o servicios para
                tu mascota.
              </p>
              <p>
                <img src="/images/check.svg" alt="icono check" /> Participarás
                en sorteos GIVEAWAY de artículos, seguros médicos, viajes, etc.{" "}
              </p>
              <p>
                <img src="/images/check.svg" alt="icono check" /> Invitación VIP
                por mascota registrada a eventos YuppiFest según agenda anual
                Yuppipets.
              </p>
            </div>
          </div>

          <div className="suscripcion__low">
            <p>
              Al dar Clic al botón de <span>“Suscribirme Ahora”</span>, aceptas
              los{" "}
              <a className="suscripcion__terminos-condiciones" href="">
                {" "}
                Términos{" "}
              </a>
              y{" "}
              <a className="suscripcion__terminos-condiciones" href="">
                {" "}
                Condiciones{" "}
              </a>{" "}
              de Yuppipets. *Los beneficios exclusivos YuppiClub son únicamente
              por mascota. <br /> Puedes cancelar tu suscripción
              <span> YuppiClub </span> cuando lo desees, sin cargo alguno.
            </p>
          </div>
        </div>
      </section>

      <section className="yuppitag">
        <div className="yuppitag__content container">
          <div>
            <img src="/images/yuppitag.png" alt="imagen yuppitag" />
          </div>
          <div className="yuppitag__paragraph ">
            <p>
              Al suscribirte en YuppiPets recibirás para tu mascota una placa
              única <span>YuppiTag</span> para ser reconocido dentro de nuestra
              comunidad.
            </p>
          </div>
          <button
            className="yuppitag__button"
            aria-label="boton para registrarse"
          >
            Registrarme Ahora
          </button>
        </div>
      </section>

      <section className="preguntas">
        <div className="preguntas__content container">
          <div className="preguntas__fqa">
            <h3>FAQ</h3>
            <h2>¿Cuáles son tus curiosidades?</h2>
            <p>... o tienes otras preguntas?</p>
          </div>

          <div>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="slider">
        <div className="slider__content container">
          <div className="slider__overlay-left"></div>
          <div className="slider__track">
            <div className="slide">
              <img src="/images/bravecto.svg" alt="logo bravecto" />
            </div>
            <div className="slide">
              <img src="/images/logo-sofia.svg" alt="logo sofia" />
            </div>
            <div className="slide">
              <img src="/images/logo_ohmaigat.svg" alt="logo sofia" />
            </div>
            <div className="slide">
              <img src="/images/bravecto.svg" alt="logo bravecto" />
            </div>
            <div className="slide">
              <img src="/images/bravecto.svg" alt="logo bravecto" />
            </div>
            <div className="slide">
              <img src="/images/bravecto.svg" alt="logo bravecto" />
            </div>
            <div className="slide">
              <img src="/images/logo_ohmaigat.svg" alt="logo sofia" />
            </div>
            <div className="slide">
              <img
                src="/images/bravecto.svg"
                alt="logo bravecto" /* height="100" width="100" */
              />
            </div>
            <div className="slide">
              <img
                src="/images/bravecto.svg"
                alt="logo bravecto" /* height="100" width="100" */
              />
            </div>
            <div className="slide">
              <img src="/images/logo_ohmaigat.svg" alt="logo sofia" />
            </div>
            <div className="slide">
              <img src="/images/logo-sofia.svg" alt="logo sofia" />
            </div>
            <div className="slide">
              <img src="/images/logo_ohmaigat.svg" alt="logo sofia" />
            </div>
            <div className="slide">
              <img
                src="/images/bravecto.svg"
                alt="logo bravecto" /* height="100" width="100" */
              />
            </div>
            <div className="slide">
              <img src="/images/logo-sofia.svg" alt="logo sofia" />
            </div>
          </div>
          <div className="slider__overlay-right"></div>
        </div>
      </section>

      <Footer />
    </>
  );
}
