import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreditCardForm from "./Components/CreditCardForm";

function App() {
  return (
    <div className="App">
      <h1>Money Means Credit Card Calculator!</h1>
      <div className="Credit-Card-Form">
        <CreditCardForm />
      </div>
    </div>
  );
}

export default App;
