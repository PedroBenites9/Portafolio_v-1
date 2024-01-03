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
  @media (max-width: 767px) {
    height: 100%;
    padding: 30px 0px;
  }
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
      <VerticalTimeline className="lineMain">
        <VerticalTimelineElement
          className="vertical-timeline-element--work tarjetaLine"
          contentStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(99,99,99)" }}
          date="2013 - 2018"
          iconStyle={{ background: "rgb(99, 99, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Secundaria Tecnica
          </h3>
          <Text>
            Estudie en la escuela tecnica N32 D.E 14 &quot; Gral Jose de San
            Martin &quot; egresandome como tecnico en computacion y ayudante de
            programacion
            <br /> Mis inicios de desarrollo web comenzaban en este punto
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
            Durante este periodo realice muchos cursos en Udemy, CoderHouse y en
            algunos canales de Youtube realizando proyectos muy sencillos.
            <br />
            Inicia mi interes por el desarrollo web, viendo videos de{" "}
            <a href="https://www.youtube.com/@VictorRoblesWEB">
              Victor Robles
            </a>{" "}
            y <a href="https://www.youtube.com/@DevTalles">Fernando Herrera</a>
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
            Realice un curso de desarrollo front-end en CoderHouse desde 0 hasta
            el uso de React. En ella hice mis primera paginas web. Una vez
            finalizado el curso comence a experimentar nuevas librerias y
            frameworks para
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Section>
  );
};

export default TimeLine;
