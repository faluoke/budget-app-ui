import React from "react";
import {
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseModalButton,
  ActionButton
} from "../styles/StyledModal";

export default function Modal(props) {
  const handleOnClick = () => {
    console.log(props.budgetId);
    props.addTransaction(
      props.transactionName,
      props.transactionType,
      props.transactionAmount,
      props.budgetId
    );
  };
  return (
    <ModalWrapper
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <ModalHeader className="modal-header">
        <h3>{props.title}</h3>
        <CloseModalButton className="close-modal-btn" onClick={props.close}>
          ×
        </CloseModalButton>
      </ModalHeader>
      <ModalBody className="modal-body">
        <p>{props.children}</p>
      </ModalBody>
      <ModalFooter className="modal-footer">
        <ActionButton className="btn-cancel" onClick={props.close}>
          CLOSE
        </ActionButton>
        <ActionButton className="btn-continue" onClick={handleOnClick}>
          CONTINUE
        </ActionButton>
      </ModalFooter>
    </ModalWrapper>
  );
}
