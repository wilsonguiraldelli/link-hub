import { fireEvent, render, screen } from "@testing-library/react";

import DrawerItem from "./drawer.item";

describe("DrawerItem", () => {
  const mockOnClick = jest.fn();
  const mockLabel = "Test Item";

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders with correct label", () => {
    render(
      <DrawerItem isActive={false} label={mockLabel} onClick={mockOnClick} />,
    );

    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });

  it("applies active styles when isActive is true", () => {
    render(<DrawerItem isActive label={mockLabel} onClick={mockOnClick} />);

    const button = screen.getByText(mockLabel);
    expect(button).toHaveClass("bg-primary-lightest");
    expect(button).toHaveClass("text-primary-dark");
    expect(button).toHaveClass("font-semibold");
  });

  it("applies inactive styles when isActive is false", () => {
    render(
      <DrawerItem isActive={false} label={mockLabel} onClick={mockOnClick} />,
    );

    const button = screen.getByText(mockLabel);
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("text-primary-base");
    expect(button).toHaveClass("text-sm");
  });

  it("calls onClick when clicked", () => {
    render(
      <DrawerItem isActive={false} label={mockLabel} onClick={mockOnClick} />,
    );

    const button = screen.getByText(mockLabel);
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("applies common styles regardless of active state", () => {
    render(
      <DrawerItem isActive={false} label={mockLabel} onClick={mockOnClick} />,
    );

    const button = screen.getByText(mockLabel);
    expect(button).toHaveClass("w-full");
    expect(button).toHaveClass("text-left");
    expect(button).toHaveClass("p-4");
    expect(button).toHaveClass("rounded-r-full");
    expect(button).toHaveClass("cursor-pointer");
    expect(button).toHaveClass("hover:bg-primary-lightest");
  });
});
