import { Col, Container, Nav, Navbar, Image, Row } from "react-bootstrap"
import { Props } from "./Footer";
import { Link } from "react-router-dom";

export const Header = (props:Props) => {
   
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container className=" justify-content-between">
                    <Row className="w-100 justify-content-between align-items-center">
                        <Col xs="auto"> 
                            <div className="d-flex align-items-center">
                                <Image className="w-25" src={`${process.env.PUBLIC_URL}/src/img/logo/logo.png`}/>
                                <Navbar.Brand href="#home" className="ms-2">{props.label}</Navbar.Brand>
                            </div>
                        </Col>
                        <Col  xs="auto">
                            <Nav className="me-auto justify-content-end">
                                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/projects">Proyectos</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}
