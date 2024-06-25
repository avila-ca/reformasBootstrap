import { Alert, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Projects = () => {
    return (
        <>
        <div className='ms-5'>
        <Alert.Heading className='text-center m-5'>Nuestros Proyectos</Alert.Heading>
        <Row>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src/img/projects/project1.jpg" />
                <Card.Body>
                    <Card.Title>Reforma de Local Comercial</Card.Title>
                    <Card.Text>
                    Renovamos este local comercial con suelo de baldosas blancas, paredes revestidas de azulejos y pintadas en verde oscuro, instalación de aire acondicionado, nuevas luminarias y estanterías de madera. Un espacio funcional y estéticamente atractivo, listo para múltiples usos.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src/img/projects/project3.jpg" />
                <Card.Body>
                    <Card.Title>Reforma de Oficina</Card.Title>
                    <Card.Text>
                    Transformamos esta oficina con un nuevo suelo laminado, paredes pintadas en blanco y verde oscuro, instalación de aire acondicionado, muebles funcionales y una pizarra blanca para planificación. Ideal para un espacio de trabajo acogedor y moderno.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src/img/projects/project2.jpg" />
                <Card.Body>
                    <Card.Title>Reforma de Habitación</Card.Title>
                    <Card.Text>
                    Habitación renovada con ventanas en PVC mejorando el aislamiento térmico, paredes pintadas en blanco, instalación de aire acondicionado, tomas de enchufe, conmutadores e interruptores, iluminación suave y suelos de madera.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
        </Row>
        </div>
        </>
    )
}