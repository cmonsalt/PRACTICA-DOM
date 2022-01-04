import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilers from "./filtro_busquedas.js";
import getGeolocation from "./geolocalizacion.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import drow from "./sorteo.js";
import { moveBall } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm-clock.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Dec 24, 2021 20:46", "Feliz Navidad");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=rxU8iAUfa7Q&list=RDMMrxU8iAUfa7Q&start_radio=1" target=_blank>Ver video<a/>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/rxU8iAUfa7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/engpcRb854EjnY4u6" target=_blank>Ver mapa<a/>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.573712278851!2d-75.57716132782583!3d6.291720396030326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f2aed3290a1%3A0xd2fd9b3bd471bd2c!2sCastilla%2C%20Medell%C3%ADn%2C%20Medellin%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1640135778096!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");

  webCam("webcam");

  getGeolocation("geolocation");

  drow("#winner-btn", ".player");

  slider();
  scrollSpy();
});

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");

  searchFilers(".card-filter", ".card");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
