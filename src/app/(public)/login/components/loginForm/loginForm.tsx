"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";

import ControlledField from "@/app/components/controlledField";
import type { TLoginCredentials } from "@/app/repository/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid2 } from "@mui/material";

import useLogin from "../../hooks/useLogin";

import fields from "./loginForm.fields";
import { loginSchema } from "./loginForm.schema";

export default function LoginForm() {
  const { mutateAsync: onLogin, isLoading } = useLogin();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TLoginCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
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

  const onSubmit = async (values: TLoginCredentials) => {
    onLogin(values);
  };

  return (
    <div className="p-4">
      <Grid2 container direction="column" spacing={3}>
        <Grid2 size={{ sm: 12 }}>
          <ControlledField.TextField {...register("email")} />
        </Grid2>
        <Grid2>
          <ControlledField.TextField {...register("password")} />
        </Grid2>
        <Grid2>
          <Button
            className="rounded-full"
            disableElevation
            disabled={isLoading}
            fullWidth
            loading={isLoading}
            onClick={handleSubmit(onSubmit)}
            style={{ textTransform: "none" }}
            variant="contained"
          >
            Login
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
}
