/* eslint-disable react/no-unknown-property */
import styled from "styled-components";

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

const Icons = styled.div`
  display: flex;
  gap: 2rem;
`;
const Instagram = styled.a`
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    top: -90px;
    left: 0;
    background: linear-gradient(-45deg, #ed1c94, #ffec17);
    position: absolute;
    transition: 0.5s;
  }
  &:hover::after {
    top: 0;
  }
`;
const Linkedin = styled.a`
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    top: -90px;
    left: 0;
    background: linear-gradient(-45deg, #1c88ed, #5517ff);
    position: absolute;
    transition: 0.5s;
  }
  &:hover::after {
    top: 0;
  }
`;
const GitHub = styled.a`
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    top: -90px;
    left: 0;
    background: linear-gradient(-45deg, #1a1a1a, #6b6b6b);
    position: absolute;
    transition: 0.5s;
  }
  &:hover::after {
    top: 0;
  }
`;
const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #7a7a7a;
  cursor: pointer;
  display: inline-block;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  @media (min-width: 767px) {
    width: 20%;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:disabel {
    pointer-events: none;
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
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
        <Icons>
          <Instagram href="https://www.instagram.com/_.pepox/">
            <i className="fab fa-instagram fa-3x"></i>
          </Instagram>
          <Linkedin href="https://www.linkedin.com/in/pedro-benites99/">
            <i className="fab fa-linkedin fa-3x"></i>
          </Linkedin>
          <GitHub href="https://github.com/PedroBenites9">
            <i className="fab fa-github fa-3x"></i>
          </GitHub>
        </Icons>
        <Button className="button-6">Contactar</Button>
      </Container>
    </Section>
  );
};

export default Bio;
