import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Tarjeta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://www.elespectador.com/resizer/9MFOSETs5d2j-_Fre_izKhnz2H4=/657x0/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/HOIGAPKBX5CVTNZLKIOQZXZTLE.jpg"
        />
        <Card.Body>
          <Card.Title>Perro 1</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            Adoptar
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Perro 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, este cachorrito te acompañara en tus aventuras. 1 año. Hembra.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Adoptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tarjeta;
