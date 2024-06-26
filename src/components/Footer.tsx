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
                            <p>Síguenos en:</p>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                                <FontAwesomeIcon icon={faFacebook} className="mx-2" />
                                <FontAwesomeIcon icon={faInstagram} className="mx-2" />
                            </div>
                        </Col>
                        <Col >
                            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <p className="">Contacto:</p>
                                <ul className="list-unstyled mb-0">
                                    <li>Email:<a href="mailto:" className="text-dark"> info@reformasintegrales.com</a></li>
                                    <li>Teléfono:<a href="tel:" className="text-dark"> +34 123 456 789</a></li>
                                </ul>
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