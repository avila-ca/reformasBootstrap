import { Col, Container, Nav, Navbar, Image, Row } from "react-bootstrap"
import { Props } from "./Footer";
import { Link } from "react-router-dom";
import logo2 from '../img/logo/REFORMA_INTEGRAL-removebg-preview-removebg-preview.png'
export const Header = (props:Props) => {
   
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container className=" justify-content-between">
                    <Row className="w-100 justify-content-between align-items-center">
                        <Col xs="auto"> 
                            <div className="d-flex align-items-center">
                                <Image className="w-25 " src={logo2}/>
                                <Navbar.Brand href="#home" className="ms-2" style={{fontFamily: "Nimbus Sans"}} >{props.label}</Navbar.Brand>
                            </div>
                        </Col>
                        <Col  xs="auto">
                            <Nav className="me-auto justify-content-end">
                                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/projects">Proyectos</Nav.Link>
                                <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}
