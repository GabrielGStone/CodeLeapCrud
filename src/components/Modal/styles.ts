import styled from "styled-components";

export const ModalBlock = styled.div`
  align-items: center;
  justify-content: center;
  position: fixed;
  display: flex;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
`;

export const ModalOverlay = styled.a`
  background: #777777;
  opacity: 0.8;
  display: block;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 660px;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  max-height: 95vh;
  max-width: 95vw;
  padding: 24px;
`;

export const ModalBody = styled.div``;
