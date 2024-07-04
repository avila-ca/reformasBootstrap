import Carousel from "react-bootstrap/esm/Carousel"
import local from '../img/projects/localEspejo.jpeg'
import biombo from '../img/projects/biomboMadera.jpeg'
import salon from '../img/projects/salaEstar.jpeg'
import cocina from '../img/projects/cocina.jpeg'
import banyo from '../img/projects/baño1.jpeg'
import './carouselStyle.css'


export const Home = () => {
    return (
        <>
            <main className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4">Reformas Integrales</h1>
                    <p className="lead">Transformamos tu hogar y local comercial</p>
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img  img-fluid d-block w-100 rounded mx-auto" src={local} />
                            <Carousel.Caption className="bg-secondary bg-opacity-25 rounded">
                                <h3>Renovación de Gimnasio de Artes Marciales</h3>
                                <p>Instalación de un gran espejo de pared a pared, junto con una nueva capa de pintura blanca. Además, se ha colocado un nuevo suelo de vinilo resistente y fácil de limpiar, perfecto para actividades intensivas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="carousel-img  d-block img-fluid w-100 rounded mx-auto" src={biombo} />
                        <Carousel.Caption className="bg-secondary bg-opacity-25 rounded">
                                <h3>Reforma de Espacio Exterior</h3>
                                <p>Ésta área exterior ha sido mejorada significativamente con la instalación de un elegante panel de madera tratada, proporcionando un toque natural y cálido. </p>
                            </Carousel.Caption >
                        </Carousel.Item>
                        <Carousel.Item >
                        <img className="carousel-img  d-block img-fluid w-100 rounded mx-auto" src={salon} />
                            <Carousel.Caption className="bg-secondary bg-opacity-25 rounded">
                                <h3>Tranformamos Sala de Estar</h3>
                                <p>Cambiamos el antiguo suelo por parquet laminado, con revestimiento de paredes, pintadas en blanco. Añadiendo la instalación de lámpara de techo moderna. Conseguiendo una zona moderna y con gran luminosidad.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="carousel-img  d-block img-fluid w-100 rounded mx-auto" src={cocina} />
                            <Carousel.Caption className="bg-secondary bg-opacity-25 rounded">
                                <h3>Cocina modernizada y funcional</h3>
                                <p>Transformamos una cocina antigua en un espacio moderno y funcional. Esta reforma integral incluyó la instalación de nuevos electrodomésticos de alta eficiencia energética, armarios a medida con acabados elegantes y duraderos, y una nueva encimera de granito. Además, se renovó el sistema de iluminación con luces LED para una mayor luminosidad y se incorporó un backsplash de azulejos contemporáneos que añade un toque de estilo. El resultado es una cocina que no solo es estéticamente agradable sino también altamente funcional, facilitando una experiencia culinaria más cómoda y agradable
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="carousel-img  d-block img-fluid w-100 rounded mx-auto" src={banyo} />
                            <Carousel.Caption className="bg-secondary bg-opacity-25 rounded">
                                <h3>Baño de Lujo con Detalles Modernos</h3>
                                <p>Hemos transformado este baño en un verdadero oasis de lujo y modernidad. La renovación incluyó la instalación de elegantes luces de buey en el techo, proporcionando una iluminación suave y ambiental. Las paredes fueron revestidas con mármol de alta calidad, aportando un toque sofisticado y atemporal al espacio. El plato de ducha fue completamente renovado, utilizando revestimiento de rachola imitando pizarra, lo que añade un contraste moderno y elegante. Cada detalle ha sido cuidadosamente seleccionado para crear un baño que no solo es funcional, sino también un refugio de estilo y confort.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </main>
        </>
    )
}