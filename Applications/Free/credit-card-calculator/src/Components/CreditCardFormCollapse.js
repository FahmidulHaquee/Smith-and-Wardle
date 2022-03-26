import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

export default function CreditCardFormCollapse() {
  function getForm() {
    return (
      <Accordion>
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
            <Form.Label>
              What is the Outstanding Balance on this Card?
            </Form.Label>
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
      </Accordion>
    );
  }
  return <div>getForm()</div>;
}
