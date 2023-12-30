import styled from "styled-components";
import { Flip, Zoom } from "react-reveal";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-flow: nowrap column;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 767px) {
    height: 100%;
    padding: 40px 0px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-decoration-line: underline;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  @media (max-width: 451px) {
    text-align: center;
    font-size: 1.3rem;
  }
`;

const Contenedor = styled.div`
  text-align: center;
  margin-top: 30px;
  @media (max-width: 767px) {
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
  }
`;

const ContenedorSkill = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 767px) {
    flex-flow: row wrap;
    justify-content: center;
    gap: 5px;
  }
`;
const ContenedorSkillData = styled.div`
  display: flex;
  border: 4px solid white;
  flex-flow: nowrap row;
  align-items: center;
  color: white;
  width: 100%;
  padding: 6px 10px 3px;
  gap: 5px;
  &:nth-child(1) {
    border-color: #f37338;
    background: #c04810;
  }
  &:nth-child(2) {
    border-color: #3a3aee;
    background: #0b319b;
  }
  &:nth-child(3) {
    border-color: #f3c83c;
    background: #cf9b0d;
  }
  &:nth-child(4) {
    border-color: #d3d3d3;
    background: #353535;
  }
  @media (max-width: 767px) {
    margin-top: 5px;
    width: auto;
  }
`;
const TitleSkill = styled.h3`
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 100%;
  }
`;
const Image = styled.img`
  content: "";
  height: auto;
  width: 4vh;
  @media (max-width: 767px) {
    margin: 0 auto;
    padding-bottom: 5px;
  }
`;
const ContenedorLF = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 767px) {
    flex-flow: row wrap;
    justify-content: center;
    gap: 5px;
  }
`;
const ContenedorLFData = styled.div`
  display: flex;
  border: 4px solid white;
  flex-flow: nowrap row;
  align-items: center;
  color: white;
  width: 100%;
  padding: 6px 10px 3px;
  gap: 5px;
  &:nth-child(1) {
    border-color: #7f3aee;
    color: white;
    background: #490b9b;
  }
  &:nth-child(2) {
    border-color: #3ca1f3;
    color: white;
    background: #027896;
  }
  &:nth-child(3) {
    border-color: #31526d;
    color: white;
    background: #1f292c;
  }
  &:nth-child(4) {
    border-color: #494444;
    color: white;
    background: #686464;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 5px;
    width: auto;
  }
`;

const ContenedorHyP = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 767px) {
    flex-flow: row wrap;
    justify-content: center;
    gap: 5px;
  }
`;
const ContenedorHyPData = styled.div`
  display: flex;
  border: 4px solid white;
  flex-flow: nowrap row;
  align-items: center;
  color: white;
  width: 100%;
  padding: 6px 10px 3px;
  margin: 30px 0;
  gap: 5px;
  &:nth-child(1) {
    border-color: #af5104;
    color: white;
    background: #572301;
  }
  &:nth-child(2) {
    border-color: #0440af;
    color: white;
    background: #130566;
  }
  &:nth-child(3) {
    border-color: #34348b;
    color: white;
    background: #1b0870;
  }
  &:nth-child(4) {
    border-color: #ca4230;
    color: white;
    background: #8b1404;
  }
  @media (max-width: 767px) {
    width: auto;
  }
`;

const Skill = () => {
  return (
    <>
      <Section>
        <Flip left>
          <Title>CONOCIMIENTOS TECNOLOGICOS</Title>
        </Flip>
        <Contenedor>
          <Zoom delay={1000}>
            <SubTitle>Desarrollo Web y Otros Lenguajes</SubTitle>
          </Zoom>
          <Flip bottom delay={1500}>
            <ContenedorSkill>
              <ContenedorSkillData>
                <Image src="./img/html.png" />
                <TitleSkill>HTML</TitleSkill>
              </ContenedorSkillData>
              <ContenedorSkillData>
                <Image src="./img/Css.png" />
                <TitleSkill>CSS</TitleSkill>
              </ContenedorSkillData>
              <ContenedorSkillData>
                <Image src="./img/javascript.png" />
                <TitleSkill>JAVASCRIPT</TitleSkill>
              </ContenedorSkillData>
              <ContenedorSkillData>
                <Image src="./img/java.png" />
                <TitleSkill>JAVA</TitleSkill>
              </ContenedorSkillData>
            </ContenedorSkill>
          </Flip>
        </Contenedor>
        <Contenedor>
          <Zoom delay={2000}>
            <SubTitle>Librerias y Framework</SubTitle>
          </Zoom>
          <Flip bottom delay={2500}>
            <ContenedorLF>
              <ContenedorLFData>
                <Image src="./img/Bootstrap_logo.png" />
                <TitleSkill>BOOTSTRAP</TitleSkill>
              </ContenedorLFData>
              <ContenedorLFData>
                <Image src="./img/React.png" />
                <TitleSkill>REACT</TitleSkill>
              </ContenedorLFData>
              <ContenedorLFData>
                <Image src="./img/aos.png" />
                <TitleSkill>AOS</TitleSkill>
              </ContenedorLFData>
              <ContenedorLFData>
                <Image src="./img/three-js-logo.png" />
                <TitleSkill>THREE JS</TitleSkill>
              </ContenedorLFData>
            </ContenedorLF>
          </Flip>
        </Contenedor>
        <Contenedor>
          <Flip left delay={3000}>
            <Title>HERRAMIENTAS Y PROGRAMAS</Title>
          </Flip>
          <Flip bottom delay={3500}>
            <ContenedorHyP>
              <ContenedorHyPData>
                <Image src="./img/Illustrator-Logo.png" />
                <TitleSkill>ILLUSTRATOR</TitleSkill>
              </ContenedorHyPData>
              <ContenedorHyPData>
                <Image src="./img/Adobe_Photoshop.png" />
                <TitleSkill>PHOTOSHOP</TitleSkill>
              </ContenedorHyPData>
              <ContenedorHyPData>
                <Image src="./img/Adobe_Premiere.png" />
                <TitleSkill>PREMIERE</TitleSkill>
              </ContenedorHyPData>
              <ContenedorHyPData>
                <Image src="./img/M_OFFICE_.png" />
                <TitleSkill>OFFICE</TitleSkill>
              </ContenedorHyPData>
            </ContenedorHyP>
          </Flip>
        </Contenedor>
      </Section>
    </>
  );
};

export default Skill;
