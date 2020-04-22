import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto;
  transition: all 0.8s;
  width: 60%;
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalHeader = styled.div`
  background: #263238;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
  h3 {
    color: white;
    float: left;
    margin: 0;
    padding: 0;
  }
`;

export const ModalBody = styled.div`
  padding: 10px 15px;
  text-align: center;
`;

export const ModalFooter = styled.div`
  height: 35px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

export const CloseModalButton = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;
`;

export const ActionButton = styled.button`
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
`;
