import { useForm } from "react-hook-form";

import { fireEvent, render, screen } from "@testing-library/react";

import { ControlledSwitch, ControlledTextField } from "./controlledField";

describe("Controlled Fields", () => {
  it("renders ControlledTextField with label and handles input", () => {
    const TestWrapper = () => {
      const { control } = useForm<{ test: string }>({
        defaultValues: {
          test: "",
        },
      });

      return (
        <ControlledTextField
          control={control}
          errors={{}}
          label="Testing textfield"
          name="test"
        />
      );
    };

    render(<TestWrapper />);

    const input = screen.getByLabelText("Testing textfield");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "New Value" } });
    expect(input).toHaveValue("New Value");
  });

  it("renders ControlledSwitch with label and handles toggle", () => {
    const TestWrapper = () => {
      const { control } = useForm<{ test: boolean }>({
        defaultValues: {
          test: false,
        },
      });

      return (
        <ControlledSwitch
          control={control}
          errors={{}}
          label="Testing switch"
          name="test"
        />
      );
    };

    render(<TestWrapper />);

    const switchInput = screen.getByLabelText("Testing switch");
    expect(switchInput).toBeInTheDocument();

    fireEvent.click(switchInput);
    expect(switchInput).toBeChecked();
  });

  it("renders ControlledSwitch in disabled state", () => {
    const TestWrapper = () => {
      const { control } = useForm<{ test: boolean }>({
        defaultValues: {
          test: false,
        },
      });

      return (
        <ControlledSwitch
          control={control}
          disabled
          errors={{}}
          label="Testing switch"
          name="test"
        />
      );
    };

    render(<TestWrapper />);

    const switchInput = screen.getByLabelText("Testing switch");
    expect(switchInput).toBeDisabled();
  });
});
