import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Please feel free to check out my beats on SoundCloud! </p>
                <p>They are also available for sale on <a href="https://airbit.com/asaint02">Airbits</a> </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <h2>Go listen to my latest song "Como Tu Quiera'"! </h2>
                        <h2>the <a href="https://soundcloud.com/alexa-saint-hilaire/como-tu-quiera">Click</a> here to listen</h2>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        <h2>Go listen to my latest song "Drill"! </h2>
                        <h2>the <a href="https://soundcloud.com/alexa-saint-hilaire/drill">Click</a> here to listen</h2>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <h2>Go listen to my latest song "CRAZY"! </h2>
                        <h2>the <a href="https://soundcloud.com/alexa-saint-hilaire/crazy">Click</a> here to listen</h2>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" ></img>
    </section>
  )
}