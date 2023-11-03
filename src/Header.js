import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white', // Cambia el color de fondo según tus preferencias
    zIndex: 1000, // Asegura que esté en el nivel superior
  };

  return (
    <div style={headerStyle} className="sticky-header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Patitas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Adoptar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
