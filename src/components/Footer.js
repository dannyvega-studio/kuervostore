import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaUser, FaIdCard } from 'react-icons/fa';

function Footer() {

    return(
        <footer>
            <Container>
                <Row className="border-top justify-content-between p-3">

                    <Col className="p-0 d-flex flex-column justify-content-center mt-3 mb-3" lg={4} md={3}>
                        <p class="mb-2"><FaUser className="ml-3 mr-3" /> Follow Me: </p>
                        <p><a href="https://www.facebook.com/kuervonline" target="_blank" class="mr-2">
                            <FaFacebookSquare className="facebook-icon" />
                        </a> Facebook</p>
                    </Col>
                    
                    <Col className="p-0 d-flex flex-column justify-content-center mt-3 mb-3" lg={4} md={3}>
                            <p><h4><FaIdCard className="ml-3 mr-3" /> CONTACT ME: </h4></p>
                            <p>Phone: (+52) 81-8054-5492</p>
                            <p>Mail me! just click right <a href="mailto:cesar.berlanga@gmail.com?Subject=Interesado%20en%20sus%20Servicios">HERE</a></p>
                            
                    </Col>

                    <Col className="p-0 d-flex justify-content-center mt-3 mb-3 text-center" lg={4} md={3}>
                        
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;