import Alert from "react-bootstrap/esm/Alert"
import Form from "react-bootstrap/esm/Form"

export const Contact = () => {
    return (
        <>
            <main className="container">
                <Alert.Heading className="text-center">Contacta con nosotros:</Alert.Heading>
            <Form className="ms-3 me-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Su mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            </main>
                    </>
    )
}