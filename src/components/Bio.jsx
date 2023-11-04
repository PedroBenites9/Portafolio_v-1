/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import Test from "./Test";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;
const Name = styled.h1`
  font-weight: 800;
`;

const Description = styled.h1`
  font-weight: 800;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  text-align: center;
`;

const Img = styled.img`
  border-radius: 20%;
  width: 350px;
  height: 350px;

  animation: animate 1s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
`;

const Bio = () => {
  return (
    <Section>
      <Container>
        <Img src="./img/foto_perfil_portafolio.jpg" alt="foto_perfil" />
        <Title>
          <Name>Pedro Benites</Name>
          <Description>Desarrollador Front-end</Description>
        </Title>
      </Container>
    </Section>
  );
};

export default Bio;
