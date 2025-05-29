import type {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from "react";
import { twMerge } from "tailwind-merge";

import {
  Button,
  type ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";

type TModalProps = {
  open: boolean;
  children: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Title = ({ children }: PropsWithChildren) => (
  <>
    <DialogTitle className="p-4 font-semibold text-xl text-black">
      {children}
    </DialogTitle>
    <Divider className="border-l-multi-neutral-200" />
  </>
);

const Text = ({ children }: PropsWithChildren) => (
  <DialogContent className="sm:min-w-[500px] my-4 p-4">
    <DialogContentText className="font-medium text-sm">
      {children}
    </DialogContentText>
  </DialogContent>
);

const Actions = ({ children }: PropsWithChildren) => (
  <>
    <Divider className="border-l-multi-neutral-200" />
    <DialogActions className="bg-multi-neutral-50 p-4">
      {children}
    </DialogActions>
  </>
);

const CancelButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    {...props}
    className={twMerge(
      "rounded-full normal-case text-base font-medium h-10",
      !props.disabled && "border-error-light text-error-light",
    )}
    loadingPosition="end"
    variant="outlined"
  />
);

const ConfirmButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    {...props}
    className={twMerge(
      "rounded-full normal-case text-base font-medium h-10",
      !props.disabled && "border-secondary-base text-secondary-base",
    )}
    loadingPosition="end"
    variant="outlined"
  />
);

export default function Modal({ open, children, setOpen }: TModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      slotProps={{
        paper: {
          className: "m-0 rounded-2xl",
        },
      }}
    >
      {children}
    </Dialog>
  );
}

Modal.Title = Title;
Modal.Text = Text;
Modal.Actions = Actions;
Modal.CancelButton = CancelButton;
Modal.ConfirmButton = ConfirmButton;
