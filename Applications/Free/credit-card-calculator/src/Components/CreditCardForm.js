import React, { useState } from "react";
import CreditCardRegister from "./CreditCardRegister";
import CreditCardResults from "./CreditCardResults";
import DeleteModal from "./DeleteModal";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

export default function CreditCardForm() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [cardsArr, setCardsArr] = useState([
    {
      Type: "Bank Card",
      Name: "Capital One MasterCard",
      Balance: "£500",
      APR: "4%",
      MRP: "£50",
    },
  ]);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowA(!showB);

  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  };

  function updateCards(
    cardType,
    cardName,
    cardBalance,
    cardAPR,
    cardMonthlyRepayment
  ) {
    setCardsArr((prevCardsArr) => {
      return [
        ...prevCardsArr,
        {
          Type: cardType,
          Name: cardName,
          Balance: cardBalance,
          APR: cardAPR,
          MRP: cardMonthlyRepayment,
        },
      ];
    });
  }

  function deleteCard() {
    //
  }

  function getAllCards() {
    const cardsList = cardsArr.map((item, index) => {
      return (
        <Container key={index} className="py-2 m-2 p-2">
          <CreditCardResults
            key={index}
            type={item.Type}
            name={item.Name}
            apr={item.APR}
            balance={item.Balance}
            monthlyRepayment={item.MRP}
            deleteCard={deleteCard}
          />{" "}
        </Container>
      );
    });
    return cardsList;
  }

  let time;

  function getToasts() {
    return (
      <ToastContainer className="p-3" position="middle-end">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Money Means</strong>
            <small>{time} mins ago</small>
          </Toast.Header>
          <Toast.Body>Card Added!</Toast.Body>
        </Toast>
        <Toast show={showB} onClose={toggleShowB}>
          <Toast.Header>
            <strong className="me-auto">Money Means</strong>
            <small>{time} mins ago</small>
          </Toast.Header>
          <Toast.Body>Deleted Card!</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  }

  function printToPDF() {
    window.print();
  }

  function getSummary() {
    return (
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Credit Summary</Accordion.Header>
          <Accordion.Body>
            Total number of cards: {cardsArr.length}
          </Accordion.Body>
          <Accordion.Body>
            Date debt will ultimately be paid off:
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

  return (
    <div>
      <main>
        <CreditCardRegister
          updateCards={updateCards}
          toggleToast={toggleShowA}
        />
      </main>
      <main>
        <h4>View your results here:</h4>
        {getAllCards()}
      </main>
      <DeleteModal
        show={showDelete}
        handleClose={handleShowDelete}
        handleDelete={deleteCard}
      />
      <main>{getSummary()}</main>
      <Button variant="primary">Clear Page</Button> &nbsp; &nbsp;
      <Button onClick={printToPDF} variant="outline-primary">
        Save to PDF
      </Button>
      {getToasts}
    </div>
  );
}
