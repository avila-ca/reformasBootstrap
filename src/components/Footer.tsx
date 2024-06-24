import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


export interface Props {
    label?: React.ReactNode;
}
export const Footer = (_props: Props) => {

    return (
        <>
            <footer className="bg-light py-4">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>Conecta con nosotros en:</p>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                                <FontAwesomeIcon icon={faFacebook} className="mx-2" />
                                <FontAwesomeIcon icon={faInstagram} className="mx-2" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center py-3">
                            <p className="text-muted">© 2024 {_props.label}. Todos los derechos reservados.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}