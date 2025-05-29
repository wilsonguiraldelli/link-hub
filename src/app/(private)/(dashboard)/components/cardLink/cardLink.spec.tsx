import type { TLink } from "@/app/repository/dashboard/types";
import { fireEvent, render, screen } from "@testing-library/react";

import CardLink from "./cardLink";

interface DraggableProvided {
  draggableProps: Record<string, unknown>;
  dragHandleProps: Record<string, unknown>;
  innerRef: null;
}

jest.mock("@hello-pangea/dnd", () => ({
  Draggable: ({
    children,
  }: {
    children: (provided: DraggableProvided) => React.ReactNode;
  }) =>
    children({
      draggableProps: {},
      dragHandleProps: {},
      innerRef: null,
    }),
}));

describe("CardLink", () => {
  const mockLink: TLink = {
    id: "1",
    title: "Test Link",
    url: "https://test.com",
    active: true,
  };

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();
  const mockOnToggleActive = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders link with correct content", () => {
    render(
      <CardLink
        {...mockLink}
        active={true}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    expect(screen.getByText(mockLink.title)).toBeInTheDocument();
    expect(screen.getByText(mockLink.url)).toBeInTheDocument();
  });

  it("calls onEdit when edit button is clicked", () => {
    render(
      <CardLink
        {...mockLink}
        active={true}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    const editButton = screen.getByTestId("EditIcon").closest("button");
    if (editButton) fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when delete button is clicked", () => {
    render(
      <CardLink
        {...mockLink}
        active={true}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    const deleteButton = screen.getByTestId("DeleteIcon").closest("button");
    if (deleteButton) fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it("calls onToggleActive when switch is toggled", () => {
    render(
      <CardLink
        {...mockLink}
        active={true}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    const switchInput = screen.getByRole("checkbox");
    fireEvent.click(switchInput);

    expect(mockOnToggleActive).toHaveBeenCalledTimes(1);
  });

  it("shows correct switch state based on active prop", () => {
    const { rerender } = render(
      <CardLink
        {...mockLink}
        active={true}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    expect(screen.getByRole("checkbox")).toBeChecked();

    rerender(
      <CardLink
        {...mockLink}
        active={false}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("renders drag indicator icon", () => {
    render(
      <CardLink
        {...mockLink}
        active={true}
        index={0}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onToggleActive={mockOnToggleActive}
      />,
    );

    expect(screen.getByTestId("DragIndicatorIcon")).toBeInTheDocument();
  });
});
