import styled from "styled-components";
import { Fade, Bounce } from "react-reveal";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding: 2%;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding-bottom: 30px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 70vw;
  height: 70vh;
  margin: 2% auto 2%;
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
  padding: 5px;
  position: relative;
  max-width: 40%;
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  left: -2%;
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
  padding: 5px;
  position: relative;
  width: 50%;
  background: rgba(255, 255, 255, 0.1);
  right: -60%;
  max-width: 40%;
`;

const DotLeft = styled.span`
  border: 4px solid #fdfdfd;
  background: #fdfdfd;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 -27.2%;
  left: 75%;
  top: 4vh;
  z-index: 1;
`;
const DotRight = styled.span`
  border: 4px solid #fdfdfd;
  background: #fdfdfd;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 68%;
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
  left: -8.3%;
`;

const TitleData = styled.h2`
  font-size: 2rem;
`;
const Date = styled.small``;
const Description = styled.p`
  padding-top: 2%;
`;
const ContainerData = styled.div`
  padding: 10px 15px;
  position: relative;
  border-radius: 6px;
  font-size: 15px;
`;

const TimeLine = () => {
  return (
    <Section>
      <Title>Linea de tiempo</Title>
      <Timeline>
        <Bounce left>
          <Fade delay={1200}>
            <DotLeft />
          </Fade>
          <CardLeft>
            <ContainerData>
              <TitleData>Secundaria Tecnica</TitleData>
              <Date>2013 - 2018</Date>
              <Description>
                Me egrese como &quot;Tecnico informatico y auxiliar de
                programación&quot; en la escuela tecnica 32° D.E 14 &quot;José
                de San Martín&quot;. Dentro de la institucion aprendi las bases
                sobre la composicion de las computadoras y sobre todo las bases
                de la programacion. Mi primer lenguaje de alto nivel que aprendi
                fue &quot;Java&quot; y desde ahi fue mi punto de partida en lo
                que se el mundo de la programacion
              </Description>
              <ArrowLeft />
            </ContainerData>
          </CardLeft>
        </Bounce>
        <Bounce right delay={2000}>
          <Fade delay={2800}>
            <DotRight />
          </Fade>
          <CardRight>
            <ContainerData>
              <TitleData>Pasantia</TitleData>
              <Date>2018</Date>
              <Description>
                Realice la pasantia para el &quot;Ministerio de Espacios
                Publicos e Higiene Urbana&quot;. Comence como consultor de
                datos, utilizamos &quot;Power BI&quot; para poder manipular
                dicha informacion y plasmarlo en un graficos. Luego me pasaron a
                la area de de IA en el proyecto
              </Description>
              <ArrowRight />
            </ContainerData>
          </CardRight>
        </Bounce>
        <Bounce left delay={3400}>
          <Fade delay={4000}>
            <DotLeft />
          </Fade>
          <CardLeft>
            <ContainerData>
              <TitleData>Secundaria Tecnica</TitleData>
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
          <Fade delay={5200}>
            <DotRight />
          </Fade>
          <CardRight>
            <ContainerData>
              <TitleData>Secundaria Tecnica</TitleData>
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
