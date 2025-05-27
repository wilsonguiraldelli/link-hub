import type {
  DeepMap,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

import type { TLoginCredentials } from "@/app/repository/auth/types";
import type { InputBaseProps, TextFieldProps } from "@mui/material";

interface IFields extends UseControllerProps<TLoginCredentials> {
  label: string;
  errors?: DeepMap<FieldValues, FieldError>;
  inputProps?: TextFieldProps & Partial<InputBaseProps>;
  disabled?: boolean;
}

type TFields = Record<keyof TLoginCredentials, IFields>;

const fields: TFields = {
  email: {
    name: "email",
    label: "E-mail",
    inputProps: {
      fullWidth: true,
      size: "small",
    },
  },
  password: {
    name: "password",
    label: "Password",
    inputProps: {
      fullWidth: true,
      size: "small",
      type: "password",
    },
  },
};

export default fields;
