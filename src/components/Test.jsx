import styled from "styled-components";
import Model3d from "./Model3d";

const Container = styled.div`
  height: 40vh;
  width: 20%;
`;

const Test = () => {
  return (
    <Container>
      <Model3d />
    </Container>
  );
};

export default Test;
