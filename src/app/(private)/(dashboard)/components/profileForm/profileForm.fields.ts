import type {
  DeepMap,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import type { NumericFormatProps } from "react-number-format";

import type { TProfile } from "@/app/repository/dashboard/types";
import type { InputBaseProps, TextFieldProps } from "@mui/material";

export type TProfileInputs = Omit<TProfile, "id" | "links" | "image" | "theme">;

interface IFields extends UseControllerProps<TProfileInputs> {
  label: string;
  errors?: DeepMap<FieldValues, FieldError>;
  inputProps?: TextFieldProps &
    Partial<InputBaseProps> &
    Partial<NumericFormatProps>;
  disabled?: boolean;
}

type TFields = Record<keyof TProfileInputs, IFields>;

const fields: TFields = {
  username: {
    name: "username",
    label: "Username",
    inputProps: {
      fullWidth: true,
    },
  },
  description: {
    name: "description",
    label: "description",
    inputProps: {
      fullWidth: true,
      multiline: true,
      rows: 4,
    },
  },
};

export default fields;
