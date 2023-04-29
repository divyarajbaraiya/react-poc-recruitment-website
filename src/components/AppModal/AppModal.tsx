import { FC } from "react";
import { Modal } from "react-bootstrap";
import { AppButton } from "../AppButton";

interface AppModalProps {
  show: boolean;
  onHide?: () => void;
  onSubmit: () => void;
  title: string;
  description: string;
  isConfirmation?: boolean;
}

export const AppModal: FC<AppModalProps> = ({
  show,
  onHide,
  onSubmit,
  title,
  description,
  isConfirmation = false,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{description}</Modal.Body>

      <Modal.Footer>
        {!isConfirmation && (
          <AppButton variant="secondary" onClick={onHide}>
            Cancel
          </AppButton>
        )}

        <AppButton onClick={onSubmit}>Continue</AppButton>
      </Modal.Footer>
    </Modal>
  );
};
