import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

export default function CreditCardResults(props) {
  // const totalMonths = 0;
  // const estimatedDate = new Date();
  // const currentDate = new Date().toDateString;

  function showDeleteModal() {
    props.showDeleteModal();
  }

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {props.name}: {props.type}
        </Accordion.Header>
        <Accordion.Body>
          With an APR of {props.apr} and monthly repayment amount of{" "}
          {props.monthlyRepayment}, it will take x months to pay off this card.
          The card will be repaid by
        </Accordion.Body>
        <Accordion.Body>
          <Button variant="outline-danger" onClick={showDeleteModal}>
            Remove Card
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
