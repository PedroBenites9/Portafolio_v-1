import Bio from "./components/Bio";
import Proyectos from "./components/Proyectos";
import TimeLine from "./components/TimeLine";
import styled from "styled-components";

// react-reveal animate
import Skill from "./components/skill";
import AboutMe from "./components/AboutMe";

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
  background-color: #2e2e2e37;
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Bio />
      <Background>
        <Skill />
        <TimeLine />
        <Proyectos />
        <AboutMe />
      </Background>
    </Container>
  );
}

export default App;
