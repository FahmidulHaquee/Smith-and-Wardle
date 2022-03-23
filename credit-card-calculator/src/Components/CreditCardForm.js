import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CreditCardResults from "./CreditCardResults";
import "./CreditCardForm.css";

export default function CreditCardForm() {
  // const [cards, setCards] = useState([
  //   { type: "Bank", name: "Capital One", APR: "5%", MonthlyRepayment: "£10" },
  // ]);
  const [cardType, setCardType] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardBalance, setCardBalance] = useState("");
  const [cardAPR, setCardAPR] = useState("");
  const [cardMonthlyRepayment, setCardMonthlyRepayment] = useState("");

  // console.log(cards);

  // useEffect(() => {
  //   console.log("Updating cards");
  //   updateCards();
  // }, [cards]);

  // function updateCards() {
  //   setCards((prevState) => {
  //     return [
  //       ...prevState,
  //       {
  //         type: cardType,
  //         name: cardName,
  //         apr: cardAPR,
  //         monthlyRepayment: cardMonthlyRepayment,
  //       },
  //     ];
  //   });
  //   console.log(cards);
  // }

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

  function handleSubmit() {
    return <CreditCardResults />;
  }

  // Needs to be called after form values submitted
  // Maybe pass into a useEffect hook
  function resetState() {
    // clear values
    setCardType("");
    setCardName("");
    setCardBalance("");
    setCardAPR("");
    setCardMonthlyRepayment("");
  }

  // function getAllCards() {
  //   const cardsList = cards.map((item) => {
  //     return (
  //       <CreditCardResults
  //         type={item.type}
  //         name={item.name}
  //         apr={item.APR}
  //         monthlyRepayment={item.MonthlyRepayment}
  //       />
  //     );
  //   });
  //   return cardsList;
  // }

  function getForm() {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group id="test" className="mb-3">
          <Form.Label>What is the card type?</Form.Label>
          <Form.Control
            type="text"
            value={cardType}
            placeholder="e.g. Store Card, Bank Card"
            required
            onChange={handleCardTypeChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Give this card a nickname</Form.Label>
          <Form.Control
            type="text"
            value={cardName}
            placeholder="e.g. Capital One Mastercard, Argos Store Card"
            required
            onChange={handleCardNameChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            What is the outstanding balance on this card??
          </Form.Label>
          <Form.Control
            type="text"
            value={cardBalance}
            placeholder="e.g. £500"
            required
            onChange={handleCardBalanceChange}
          />
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
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>What is monthly repayment on this card?</Form.Label>
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
        <Button variant="primary" type="reset">
          Reset Form
        </Button>
      </Form>
    );
  }
  return (
    <div>
      {getForm()}
      {/* {getAllCards()} */}
    </div>
  );
}
