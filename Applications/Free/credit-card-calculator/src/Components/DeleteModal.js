import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function DeleteModal(props) {
  function handleDelete() {
    props.handleDelete();
  }
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Are you sure you want to remove this card? This action is
          irreversible.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group className="mb-3"></Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete} variant="outline-danger">
          Remove Card
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
