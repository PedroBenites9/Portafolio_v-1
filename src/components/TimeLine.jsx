import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  margin: 5%;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding-bottom: 30px;
  text-decoration-line: underline;
  text-shadow: 2px 2px 5px #000000;
`;

const TimeLine = () => {
  return (
    <Section>
      <Title>Linea de tiempo</Title>
      <VerticalTimeline>
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
          <p>
            Estudie en una secundaria tecnica finalizando como Tecnico en
            Computación. En el curso de programacion aprendi las bases de
            algoritmos y mi primer lenguaje fue Java. <br /> Mis inicios de
            desarrollo web comenzaban en este punto
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(99, 99, 99)" }}
          date="2021 - 2023"
          iconStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Desarrollador web</h3>
          <p>
            Durante este periodo hice muchos cursos en Udemy, CoderHouse y en
            algunos canales de Youtube. Hasta este punto sentia un punto de
            estancamiento, pero con constancia llegue a encontrar mi camino al
            desarrollo Front-End.
          </p>
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
          <p>
            Ya con los conocimientos solidos basicos de HTML, CSS y JS termine
            realizando diversos proyectos propios y a su vez mi propio
            portafolio
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Section>
  );
};

export default TimeLine;
