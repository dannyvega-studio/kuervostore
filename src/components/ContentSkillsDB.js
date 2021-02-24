import React from 'react';
import mongodb from '../assets/images/mongodb.png';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ContentSkillsDB(props) {

    return(
        <Container fluid={true}>
            
            <Row className="justify-content-center mt-4">
                <Col lg={12}>
                    <h1 class="about-skill-tittle">My Database Skills</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                
                <Col md={4} sm={6}>
                    <Card.Img className="about-skill mb-4" variant="top" alt="mongoDB" src={mongodb} />
                    <Card.Body>
                        <Card.Title>MongoDB</Card.Title>
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

export default ContentSkillsDB;