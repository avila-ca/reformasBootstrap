import Alert from "react-bootstrap/esm/Alert"
import Form from "react-bootstrap/esm/Form"
import emailjs from '@emailjs/browser'


export const Contact = () => {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        emailjs.sendForm('service_hwvagn1', 'template_0fkyhfi', e.currentTarget, {
        publicKey:'yQDMSWDoWi3B54e6u'})
        .then(
        () => {
          console.log('Email enviado correctamente!');
        },
        (error) => {
          console.log('Error...', error.text);
        },
      );
    }
    return (
        <>
            <main className="container">
                <Alert.Heading className="text-center">Contacta con nosotros:</Alert.Heading>
                <Form className="ms-3 me-3" onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="nombre" id="name" name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" id="email" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                        <Form.Label>Su mensaje:</Form.Label>
                        <Form.Control as="textarea" rows={3} id="message" name="message"/>
                    </Form.Group>
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </Form>
            </main>
        </>
    )
}