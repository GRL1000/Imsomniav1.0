import React, { useEffect, useState } from "react";
import * as S from "./Styled-Login";
import logoI from "../../assets/images/it-logo.png";
import FullS from "../../assets/images/full-screen-n.png";

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        const fullscreenMessage = document.getElementById("fullscreenMessage");
        const bg = document.querySelector(".bg");
        const loginButton = document.querySelector(".login");
        const fullscreenButton = document.querySelector(".fullscreen");

        if (document.fullscreenElement) {
          document.exitFullscreen().then(() => {
            fullscreenMessage.style.display = "flex";
            bg.style.display = "none";
            loginButton.style.display = "none";
            fullscreenButton.style.display = "block";
          });
        }
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Verificar si es un dispositivo móvil
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Agrega un listener para actualizar el estado si la pantalla cambia de tamaño
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  function toggleFullScreen() {
    const fullscreenMessage = document.getElementById("fullscreenMessage");
    const bg = document.querySelector(".bg");
    const loginButton = document.querySelector(".login");
    const fullscreenButton = document.querySelector(".fullscreen");

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        if (fullscreenMessage) fullscreenMessage.style.display = "none";
        if (bg) bg.style.display = "block";
        if (loginButton) {
          loginButton.style.display = "block";
          setIsPulsing(true);
        }
        if (fullscreenButton) fullscreenButton.style.display = "none";
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          if (fullscreenMessage) fullscreenMessage.style.display = "flex";
          if (bg) bg.style.display = "none";
          if (loginButton) {
            loginButton.style.display = "none";
            setIsPulsing(false);
          }
          if (fullscreenButton) fullscreenButton.style.display = "block";
        });
      }
    }
  }

  return (
    <>
      {isMobile ? (
        <S.FullscreenMessage id="fullscreenMessage">
          <p>¡Espera!</p>
          <p>Para una mejor experiencia, activa la rotación de pantalla</p>
          <S.FullscreenButton onClick={toggleFullScreen}>
            <S.FullscreenIcon src={FullS} alt="Full Screen Icon" />
          </S.FullscreenButton>
        </S.FullscreenMessage>
      ) : (
        <S.FullscreenMessage id="fullscreenMessage">
          <p>¡Espera!</p>
          <p>Para una mejor experiencia, activa el modo pantalla completa</p>
          <S.FullscreenButton onClick={toggleFullScreen} className={isPulsing ? "pulse-animation" : ""}>
            <S.PulseAnimation>
              <S.FullscreenIcon src={FullS} alt="Full Screen Icon" />
            </S.PulseAnimation>
          </S.FullscreenButton>
        </S.FullscreenMessage>
      )}

      <S.Header>
        <S.Logo>INSOMNIA v1.0</S.Logo>
        <S.Nav>SOBRE NOSOTROS</S.Nav>
      </S.Header>
      <S.Main>
        APRENDE CON
        <br />
        TU MÚSICA FAVORITA
        <S.Subtitle>
          Inicia sesión y disfruta de esta nueva experiencia
        </S.Subtitle>
        <S.LoginButton>Ingresar con Spotify</S.LoginButton>
      </S.Main>
      <S.ItLogo>
        <S.ItLogoIcon src={logoI} />
      </S.ItLogo>
      <S.FullscreenButton onClick={toggleFullScreen}>
        <S.FullscreenIcon src={FullS} alt="Full Screen Icon" />
      </S.FullscreenButton>
    </>
  );
};

export default Login;
