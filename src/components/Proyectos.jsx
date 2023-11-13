import styled from "styled-components";
import Test from "./Test";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Proyectos = () => {
  return (
    <Section>
      <Test />
    </Section>
  );
};

export default Proyectos;
