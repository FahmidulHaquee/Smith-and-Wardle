import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreditCardForm from "./Components/CreditCardForm";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  document.title = "Money Means Credit Calculator!";
  function getNavBar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Money Means</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  return (
    <div className="App">
      {getNavBar()}
      <div className="main-content">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <main>
            <h1>Money Means Credit Card Calculator!</h1>
          </main>
          <main>
            <h3>
              Please enter as many cards as you like. There is a summary of all
              your cards available.{" "}
            </h3>
          </main>
          <div>
            <CreditCardForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
