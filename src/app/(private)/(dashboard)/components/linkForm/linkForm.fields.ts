import type {
  DeepMap,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import type { NumericFormatProps } from "react-number-format";

import type { TLink } from "@/app/repository/dashboard/types";
import type { InputBaseProps, TextFieldProps } from "@mui/material";

export type TLinkInputs = Omit<TLink, "id">;

interface IFields extends UseControllerProps<TLinkInputs> {
  label: string;
  errors?: DeepMap<FieldValues, FieldError>;
  inputProps?: TextFieldProps &
    Partial<InputBaseProps> &
    Partial<NumericFormatProps>;
  disabled?: boolean;
}

type TFields = Record<keyof TLinkInputs, IFields>;

const fields: TFields = {
  title: {
    name: "title",
    label: "Title",
    inputProps: {
      fullWidth: true,
    },
  },
  url: {
    name: "url",
    label: "URL",
    inputProps: {
      fullWidth: true,
    },
  },
  active: {
    name: "active",
    label: "Active",
  },
};

export default fields;
