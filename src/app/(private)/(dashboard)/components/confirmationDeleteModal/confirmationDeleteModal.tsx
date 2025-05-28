"use client";

import Modal from "@/app/components/modal";

type TProps = {
  open: boolean;
  handleCloseModal: VoidFunction;
  handleConfirm: VoidFunction;
};

export default function ConfirmationDeleteModal({
  open,
  handleCloseModal,
  handleConfirm,
}: TProps) {
  return (
    <Modal open={open} setOpen={handleCloseModal}>
      <Modal.Title>Attention!</Modal.Title>
      <Modal.Text>Are you sure that tou want to delete this link?</Modal.Text>
      <Modal.Actions>
        <Modal.CancelButton onClick={handleCloseModal}>
          Cancel
        </Modal.CancelButton>
        <Modal.ConfirmButton onClick={handleConfirm}>
          Continue
        </Modal.ConfirmButton>
      </Modal.Actions>
    </Modal>
  );
}
