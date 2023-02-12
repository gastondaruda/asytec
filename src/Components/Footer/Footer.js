import React from "react"
import {Button,Container, Row, Col} from 'react-bootstrap';
import resume from "../../pdf/FrontendDeveloperJr.pdf"


export default function Footer(){
    return(
        <Container>
            <Row>
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                    <h3>Proyecto realizado por Gastón Da Ruda - Frontend Developer Jr</h3>
                </Col>
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                    <Button variant="success">
                        <a className="text-decoration-none text-white" download={resume} href={resume}>Cv</a>
                    </Button>
                    <Button variant="primary">
                        <a href="https://gastondaruda.github.io/Portfolio-Frontend/" className="text-decoration-none text-white" target="_blank" rel="noreferrer">Porfolio</a>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}