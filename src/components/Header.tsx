import { Col, Container, Nav, Navbar, Image, Row } from "react-bootstrap"
import { Props } from "./Footer";

export const Header = (props:Props) => {
   
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container className=" justify-content-between">
                    <Row className="w-100 justify-content-between align-items-center">
                        <Col xs="auto"> 
                            <div className="d-flex align-items-center">
                                <Image className="w-25" src="reformasBootstrap/src/img/logo/logo.png" />
                                <Navbar.Brand href="#home" className="ms-2">{props.label}</Navbar.Brand>
                            </div>
                        </Col>
                        <Col  xs="auto">
                            <Nav className="me-auto justify-content-end">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="/projects">Proyectos</Nav.Link>
                                <Nav.Link href="/contact">Contacto</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}
