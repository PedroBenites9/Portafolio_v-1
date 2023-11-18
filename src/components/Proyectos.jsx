import styled from "styled-components";
import Test from "./Test";

const Section = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: center;

  //..
  padding: 50px 0;
  display: grid;
  place-items: center;
`;

const Proyectos = () => {
  return (
    <Section>
      <Test />
      <div></div>
    </Section>
  );
};

export default Proyectos;
