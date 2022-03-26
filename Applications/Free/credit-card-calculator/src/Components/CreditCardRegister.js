import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function CreditCardRegister(props) {
  const [cardType, setCardType] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardBalance, setCardBalance] = useState("");
  const [cardAPR, setCardAPR] = useState("");
  const [cardMonthlyRepayment, setCardMonthlyRepayment] = useState("");

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardBalanceChange = (e) => {
    setCardBalance(e.target.value);
  };

  const handleCardAPRChange = (e) => {
    setCardAPR(e.target.value);
  };

  const handleCardMonthlyRepaymentChange = (e) => {
    setCardMonthlyRepayment(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.updateCards(
      cardType,
      cardName,
      cardBalance,
      cardAPR,
      cardMonthlyRepayment
    );
    props.toggleToast();
    resetState();
  }

  function resetState() {
    setCardType("");
    setCardName("");
    setCardBalance("");
    setCardAPR("");
    setCardMonthlyRepayment("");
  }

  function getForm() {
    return (
      <Accordion></Accordion>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group id="test" className="mb-3">
          <Form.Label>What is the Credit Card type?</Form.Label>
          <Form.Control
            type="text"
            value={cardType}
            placeholder="e.g. Store Card, Bank Card"
            required
            onChange={handleCardTypeChange}
          />
          <Form.Text>&nbsp;</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Give this Card a Nickname 😀</Form.Label>
          <Form.Control
            type="text"
            value={cardName}
            placeholder="e.g. Capital One Mastercard, Argos Store Card"
            required
            onChange={handleCardNameChange}
          />
          <Form.Text>&nbsp;</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What is the Outstanding Balance on this Card?</Form.Label>
          <Form.Control
            type="text"
            value={cardBalance}
            placeholder="e.g. £500"
            required
            onChange={handleCardBalanceChange}
          />
          <Form.Text>&nbsp;</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What is the APR on this card?</Form.Label>
          <Form.Control
            type="text"
            value={cardAPR}
            placeholder="e.g. 4%"
            required
            onChange={handleCardAPRChange}
          />
          <Form.Text>&nbsp;</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What is Monthly Repayment on this card?</Form.Label>
          <Form.Control
            type="text"
            value={cardMonthlyRepayment}
            placeholder="e.g. £35"
            required
            onChange={handleCardMonthlyRepaymentChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Card Data
        </Button>
        &nbsp; &nbsp;
        <Button onClick={resetState} variant="outline-primary" type="reset">
          Reset Form
        </Button>
      </Form>
    );
  }
  return <div className="form">{getForm()}</div>;
}
