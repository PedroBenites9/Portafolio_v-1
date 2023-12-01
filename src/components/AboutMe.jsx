/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import ModelComputer from "./ModelComputer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
const Section = styled.div`
  display: flex;
  height: 100vh;
  scroll-snap-align: center;
`;

const Contenedor = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ContenedorModel = styled.div`
  height: 100%;
  width: 100%;
`;

const ContenedorBio = styled.div`
  /* border: 10px solid #3d3d3d; */
  align-items: center;
  background-color: #1d1d1d;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  padding: 0 100px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 60px;
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const Text = styled.p`
  text-align: justify;
  width: 80%;
  margin: 0 auto;
`;

const ContenedorLinks = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  margin: 50px;
`;
const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Boton = styled.button``;
const Selfie = styled.img`
  width: 250px;
  height: auto;
`;

const Enlace = styled.a`
  color: #616161;
  font-size: 5rem;
`;

const FirstRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
`;

const AboutMe = () => {
  return (
    <Section>
      <Contenedor>
        <ContenedorBio>
          <FontAwesomeIcon
            icon={faCircleInfo}
            size="2xl"
            style={{
              color: "#0b63e6",
              "margin-top": "50px",
            }}
          />
          <Title>Sobre mi</Title>
          <SubTitle>Asi es, mi nombre es Pedro Benites.</SubTitle>
          <FirstRow>
            <Selfie src="./img/selfiesnipe.jpg" />
            <Text>
              Soy un desarrollador web, y uno de mis objetivos es ser
              desarrollador Fron-End. Uno de mis pasatiempos son los
              videojuegos, en especial juegos shooters. Por otro lado, me gusta
              desarrollar diversos diseños para paginas web. Siempre ando
              probando nuevos estilos que hay en pinterest para luego poder
              implementar y practiar a la hora de hacer diseño web. Esto me
              ayuda no solo sacar ideas distintas, sino que me ayuda a
              fortalecer mis tecnicas y aprendizaje.
            </Text>
          </FirstRow>

          <ContenedorLinks>
            <Boton>Mi CV</Boton>
            <Redes>
              <Enlace href="/#">
                <FontAwesomeIcon icon={faInstagram} />
              </Enlace>
              <Enlace href="/#">
                <FontAwesomeIcon icon={faLinkedin} />
              </Enlace>
              <Enlace href="/#">
                <FontAwesomeIcon icon={faGithub} />
              </Enlace>
            </Redes>
          </ContenedorLinks>
        </ContenedorBio>
        <ContenedorModel>
          <ModelComputer />
        </ContenedorModel>
      </Contenedor>
    </Section>
  );
};

export default AboutMe;
