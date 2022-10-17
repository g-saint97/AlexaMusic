import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const styles = {
  player: {
    width: 40,
    height: 40,
    flex: 1,
    padding: 20,
  },
}

export const Projects = () => {

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Latest Projects</h2>
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
                        <h2>Alexa - No Quiere Na'</h2>
                        <ReactPlayer style={styles.player} url={'https://soundcloud.com/alexa-saint-hilaire/no-quiere-na?si=fec3ffbcbe154c718410565cc06420f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}/>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    <h2>Alexa - Drill'</h2>
                        <ReactPlayer style={styles.player} url={'https://soundcloud.com/alexa-saint-hilaire/drill?si=fec3ffbcbe154c718410565cc06420f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}/>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                        <h2>Alexa - Como Tu Quiera'</h2>
                        <ReactPlayer style={styles.player} url={"https://soundcloud.com/alexa-saint-hilaire/como-tu-quiera?si=fec3ffbcbe154c718410565cc06420f8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} />
                        </Row>
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