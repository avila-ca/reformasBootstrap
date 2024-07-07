import { Col, Container, Nav, Navbar, Image, Row } from "react-bootstrap"

export const Header = () => {
    return (
        <>

            <Navbar bg="light" data-bs-theme="light">
                <Container className=" justify-content-between">
                    <Row className="w-100 justify-content-between align-items-center">
                        <Col xs="auto"> 
                            <div className="d-flex align-items-center">
                                <Image className="w-25" src="src/img/logo.png" />
                                <Navbar.Brand href="#home" className="ms-2">Reformas Integrales</Navbar.Brand>
                            </div>
                        </Col>
                        <Col xs="autogit pull
                        ">
                            <Nav className="me-auto justify-content-end">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    );
}

/* <header className="flex items-center rounded-t-md text-center h-10 px-10 bg-gray-600 font-bold uppercase italic">
    <div className="flex-grow text-left">
        <a
        href="/"
        className="flex hover:opacity-60"
        >
            <img className="w-10" src="src/img/logo.png" alt="logo empresa" />
            <h3>Refor-Mas</h3>
        </a>
    </div>
    <div className="flex items-center space-x-4">
        <a href="tel:+003433333333" className="flex items-center space-x-2 hover:opacity-60">
        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
        </svg>

            <p className="text-white">3333333</p>
        </a>
        <a href="mailto:jhon@gmail.com" className="flex items-center space-x-2 hover:opacity-60">
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="1.6" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>
            <p className="text-white">john@gmail.com</p>
        </a>
    </div>
</header> */
