import type {
  DeepMap,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { Controller } from "react-hook-form";

import { FormControlLabel, type InputBaseProps, Switch } from "@mui/material";
import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";

interface IProps<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  errors: DeepMap<FieldValues, FieldError>;
  inputProps?: TextFieldProps & Partial<InputBaseProps>;
  disabled?: boolean;
}

export const ControlledTextField = <T extends FieldValues>({
  name,
  label,
  control,
  errors,
  ...props
}: IProps<T>) => {
  const helperText = errors[name] as FieldError | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          size="small"
          {...field}
          {...props.inputProps}
          disabled={props.disabled}
          error={Boolean(errors[field.name])}
          helperText={helperText?.message}
          label={label}
        />
      )}
    />
  );
};

type ISwitchProps<T extends FieldValues> = IProps<T>;

export const ControlledSwitch = <T extends FieldValues>({
  control,
  name,
  ...props
}: ISwitchProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormControlLabel
        control={
          <Switch
            checked={field.value}
            defaultValue={field.value}
            disabled={props.disabled}
            key={field.value}
            onChange={(_, checked) => field.onChange(checked)}
          />
        }
        label={props.label}
      />
    )}
  />
);
