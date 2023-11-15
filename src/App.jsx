import Bio from "./components/Bio";
import Proyectos from "./components/Proyectos";
import TimeLine from "./components/TimeLine";
import styled from "styled-components";
import "./css/style.css";
// react-reveal animate

import "aos/dist/aos.css";

const Container = styled.div`
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

function App() {
  return (
    <Container>
      <Bio />
      <TimeLine />
      <Proyectos />
    </Container>
  );
}

export default App;
