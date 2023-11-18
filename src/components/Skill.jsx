import styled from "styled-components";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-flow: nowrap column;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-decoration-line: underline;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
`;

const Contenedor = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const ContenedorSkill = styled.div`
  display: flex;
  gap: 20px;
`;
const ContenedorSkillData = styled.div`
  display: flex;
  border: 4px solid white;
  flex-flow: wrap row;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: white;
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
`;
const TitleSkill = styled.h3`
  font-weight: 400;
`;
const Image = styled.img`
  content: "";
  height: auto;
  width: 4vh;
  margin: 0 10px 0 0;
`;
const ContenedorLF = styled.div`
  display: flex;
  gap: 20px;
`;
const ContenedorLFData = styled.div`
  display: flex;
  border: 4px solid white;
  flex-flow: wrap row;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
`;

const ContenedorHyP = styled.div`
  display: flex;
  gap: 20px;
`;
const ContenedorHyPData = styled.div`
  display: flex;
  border: 4px solid white;
  flex-flow: wrap row;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
`;

const Skill = () => {
  return (
    <>
      <Section>
        <Title>Habilidades Tecnologicas</Title>
        <Contenedor>
          <SubTitle>Desarrollo Web y Otros Lenguajes</SubTitle>
          <ContenedorSkill>
            <ContenedorSkillData>
              <Image src="./img/html.png" />
              <TitleSkill>HTML</TitleSkill>
            </ContenedorSkillData>
            <ContenedorSkillData>
              <Image src="./img/Css.png" />
              {/* arreglar size de css */}
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
        </Contenedor>
        <Contenedor>
          <SubTitle>Librerias y Framework</SubTitle>
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
        </Contenedor>
        <Contenedor>
          <Title>Herramientas y Programas</Title>
          <ContenedorHyP>
            <ContenedorHyPData>
              <Image src="./img/Illustrator-Logo.png" />
              <TitleSkill>Illustrator</TitleSkill>
            </ContenedorHyPData>
            <ContenedorHyPData>
              <Image src="./img/Adobe_Photoshop.png" />
              <TitleSkill>Photoshop</TitleSkill>
            </ContenedorHyPData>
            <ContenedorHyPData>
              <Image src="./img/Adobe_Premiere.png" />
              <TitleSkill>Premiere</TitleSkill>
            </ContenedorHyPData>
            <ContenedorHyPData>
              <Image src="./img/M_OFFICE_.png" />
              <TitleSkill>Office</TitleSkill>
            </ContenedorHyPData>
          </ContenedorHyP>
        </Contenedor>
      </Section>
    </>
  );
};

export default Skill;
