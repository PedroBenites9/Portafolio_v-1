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
`;

const Contenedor = styled.div`
  position: relative;
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

const ContenedorModel = styled.div`
  height: 100%;
  width: 30vw;
`;
const ContenedorBio = styled.div`
  /* border: 10px solid #3d3d3d; */
  background-color: #1d1d1d;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 40vw;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
`;
const FirstRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Selfie = styled.img`
  width: auto;
  height: 40vh;
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
`;

const ContenedorText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const SecondRow = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5vh 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const TextSR = styled.h2`
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
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

const Boton = styled.button`
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
              "margin-top": "50px",
            }}
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
                juegos shooters. Soy hincha de Boca Juniors. Me gusta el futbol
                y a la vez debatir temas relacionados al deporte. Otros de mis
                pasatiempos es la lectura. Me gusta mucho la lectura y hasta la
                fecha poseo una minibiblioteca. Unos de mis hobbies es la
                perfumería. Poseo una colección de perfumes de diseñador y de
                marca nacional, descubrí mi gusto hacia los perfumes en plena
                pandemia cuando contraje él virus y no pude oler nada, desde ese
                entonces siento un placer enorme poder sentir los distintos
                aromas que ofrece los perfumes.
              </Text>
            </ContenedorText>
          </FirstRow>
          <SecondRow>
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
            <ContenedorLinks>
              <Boton>
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
