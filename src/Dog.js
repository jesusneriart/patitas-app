import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function HomePage() {
  const backgroundStyle = {
    background: '#feb870', // Fondo de color naranja
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <Container>
        <Row>
          <Col>
          <img
                src="https://static.vecteezy.com/system/resources/previews/009/344/670/non_2x/dog-paw-free-png.png"
                alt="Pata de perro"
                width="100" // Ajusta el ancho de la imagen según tu preferencia
              />
              <br />
            <h1>
              Búsqueda de Perros en Adopción
              
              
            </h1>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Buscar perros..." />
              </Form.Group>
              <br />
              <Button variant="secondary" type="submit">
                Buscar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
