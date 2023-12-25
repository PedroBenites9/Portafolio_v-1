/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import ModelComputer from "./ModelComputer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faBottleDroplet,
  faCameraRetro,
  faCat,
  faCircleInfo,
  faCode,
  faDownload,
  faFilm,
  faFutbol,
  faGamepad,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Section = styled.div`
  display: flex;
  height: 100vh;
  scroll-snap-align: center;

  @media (max-width: 451px) {
    padding: 100px 0;
  }
`;

const Contenedor = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  @media (max-width: 451px) {
    flex-flow: column;
  }
`;

const ContenedorModel = styled.div`
  height: 100%;
  width: 30vw;
  @media (max-width: 451px) {
    height: 10%;
  }
`;

const ContenedorBio = styled.div`
  /* border: 10px solid #3d3d3d; */
  /* background-color: #1d1d1d; */
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 40vw;
  padding: 0 100px;
  justify-content: center;
  align-items: center;
  @media (max-width: 451px) {
    width: 100%;
    margin-top: 200px;
  }
`;

const FirstRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 451px) {
    flex-flow: column;
    gap: 10px;
  }
`;

const Selfie = styled.img`
  width: auto;
  height: 40vh;
  @media (max-width: 451px) {
    height: auto;
    width: 60%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 451px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
  @media (max-width: 451px) {
    font-size: 1rem;
  }
`;
const Text = styled.p`
  text-align: justify;
  word-spacing: 4px;
  @media (max-width: 451px) {
    font-size: 0.8rem;
    padding: 20px;
  }
`;

const ContenedorText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 451px) {
    width: 100%;
  }
`;

const SecondRow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const TextSR = styled.h2`
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
  margin: 20px 0;
`;

const ContenedorOscio = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  gap: 30px;
`;

const TarjetaIcon = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ContenedorLinks = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  margin: 50px;
  grid-area: 2 / 2 / 3 / 3;
`;
const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Boton = styled.a`
  background-color: rgba(68, 68, 68, 0.5);
  border-radius: 8px;
  border-width: 0;
  color: #505050;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: rgba(165, 164, 164, 0.616);
    color: #000000;
  }
`;

const Enlace = styled.a`
  color: #616161;
  font-size: 3rem;
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    background-color: #161616;
    transition: all 0.5s;
  }
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
              color: "#c7c7c7",
            }}
            className="icon-aboutme
            }"
          />
          <Title>Sobre mi</Title>
          <FirstRow>
            <Selfie src="./img/selfiesnipe.jpg" />
            <ContenedorText>
              <SubTitle>Asi es, mi nombre es Pedro Benites</SubTitle>
              <Text>
                Soy un desarrollador web, y uno de mis objetivos es ser, en
                corto plazo, desarrollador Fron-End y a largo plazo Fullstack.
                Uno de mis pasatiempos son los videojuegos, en especial los
                juegos shooters. Otros de mis pasatiempos es la lectura. Me
                gusta mucho la lectura y hasta la fecha poseo una
                minibiblioteca. Unos de mis hobbies es la perfumería. Poseo una
                colección de perfumes de diseñador. Me gusta el futbol y soy
                fanatico de Boca Juniors
              </Text>
            </ContenedorText>
          </FirstRow>
          <SecondRow>
            <div>
              <TextSR>i ❤️</TextSR>
              <ContenedorOscio>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faGamepad} />
                  Videojuegos
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faCode} />
                  Programar
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faCat} />
                  Michis
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faMusic} />
                  Música
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faBook} />
                  Libros
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faFutbol} />
                  Futbol
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faBottleDroplet} />
                  Perfumes
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faFilm} />
                  Peliculas
                </TarjetaIcon>
                <TarjetaIcon>
                  <FontAwesomeIcon icon={faCameraRetro} />
                  Fotografía
                </TarjetaIcon>
              </ContenedorOscio>
            </div>
            <ContenedorLinks>
              <Boton
                href="../../public/documents/CVPedro-Programacion.pdf"
                download={"CV-PedroBenites"}
              >
                Mi CV <FontAwesomeIcon icon={faDownload} />
              </Boton>
              <Redes>
                <Enlace href="/#">
                  <FontAwesomeIcon icon={faInstagram} style={{}} />
                </Enlace>
                <Enlace href="/#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Enlace>
                <Enlace href="/#">
                  <FontAwesomeIcon icon={faGithub} />
                </Enlace>
              </Redes>
            </ContenedorLinks>
          </SecondRow>
        </ContenedorBio>
        <ContenedorModel>
          <ModelComputer />
        </ContenedorModel>
      </Contenedor>
    </Section>
  );
};

export default AboutMe;
