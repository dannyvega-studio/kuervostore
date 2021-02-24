import React from 'react';
import lightsail from '../assets/images/lightsail.png';
import docker from '../assets/images/docker.png';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ContentSkillsCloud(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My Cloud Skills</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="docker" src={docker} />
                    <Card.Body>
                        <Card.Title>Docker</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img />
                </Col>

                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="lightsail" src={lightsail} />
                    <Card.Body>
                        <Card.Title>AWS Lightsail</Card.Title>
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

export default ContentSkillsCloud;