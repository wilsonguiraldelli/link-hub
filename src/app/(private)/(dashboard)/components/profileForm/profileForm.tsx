import { useCallback } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import ControlledField from "@/app/components/controlledField";
import type { TProfile } from "@/app/repository/dashboard/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { OpenInNew } from "@mui/icons-material";
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
    watch,
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
          <p className="text-red-500 text-sm mt-1" data-testid="username-error">
            {errors.username?.message}
          </p>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <ControlledField.TextField {...register("description")} />
          <p
            className="text-red-500 text-sm mt-1"
            data-testid="description-error"
          >
            {errors.description?.message}
          </p>
        </Grid2>
      </Grid2>
      <div className="flex justify-end items-center w-full gap-4">
        <Link href={`/${watch("username")}`} target="_blank">
          <Button
            className="rounded-full"
            color="secondary"
            disableElevation
            disabled={isLoading}
            loading={isLoading}
            startIcon={<OpenInNew />}
            style={{ textTransform: "none" }}
            type="submit"
            variant="outlined"
          >
            Open profile
          </Button>
        </Link>
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
