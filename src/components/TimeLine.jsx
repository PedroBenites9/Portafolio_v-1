import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/style.css";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  padding-bottom: 30px;
  text-decoration-line: underline;
  text-shadow: 2px 2px 5px #000000;
  @media (max-width: 451px) {
    font-size: 2rem;
  }
`;
const Text = styled.p`
  font-size: 2rem;
  @media (max-width: 451px) {
    font-size: 1rem;
  }
`;

const TimeLine = () => {
  return (
    <Section>
      <Title>Linea de tiempo</Title>
      <VerticalTimeline className="container__TimeLine">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(99,99,99)" }}
          date="2013 - 2018"
          iconStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Secundaria Tecnica
          </h3>
          <Text>
            Estudie en una secundaria tecnica finalizando como Tecnico en
            Computación. En el curso de programacion aprendi las bases de
            algoritmos y mi primer lenguaje fue Java. <br /> Mis inicios de
            desarrollo web comenzaban en este punto
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(99, 99, 99)" }}
          date="2021 - 2023"
          iconStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Desarrollador web</h3>
          <Text>
            Durante este periodo hice muchos cursos en Udemy, CoderHouse y en
            algunos canales de Youtube. Hasta este punto sentia un punto de
            estancamiento, pero con constancia llegue a encontrar mi camino al
            desarrollo Front-End.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(99, 99, 99)" }}
          date="2023-2024"
          iconStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador Front-end
          </h3>
          <Text>
            Ya con los conocimientos solidos basicos de HTML, CSS y JS termine
            realizando diversos proyectos propios y a su vez mi propio
            portafolio
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Section>
  );
};

export default TimeLine;
