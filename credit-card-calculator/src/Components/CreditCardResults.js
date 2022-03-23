import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CreditCardResults(props) {
  console.log("The props to result component are" + props);

  const total = 0;

  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.type}</Card.Title>
        <Card.Text>
          With an APR of {props.apr} and monthly repayment amount of{" "}
          {props.monthlyRepayment} it will take x months to pay off this card
        </Card.Text>
        <Card.Text>The total amount that you repay will be: £{total}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
