import styled from "styled-components";

export const div = styled.div`
  background: radial-gradient(
    circle at center,
    #2f91d4,
    #2072c1,
    #1a60b3,
    #164ea1,
    #0f3c8e,
    #041f58
  );
  color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const StyledBody = styled.body`
  background: radial-gradient(
    circle at center,
    #2f91d4,
    #2072c1,
    #1a60b3,
    #164ea1,
    #0f3c8e,
    #041f58
  );
  color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ItLogo = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ItLogoIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const Nav = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
`;

export const Main = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const FullscreenButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const FullscreenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Subtitle = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;

export const LoginButton = styled.button`
  background-color: #164ea1;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 35px 200px;
  cursor: pointer;
  border-radius: 4px;
`;

export const FullscreenMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  z-index: 10;
`;

export const HiddenLogin = styled(LoginButton)`
  display: none;
`;

export const PulseAnimation = styled.div`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: pulse 1.5s infinite;
`;

export const ArrowAnimation = styled.div`
  @keyframes drawArrow {
    0% {
      width: 0;
    }
    50% {
      width: 50px; /* Ajusta la longitud de la línea a la mitad del camino */
    }
    100% {
      width: 100px; /* Ajusta la longitud total de la línea */
      transform: translateX(-50%) translateY(-50%);
    }
  }

  width: 0;
  height: 2px; /* Ajusta el grosor de la línea */
  background-color: white; /* Ajusta el color de la línea */
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left center;
  animation: drawArrow 2s forwards; /* Ajusta la duración de la animación */
`;
