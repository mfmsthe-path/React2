import { useState } from 'react';
import Price from './Price';
import Name from'./Name';
import Description from './Description';
import Image from './Image';
import product from './product';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Card } from 'react-bootstrap';
import React from 'react';
const userName = 'MacBook';
 function App(){
  const { name, price, description, image } = product;

  const [firstName, setFirstName] = useState("");
  const handleInputChange = (e) => {
    setFirstName(e.target.value);
  };
return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Dk Technologie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   <Card style={{ width: '18rem' }}>
   <Image image={image} />
      <Card.Body>
        <Card.Title>
          <Name name={name} />
          </Card.Title>
        <Price price={price} />
        <Card.Text>
        <Description description={description} />
        </Card.Text>
        <Button variant="primary">add to cart</Button>
      </Card.Body>
     
    </Card>
    {firstName === userName ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src="/images/Apple-MacBook-Pro.jpg" alt="Votre image" />
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Bonjour, {firstName}!</p>
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Bonjour, là !</p>
      )}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input type="text" placeholder="Entrez votre prénom" onChange={handleInputChange} />
      </div>

    </>
)




 }
export default App;