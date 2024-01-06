import styled from "styled-components";
import Model3d from "./Model3d";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-flow: column nowrap;
  padding-top: 10px;
  @media (max-width: 1350px) {
    height: 100%;
  }
`;
const ContenedorMain = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  justify-content: start;
  padding-top: 50px;
  align-items: center;
  gap: 50px;
  @media (max-width: 1350px) {
    height: 100%;
  }
  @media (max-width: 767px) {
    padding-top: 20px;
  }
`;

const ContenedorTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 15vw;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    flex-flow: column-reverse nowrap;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const ContenedorProyectos = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1024px) {
    flex-flow: wrap;
  }
`;

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;

  background-color: #525252;
  border-radius: 20px;
  transition: transform 300ms ease-out;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 0 20px;
  height: 100%;
  width: 20%;
  &:hover {
    box-shadow: -9px 10px 17px 0px rgba(5, 5, 5, 0.5);
    transform: translate(0, -14px);
  }

  @media (max-width: 1324px) {
    width: 30%;
  }

  @media (max-width: 451px) {
    width: auto;
    height: 100%;
  }
`;
const CardTitle = styled.h3``;
const CardImg = styled.img`
  border-radius: 20px;
  min-height: 200px;
  object-fit: cover;
  width: 100%;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const CardDescription = styled.div`
  font-size: 1rem;
  text-align: justify;
  @media (max-width: 965px) {
    font-size: 0.8rem;
  }
`;

const CardInfo = styled.div`
  padding: 20px 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ContenedorCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  @media (max-width: 900px) {
    width: 80vw;
    flex-flow: column nowrap;
  }
  @media (max-width: 451px) {
    width: 100%;
  }
`;

const Github = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.a`
  background-color: #303030;
  display: inline-block;
  padding: 10px 30px;
  border: 0.1em solid #666666;
  border-radius: 10px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #a1a1a1;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    color: #ffffff;
    border-color: #ffffff;
    background-color: #303030;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

const CardLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin: 10px 0;
  @media (max-width: 1024px) {
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 451px) {
  }
`;
const Click = styled.a`
  width: 15%;
`;

const Proyectos = () => {
  const really = () => {
    alert("Encerio? :/");
  };
  const alerta = () => {
    alert("En estos momentos no esta disponible la visualizacion :(");
  };
  return (
    <Section>
      <ContenedorMain>
        <ContenedorTitle>
          <Model3d />
          <Title>Proyectos</Title>
        </ContenedorTitle>
        <ContenedorProyectos>
          <ContenedorCard>
            <Card>
              <CardImg src="./img/fondoMuseo.jpg" alt="imgProyect" />
              <CardInfo>
                <CardTitle>Estacion Oceanica</CardTitle>
                <CardDescription>
                  Mi primer proyecto realizado en 2022 mientras realizaba la
                  cursada de desarrollo web en &quot;CoderHouse&quot;{" "}
                </CardDescription>
                <CardLogo>
                  <Click href="https://github.com/PedroBenites9/estacionOceanica-pedroBenites">
                    <Github src="./img/GitHub.svg" />
                  </Click>
                  <Button href="https://pedrobenites9.github.io/estacionOceanica-pedroBenites/">
                    Ver
                  </Button>
                </CardLogo>
              </CardInfo>
            </Card>
            <Card>
              <CardImg src="./img/Screenshot_portafolio.png" alt="imgProyect" />
              <CardInfo>
                <CardTitle>Portafolio</CardTitle>
                <CardDescription>
                  Este es uno de los tantos portafolios que realice. Lo estas
                  viendo en estos momentos.
                </CardDescription>
                <CardLogo>
                  <Click href="https://github.com/PedroBenites9/Portafolio_v-1">
                    <Github src="./img/GitHub.svg" />
                  </Click>
                  <Button onClick={really}>Ver</Button>
                </CardLogo>
              </CardInfo>
            </Card>
            <Card>
              <CardImg src="./img/dawn.PNG" alt="imgProyect" />
              <CardInfo>
                <CardTitle>Dawn</CardTitle>
                <CardDescription>
                  Una web shopify de articulos de accesorios para mujeres
                </CardDescription>
                <CardLogo>
                  <Click href="https://github.com/PedroBenites9/DawnPage">
                    <Github src="./img/GitHub.svg" />
                  </Click>
                  <Button onClick={alerta}>Ver</Button>
                </CardLogo>
              </CardInfo>
            </Card>
          </ContenedorCard>
        </ContenedorProyectos>
      </ContenedorMain>
    </Section>
  );
};

export default Proyectos;
