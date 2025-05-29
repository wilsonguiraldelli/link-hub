import type { TLink } from "@/app/repository/dashboard/types";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import LinkForm from "./linkForm";

describe("LinkForm", () => {
  const mockLink: TLink = {
    id: "1",
    title: "Test Link",
    url: "https://test.com",
    active: true,
  };

  const mockOnClose = jest.fn();
  const mockOnSave = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders form with empty values when no link is provided", () => {
    render(
      <LinkForm
        isLoading={false}
        link={undefined}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    expect(screen.getByLabelText("Title")).toHaveValue("");
    expect(screen.getByLabelText("URL")).toHaveValue("");
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("renders form with link values when link is provided", () => {
    render(
      <LinkForm
        isLoading={false}
        link={mockLink}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    expect(screen.getByLabelText("Title")).toHaveValue(mockLink.title);
    expect(screen.getByLabelText("URL")).toHaveValue(mockLink.url);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onClose when close button is clicked", () => {
    render(
      <LinkForm
        isLoading={false}
        link={mockLink}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    const closeButton = screen.getByTestId("CloseIcon").closest("button");
    expect(closeButton).not.toBeNull();
    if (closeButton) fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("validates URL format", async () => {
    render(
      <LinkForm
        isLoading={false}
        link={undefined}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    const urlInput = screen.getByLabelText("URL");
    fireEvent.change(urlInput, { target: { value: "invalid-url" } });

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByTestId("title-error")).toHaveTextContent(
        "Please inform a title",
      );
      expect(screen.getByTestId("url-error")).toHaveTextContent(
        "Please inform a valid url",
      );
    });

    expect(mockOnSave).not.toHaveBeenCalled();
  });

  it("calls onSave with form values when form is valid", async () => {
    render(
      <LinkForm
        isLoading={false}
        link={undefined}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    const titleInput = screen.getByLabelText("Title");
    const urlInput = screen.getByLabelText("URL");

    fireEvent.change(titleInput, { target: { value: "New Link" } });
    fireEvent.change(urlInput, { target: { value: "https://new-link.com" } });

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockOnSave).toHaveBeenCalledWith({
        id: "",
        title: "New Link",
        url: "https://new-link.com",
        active: true,
      });
    });
  });

  it("disables save button when isLoading is true", () => {
    render(
      <LinkForm
        isLoading={true}
        link={mockLink}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    const saveButton = screen.getByRole("button", { name: /save/i });
    expect(saveButton).toBeDisabled();
  });

  it("updates form values when link prop changes", async () => {
    const { rerender } = render(
      <LinkForm
        isLoading={false}
        link={mockLink}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    const newLink: TLink = {
      ...mockLink,
      title: "Updated Link",
      url: "https://updated-link.com",
    };

    rerender(
      <LinkForm
        isLoading={false}
        link={newLink}
        onClose={mockOnClose}
        onSave={mockOnSave}
        open={true}
      />,
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Title")).toHaveValue(newLink.title);
      expect(screen.getByLabelText("URL")).toHaveValue(newLink.url);
    });
  });
});
