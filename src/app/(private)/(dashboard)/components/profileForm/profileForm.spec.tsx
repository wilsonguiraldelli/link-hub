import type { TProfile } from "@/app/repository/dashboard/types";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ProfileForm from "./profileForm";

describe("ProfileForm", () => {
  const mockProfile: TProfile = {
    id: "1",
    username: "testuser",
    description: "Test description",
    links: [],
    image: "",
    theme: {
      primary: "#000",
      secondary: "#fff",
    },
  };

  const mockOnSave = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders form with empty values when no profile is provided", () => {
    render(<ProfileForm onSave={mockOnSave} />);

    expect(screen.getByLabelText("Username")).toHaveValue("");
    expect(screen.getByLabelText("description")).toHaveValue("");
  });

  it("renders form with profile values when profile is provided", () => {
    render(<ProfileForm onSave={mockOnSave} profile={mockProfile} />);

    expect(screen.getByLabelText("Username")).toHaveValue(mockProfile.username);
    expect(screen.getByLabelText("description")).toHaveValue(
      mockProfile.description,
    );
  });

  it("validates required fields", async () => {
    render(<ProfileForm onSave={mockOnSave} />);

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByTestId("username-error")).toHaveTextContent(
        "Please inform a username",
      );
    });

    expect(mockOnSave).not.toHaveBeenCalled();
  });

  it("validates description max length", async () => {
    render(<ProfileForm onSave={mockOnSave} />);

    const descriptionInput = screen.getByLabelText("description");
    fireEvent.change(descriptionInput, { target: { value: "a".repeat(201) } });

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByTestId("description-error")).toHaveTextContent(
        "Max characters limit of 200 reached",
      );
    });

    expect(mockOnSave).not.toHaveBeenCalled();
  });

  it("calls onSave with form values when form is valid", async () => {
    render(<ProfileForm onSave={mockOnSave} />);

    const usernameInput = screen.getByLabelText("Username");
    const descriptionInput = screen.getByLabelText("description");

    fireEvent.change(usernameInput, { target: { value: "newuser" } });
    fireEvent.change(descriptionInput, {
      target: { value: "New description" },
    });

    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockOnSave).toHaveBeenCalledWith({
        username: "newuser",
        description: "New description",
      });
    });
  });

  it("disables save button when isLoading is true", () => {
    render(<ProfileForm isLoading={true} onSave={mockOnSave} />);

    const saveButton = screen.getByRole("button", { name: /save/i });
    expect(saveButton).toBeDisabled();
  });

  it("opens profile in new tab when clicking open profile button", () => {
    render(<ProfileForm onSave={mockOnSave} profile={mockProfile} />);

    const openProfileButton = screen.getByRole("button", {
      name: /open profile/i,
    });
    expect(openProfileButton.closest("a")).toHaveAttribute(
      "href",
      `/${mockProfile.username}`,
    );
    expect(openProfileButton.closest("a")).toHaveAttribute("target", "_blank");
  });
});
