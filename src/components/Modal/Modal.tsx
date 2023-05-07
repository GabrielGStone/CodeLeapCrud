import { FC, useEffect } from "react";
import { ModalBlock, ModalBody, ModalContainer, ModalOverlay } from "./styles";

interface ModalProps {
  children?: any;
  active: boolean;
  hideModal: () => void;
  loading: boolean;
}

const Modal: FC<ModalProps> = ({ children, active, hideModal, loading }) => {
  const body = document.body;

  useEffect(() => {
    if (active) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={hideModal}></ModalOverlay>
          <ModalContainer>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};
export default Modal;
