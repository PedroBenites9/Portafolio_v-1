/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import ModelComputer from "./ModelComputer";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
`;

const Contenedor = styled.div`
  display: flex;
  flex-flow: nowrap column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Tarjetas = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  /* background-color: #161616; */
`;

const BioMe = styled.div`
  /* border: 10px solid #3d3d3d; */
  width: 50%;
  padding: 20px;
`;

const Title = styled.h1`
  background: linear-gradient(90deg, #fc4b2c 0%, #3700ff 25%);
  font-size: 2.5rem;
  margin-bottom: 60px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
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
const SpherePurple = styled.div`
  width: 50%;
  height: 100%;
`;

const Links = styled.div`
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
const Instagram = styled.a``;
const Linkedin = styled.a``;
const Github = styled.a``;
const Image = styled.img`
  width: 80px;
  height: auto;
`;

const AboutMe = () => {
  return (
    <Section>
      <Contenedor>
        <Tarjetas>
          <BioMe>
            <Title>Sobre mi</Title>
            <SubTitle>Como sabran, mi nombre es Pedro Benites.</SubTitle>
            <Text>
              Soy un desarrollador web, y uno de mis objetivos es ser
              desarrollador Fron-End. Uno de mis pasatiempos son los
              videojuegos, en especial juegos shooters. Por otro lado, me gusta
              desarrollar diversos diseños para paginas web. Siempre ando
              probando nuevos diseños que miro por pinterest y trato de poder
              implementar otras cosas, esto me ayuda no solo sacar ideas
              distintas, sino que me ayuda a fortalecer mis tecnicas y
              aprendizaje sobre el desarrollo web.
            </Text>
          </BioMe>
          <SpherePurple>
            <ModelComputer />
          </SpherePurple>
        </Tarjetas>
        <Links>
          <Boton>Mi CV</Boton>
          <Redes>
            <Instagram href="/#">
              <Image src="./public/img/social/ig.png" alt="ig" />
            </Instagram>
            <Linkedin href="/#">
              <Image src="./public/img/social/ln.png" alt="linkedin" />
            </Linkedin>
            <Github href="/#">
              <Image src="./public/img/social/git.png" alt="git" />
            </Github>
          </Redes>
        </Links>
      </Contenedor>
    </Section>
  );
};

export default AboutMe;
