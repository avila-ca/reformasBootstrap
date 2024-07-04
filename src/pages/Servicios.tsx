import { Alert, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import banyoPared from '../img/projects/baño2.jpeg'
import parquet from '../img/projects/pasillo.jpeg'
import pladur from '../img/projects/pladur.jpeg'
import barnizado from '../img/projects/barnizando.jpeg'
import leds from '../img/projects/leds.png'
import banyoresvestido from '../img/projects/baño3.jpeg'


export const Servicios = () => {
    return (
        <>
        <div className='ms-5'>
        <Alert.Heading className='text-center m-5'>Nuestros Principales Servicios </Alert.Heading>
        <Row className='d-flex justify-content-center'>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Body className='bg-warning bg-opacity-10'>
                    <Card.Img variant="top" src={parquet}/>

                    <Card.Title>Instalación de Suelos</Card.Title>
                    <Card.Text>
                    Nuestro servicio de instalación de suelos transforma cualquier espacio, aportando belleza y funcionalidad. Ofrecemos una amplia gama de opciones, desde suelos de madera hasta baldosas de cerámica y vinilo de lujo. Nos aseguramos de utilizar materiales de alta calidad y técnicas de instalación profesionales para garantizar un acabado duradero y estéticamente agradable. Ya sea que esté renovando una habitación individual o todo su hogar, nuestro equipo está preparado para brindarle un servicio impecable y personalizado.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Body className='bg-danger bg-opacity-10'>
                <Card.Img variant="top" src={pladur} />

                    <Card.Title>Montaje de Techos de Pladur</Card.Title>
                    <Card.Text>
                    El montaje de techos de pladur es una solución moderna y eficiente para mejorar la estética y funcionalidad de cualquier espacio. Nuestro servicio incluye la instalación de placas de yeso laminado (pladur), que son ideales para crear techos lisos y elegantes. Además de su atractivo estético, los techos de pladur ofrecen beneficios adicionales como aislamiento acústico y térmico. Nuestro equipo de expertos se encarga de cada detalle, desde el diseño inicial hasta la instalación final, asegurando un resultado que cumple con los más altos estándares de calidad.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Body className='bg-info bg-opacity-10'>
                    <Card.Img variant="top" src={barnizado}/>

                    <Card.Title>Servicios de Pintura</Card.Title>
                    <Card.Text>
                    La pintura es una de las maneras más rápidas y efectivas de revitalizar cualquier espacio. Nuestro servicio de pintura incluye desde la preparación de superficies hasta la aplicación final de la pintura, utilizando productos de alta calidad y técnicas profesionales para garantizar un acabado perfecto. Ofrecemos una variedad de opciones de color y tipo de pintura, adaptándonos a las necesidades y preferencias de cada cliente. Ya sea para interiores o exteriores, nuestro equipo está comprometido a transformar su hogar con un trabajo de pintura impecable y duradero.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Body className='bg-success bg-opacity-10'>
                    <Card.Img variant="top" src={leds}/>
                    <Card.Title>Instalación de Iluminación LED</Card.Title>
                    <Card.Text>
                    La iluminación adecuada es esencial para cualquier local comercial. Nuestro servicio de instalación de sistemas de iluminación comercial incluye soluciones personalizadas que mejoran la visibilidad, la seguridad y la estética de su negocio. Ofrecemos una amplia gama de opciones, desde iluminación ambiental y de acento hasta luces LED de alta eficiencia energética. Nuestro equipo de profesionales se encarga del diseño, la instalación y el mantenimiento de su sistema de iluminación, asegurando que su local tenga la iluminación perfecta para crear el ambiente deseado y resaltar sus productos o servicios.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem'}}>
                <Card.Body className='bg-primary bg-opacity-10'>
                    <Card.Img variant="top" src={banyoPared} />
                    <Card.Title>Reformas de Cocinas y Baños</Card.Title>
                    <Card.Text>
                    Las reformas de cocinas y baños son una excelente manera de renovar espacios clave de su hogar. Nuestro servicio incluye el diseño y la remodelación completa de estos espacios, utilizando materiales de alta calidad y las últimas tendencias en decoración. Desde la instalación de nuevos azulejos y encimeras hasta la modernización de electrodomésticos y accesorios, nos aseguramos de crear un ambiente funcional y estéticamente agradable. Nuestro equipo de diseñadores y constructores trabaja en estrecha colaboración con usted para hacer realidad su visión, optimizando cada detalle para su máxima satisfacción.                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
            <Card className='m-5' style={{ width: '18rem' }}>
                <Card.Body className='bg-dark bg-opacity-10'>
                <Card.Img variant="top" src={banyoresvestido} />
                    <Card.Title>Revestimientos de Paredes y Suelos</Card.Title>
                    <Card.Text>
                    Transforme su baño con nuestros servicios de revestimientos de paredes y suelos. Ofrecemos una amplia gama de materiales, incluyendo azulejos de cerámica, porcelana, piedra natural y vinilo de lujo. Nuestros expertos en instalación aseguran que cada baldosa esté perfectamente colocada para un acabado duradero y estéticamente atractivo. Además, nos especializamos en la impermeabilización y preparación de superficies para garantizar que su baño no solo luzca espectacular, sino que también sea resistente a la humedad y fácil de mantener.
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                </Card.Body>
            </Card>
        </Row>
        </div>
        </>
    )
}