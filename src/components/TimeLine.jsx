import styled from "styled-components";
import { Fade, Bounce } from "react-reveal";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 60%;
  margin: 3% 0;
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    background: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 0;
    animation: moveline 7s linear forwards;
  }
  @keyframes moveline {
    0% {
      height: 0;
    }

    100% {
      height: 100%;
    }
  }
`;
const CardLeft = styled.div`
  padding: 1% 2%;
  position: relative;
  max-width: 40%;
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  left: -5%;
  /* animation: fade-down 2s;
  &:first-child {
    margin-bottom: 15%;
  }
  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: traslateY(-30px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: traslateY(0) scale(1);
    }
  } */
`;
const CardRight = styled.div`
  padding: 1% 2%;
  position: relative;
  width: 50%;
  background: rgba(255, 255, 255, 0.1);
  right: -60%;
`;

const DotLeft = styled.span`
  border: 4px solid #fdfdfd;
  background: #fdfdfd;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 -27.2%;
  right: -2.5%;
  top: 32px;
  z-index: 1;
`;
const DotRight = styled.span`
  border: 4px solid #fdfdfd;
  background: #fdfdfd;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: -2.5%;
  margin: 0 -20%;
  top: 32px;
  z-index: 1;
`;
const ArrowLeft = styled.span`
  height: 0;
  width: 0;
  position: absolute;
  top: 40px;
  z-index: 1;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 15px solid rgba(255, 255, 255, 0.1);
  right: -8.3%;
`;
const ArrowRight = styled.span`
  height: 0;
  width: 0;
  position: absolute;
  top: 29px;
  z-index: 1;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 15px solid rgba(255, 255, 255, 0.1);
  left: -6.7%;
`;

const Title = styled.h2``;
const Date = styled.small``;
const Description = styled.p``;
const ContainerData = styled.div`
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
`;

const TimeLine = () => {
  return (
    <Section>
      <Timeline>
        <Bounce left>
          <CardLeft>
            <Fade delay={1200}>
              <DotLeft />
            </Fade>
            <ContainerData>
              <Title>Secundaria Tecnica</Title>
              <Date>2013 - 2018</Date>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, consectetur ipsam! Ad, cum incidunt cumque voluptatum
                quibusdam natus earum porro in. Veniam id nostrum praesentium,
                accusantium odio doloribus consequuntur ratione!
              </Description>
              <ArrowLeft />
            </ContainerData>
          </CardLeft>
        </Bounce>
        <Bounce right delay={2000}>
          <CardRight>
            <Fade delay={2800}>
              <DotRight />
            </Fade>
            <ContainerData>
              <Title>Secundaria Tecnica</Title>
              <Date>2013 - 2018</Date>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, consectetur ipsam! Ad, cum incidunt cumque voluptatum
                quibusdam natus earum porro in. Veniam id nostrum praesentium,
                accusantium odio doloribus consequuntur ratione!
              </Description>
              <ArrowRight />
            </ContainerData>
          </CardRight>
        </Bounce>
        <Bounce left delay={3400}>
          <CardLeft>
            <Fade delay={4000}>
              <DotLeft />
            </Fade>
            <ContainerData>
              <Title>Secundaria Tecnica</Title>
              <Date>2013 - 2018</Date>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, consectetur ipsam! Ad, cum incidunt cumque voluptatum
                quibusdam natus earum porro in. Veniam id nostrum praesentium,
                accusantium odio doloribus consequuntur ratione!
              </Description>
              <ArrowLeft />
            </ContainerData>
          </CardLeft>
        </Bounce>
        <Bounce right delay={4600}>
          <CardRight>
            <Fade delay={5200}>
              <DotRight />
            </Fade>
            <ContainerData>
              <Title>Secundaria Tecnica</Title>
              <Date>2013 - 2018</Date>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, consectetur ipsam! Ad, cum incidunt cumque voluptatum
                quibusdam natus earum porro in. Veniam id nostrum praesentium,
                accusantium odio doloribus consequuntur ratione!
              </Description>
              <ArrowRight />
            </ContainerData>
          </CardRight>
        </Bounce>
      </Timeline>
    </Section>
  );
};

export default TimeLine;
