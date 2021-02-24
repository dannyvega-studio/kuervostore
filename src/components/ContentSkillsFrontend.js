import React from 'react';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import nodejs from '../assets/images/nodejs.png';
import reactjs from '../assets/images/reactjs.png';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ContentSkillsFrontend(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My Frontend Skills</h1>
                </Col>
            </Row>
            
            <Row className="justify-content-center mt-4">
                
                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="html" src={html} />
                    <Card.Body>
                        <Card.Title>HTML</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img />
                </Col>
                
                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="css" src={css} />
                    <Card.Body>
                        <Card.Title>CSS</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img />
                </Col>

                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="javascript" src={javascript} />
                    <Card.Body>
                        <Card.Title>Javascript</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img />
                </Col>
                
                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="nodejs" src={nodejs} />
                    <Card.Body>
                        <Card.Title>Node JS</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img />
                </Col>

                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="reactjs" src={reactjs} />
                    <Card.Body>
                        <Card.Title>React JS</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img />
                </Col>

            </Row>

        </Container>
    );

}

export default ContentSkillsFrontend;