import { useCallback } from "react";
import { useForm } from "react-hook-form";

import ControlledField from "@/app/components/controlledField";
import type { TProfile } from "@/app/repository/dashboard/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid2 } from "@mui/material";

import fields, { type TProfileInputs } from "./profileForm.fields";
import { prorfileFormSchema } from "./profileForm.schema";

type TProps = {
  onSave: (values: TProfileInputs) => void;
  profile?: TProfile;
  isLoading?: boolean;
};
export default function LinkForm({ onSave, profile, isLoading }: TProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TProfileInputs>({
    resolver: zodResolver(prorfileFormSchema),

    defaultValues: {
      username: profile?.username || "",
      description: profile?.description || "",
    },
  });

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

  const onSubmit = (values: TProfileInputs) => {
    onSave(values);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <Grid2 className="w-full" container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <ControlledField.TextField {...register("username")} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <ControlledField.TextField {...register("description")} />
        </Grid2>
      </Grid2>
      <div className="flex justify-end items-center w-full">
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
    </div>
  );
}
