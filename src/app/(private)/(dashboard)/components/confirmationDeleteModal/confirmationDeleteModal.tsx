"use client";

import Modal from "@/app/components/modal";

type TProps = {
  open: boolean;
  handleCloseModal: VoidFunction;
  handleConfirm: VoidFunction;
  isLoading?: boolean;
};

export default function ConfirmationDeleteModal({
  open,
  handleCloseModal,
  handleConfirm,
  isLoading,
}: TProps) {
  return (
    <Modal open={open} setOpen={handleCloseModal}>
      <Modal.Title>Attention!</Modal.Title>
      <Modal.Text>Are you sure that tou want to delete this link?</Modal.Text>
      <Modal.Actions>
        <Modal.CancelButton disabled={isLoading} onClick={handleCloseModal}>
          Cancel
        </Modal.CancelButton>
        <Modal.ConfirmButton
          disabled={isLoading}
          loading={isLoading}
          onClick={handleConfirm}
        >
          Continue
        </Modal.ConfirmButton>
      </Modal.Actions>
    </Modal>
  );
}
