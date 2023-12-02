import styled from "styled-components";
import Model3d from "./Model3d";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
const ContenedorModel = styled.div`
  height: 100vh;
  width: 25vw;
  margin: 0 10px;
`;

const ContenedorMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  margin: 0 auto;
`;
const Title = styled.h1``;

const ContenedorProyectos = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
  height: 100%;
  background-color: #525252;
  border-radius: 20px;
  transition: transform 300ms ease-out;
  &:hover {
    box-shadow: -9px 10px 17px 0px rgba(5, 5, 5, 0.5);
    transform: translate(0, -14px);
  }
`;
const CardTitle = styled.h3``;
const CardImg = styled.img`
  margin: 20px;
  border-radius: 20px;
`;
const CardDescription = styled.p``;

const CardInfo = styled.div`
  padding: 10px 20px;
`;
const ContenedorCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
const Github = styled.img`
  width: 100%;
  height: auto;
`;
const Button = styled.button`
  background-color: #303030;
  display: inline-block;
  padding: 10px 30px;
  border: 0.1em solid #666666;
  margin: 0 0.3em 0.3em 0;
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
  justify-content: end;
  gap: 30px;
  margin: 10px 0;
`;
const Click = styled.a`
  width: 15%;
  &:hover {
  }
`;

const Proyectos = () => {
  return (
    <Section>
      <ContenedorMain>
        <ContenedorModel>
          <Model3d />
        </ContenedorModel>
        <ContenedorProyectos>
          <Title>Proyectos</Title>
          <ContenedorCard>
            <Card>
              <CardImg src="./img/fondoMuseo.jpg" alt="imgProyect" />
              <CardInfo>
                <CardTitle>Estacion Oceanica</CardTitle>
                <CardDescription>
                  Mi proyecto realizado en 2022 mientras realizaba la cursada de
                  desarrollo web en &quot;CoderHouse&quot;{" "}
                </CardDescription>
                <CardLogo>
                  <Click href="./">
                    <Github src="./img/GitHub.svg" />
                  </Click>
                  <Button>Ver</Button>
                </CardLogo>
              </CardInfo>
            </Card>
            <Card>
              <CardImg src="./img/fondoMuseo.jpg" alt="imgProyect" />
              <CardInfo>
                <CardTitle>Estacion Oceanica</CardTitle>
                <CardDescription>
                  Mi proyecto realizado en 2022 mientras realizaba la cursada de
                  desarrollo web en &quot;CoderHouse&quot;{" "}
                </CardDescription>
                <CardLogo>
                  <Click href="./">
                    <Github src="./img/GitHub.svg" />
                  </Click>
                  <Button>Ver</Button>
                </CardLogo>
              </CardInfo>
            </Card>
            <Card>
              <CardImg src="./img/fondoMuseo.jpg" alt="imgProyect" />
              <CardInfo>
                <CardTitle>Estacion Oceanica</CardTitle>
                <CardDescription>
                  Mi proyecto realizado en 2022 mientras realizaba la cursada de
                  desarrollo web en &quot;CoderHouse&quot;{" "}
                </CardDescription>
                <CardLogo>
                  <Click href="./">
                    <Github src="./img/GitHub.svg" />
                  </Click>
                  <Button>Ver</Button>
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
