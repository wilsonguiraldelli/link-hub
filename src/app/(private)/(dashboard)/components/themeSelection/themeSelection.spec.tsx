import { colorCombinations } from "@/app/theme/colors";
import { fireEvent, render, screen } from "@testing-library/react";

import ThemeSelection from "./themeSelection";

type TTheme = {
  primary: string;
  secondary: string;
};

describe("ThemeSelection", () => {
  const mockThemes: TTheme[] = colorCombinations;

  const mockCurrentTheme: TTheme = colorCombinations[0];

  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all themes", () => {
    render(
      <ThemeSelection
        currentTheme={mockCurrentTheme}
        onSelect={mockOnSelect}
        themes={mockThemes}
      />,
    );

    const themeButtons = screen.getAllByRole("button");
    expect(themeButtons).toHaveLength(mockThemes.length);
  });

  it("shows check mark on selected theme", () => {
    render(
      <ThemeSelection
        currentTheme={mockCurrentTheme}
        onSelect={mockOnSelect}
        themes={mockThemes}
      />,
    );

    const checkIcons = screen.getAllByTestId("CheckIcon");
    expect(checkIcons).toHaveLength(1);
  });

  it("calls onSelect with correct theme when clicked", () => {
    render(
      <ThemeSelection
        currentTheme={mockCurrentTheme}
        onSelect={mockOnSelect}
        themes={mockThemes}
      />,
    );

    const themeButtons = screen.getAllByRole("button");
    fireEvent.click(themeButtons[1]);

    expect(mockOnSelect).toHaveBeenCalledWith(mockThemes[1]);
  });

  it("renders theme colors correctly", () => {
    render(
      <ThemeSelection
        currentTheme={mockCurrentTheme}
        onSelect={mockOnSelect}
        themes={mockThemes}
      />,
    );

    const themeDivs = screen
      .getAllByRole("button")
      .map((button) => button.querySelector("div"));

    mockThemes.forEach((theme: TTheme, index: number) => {
      const themeDiv = themeDivs[index];
      const primaryDiv = themeDiv?.querySelector("div:first-child");
      const secondaryDiv = themeDiv?.querySelector("div:last-child");

      expect(primaryDiv).toHaveStyle({ backgroundColor: theme.primary });
      expect(secondaryDiv).toHaveStyle({ backgroundColor: theme.secondary });
    });
  });
});
