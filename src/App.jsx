import { lazy, Suspense } from "react";
import styled from "styled-components";
// react-reveal animate

const Biografia = lazy(() => import("./components/Bio"));
const Proyectos = lazy(() => import("./components/Proyectos"));
const TimeLine = lazy(() => import("./components/TimeLine"));
const Skill = lazy(() => import("./components/Skill"));
const AboutMe = lazy(() => import("./components/AboutMe"));

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpg");
  background-position: center;
  background-size: cover;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
`;

const Background = styled.div`
  background-color: #20202037;
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Biografia />
      <Background>
        <Skill />
        <TimeLine />
        <Suspense
          fallback={<h1 style={{ textAlign: "center" }}>Cargando...</h1>}
        >
          <Proyectos />
          <AboutMe />
        </Suspense>
      </Background>
    </Container>
  );
}

export default App;
