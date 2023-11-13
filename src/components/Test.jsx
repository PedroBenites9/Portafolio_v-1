import styled from "styled-components";
import Model3d from "./Model3d";

const Container = styled.div`
  height: 70vh;
  width: 50%;
  height: 50vh;
  width: 50%;
  margin: 0 auto;
`;

const Test = () => {
  return (
    <Container>
      <Model3d />
    </Container>
  );
};

export default Test;
