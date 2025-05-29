import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import ControlledField from "@/app/components/controlledField";
import type { TLink } from "@/app/repository/dashboard/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid2,
  IconButton,
} from "@mui/material";

import fields, { type TLinkInputs } from "./linkForm.fields";
import { linkFormSchema } from "./linkForm.schema";

type TProps = {
  open: boolean;
  onClose: VoidFunction;
  onSave: (values: TLink) => void;
  link?: TLink;
  isLoading: boolean;
};
export default function LinkForm({
  open,
  onClose,
  onSave,
  link,
  isLoading,
}: TProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TLinkInputs>({
    resolver: zodResolver(linkFormSchema),
    defaultValues: {
      title: link?.title || "",
      url: link?.url || "",
      active: link?.active || true,
    },
  });

  useEffect(() => {
    reset(link);
  }, [link, reset]);

  const register = useCallback(
    (field: keyof typeof fields) => {
      return {
        control,
        errors,
        ...fields[field],
      };
    },
    [control, errors],
  );

  const onSubmit = (values: TLinkInputs) => {
    onSave({
      id: link?.id || "",
      ...values,
    });
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          className: "rounded-lg md:w-[650px]",
        },
      }}
    >
      <div className="flex justify-between items-center p-4">
        <h1 className="font-semibold">Filtros</h1>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </div>
      <Divider />
      <DialogContent>
        <Grid2 className="w-full" container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <ControlledField.Switch {...register("active")} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <ControlledField.TextField {...register("title")} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <ControlledField.TextField {...register("url")} />
          </Grid2>
        </Grid2>
      </DialogContent>
      <div className="flex justify-end items-center p-4 w-full gap-2 bg-neutral-50">
        <Button
          className="rounded-full"
          color="secondary"
          disableElevation
          disabled={isLoading}
          loading={isLoading}
          onClick={handleSubmit(onSubmit)}
          style={{ textTransform: "none" }}
          type="submit"
          variant="contained"
        >
          Save
        </Button>
      </div>
    </Dialog>
  );
}
