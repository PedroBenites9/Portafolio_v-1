import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 109px auto;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 1;
    animation: moveline 6s linear forwards;
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
  padding: 10px 50px;
  position: relative;
  width: 40%;
  background: rgba(255, 255, 255, 0.1);
  left: -12%;
`;
const CardRight = styled.div`
  padding: 10px 50px;
  position: relative;
  width: 40%;
  background: rgba(255, 255, 255, 0.1);
  right: -60%;
`;

const Dot = styled.span`
  border: 4px solid #fdfdfd;
  background: rgb(155, 155, 155);
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 -27.2%;
  right: -29px;
  top: 32px;
  z-index: 2;
`;
const DotRight = styled.span`
  border: 4px solid #fdfdfd;
  background: rgb(155, 155, 155);
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: -29px;
  margin: 0 -20%;
  top: 32px;
  z-index: 2;
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
  right: -13.5%;
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
  left: -65px;
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
        <CardLeft data-aos="fade-left">
          <Dot />
          <ContainerData>
            <Title>Secundaria Tecnica</Title>
            <Date>2013 - 2018</Date>
            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              consectetur ipsam! Ad, cum incidunt cumque voluptatum quibusdam
              natus earum porro in. Veniam id nostrum praesentium, accusantium
              odio doloribus consequuntur ratione!
            </Description>
            <ArrowLeft />
          </ContainerData>
        </CardLeft>
        <CardRight>
          <DotRight />
          <ContainerData>
            <Title>Secundaria Tecnica</Title>
            <Date>2013 - 2018</Date>
            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              consectetur ipsam! Ad, cum incidunt cumque voluptatum quibusdam
              natus earum porro in. Veniam id nostrum praesentium, accusantium
              odio doloribus consequuntur ratione!
            </Description>
            <ArrowRight />
          </ContainerData>
        </CardRight>
        <CardLeft>
          <Dot />
          <ContainerData>
            <Title>Secundaria Tecnica</Title>
            <Date>2013 - 2018</Date>
            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              consectetur ipsam! Ad, cum incidunt cumque voluptatum quibusdam
              natus earum porro in. Veniam id nostrum praesentium, accusantium
              odio doloribus consequuntur ratione!
            </Description>
            <ArrowLeft />
          </ContainerData>
        </CardLeft>
        <CardRight>
          <DotRight />
          <ContainerData>
            <Title>Secundaria Tecnica</Title>
            <Date>2013 - 2018</Date>
            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              consectetur ipsam! Ad, cum incidunt cumque voluptatum quibusdam
              natus earum porro in. Veniam id nostrum praesentium, accusantium
              odio doloribus consequuntur ratione!
            </Description>
            <ArrowRight />
          </ContainerData>
        </CardRight>
      </Timeline>
    </Section>
  );
};

export default TimeLine;
