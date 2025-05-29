import { fireEvent, render, screen } from "@testing-library/react";

import Drawer from "./drawer";

describe("Drawer", () => {
  const mockPages = [
    { id: "page1", label: "Page 1" },
    { id: "page2", label: "Page 2" },
    { id: "page3", label: "Page 3" },
  ];

  const mockSetActiveItem = jest.fn();

  beforeEach(() => {
    mockSetActiveItem.mockClear();
  });

  it("renders all pages correctly", () => {
    render(
      <Drawer
        activeItem="page1"
        pages={mockPages}
        setActiveItem={mockSetActiveItem}
      />,
    );

    mockPages.forEach((page) => {
      expect(screen.getByText(page.label)).toBeInTheDocument();
    });
  });

  it("highlights the active page", () => {
    render(
      <Drawer
        activeItem="page2"
        pages={mockPages}
        setActiveItem={mockSetActiveItem}
      />,
    );

    const activeButton = screen.getByText("Page 2");
    expect(activeButton).toHaveClass("bg-primary-lightest");
    expect(activeButton).toHaveClass("text-primary-dark");
    expect(activeButton).toHaveClass("font-semibold");
  });

  it("calls setActiveItem when a page is clicked", () => {
    render(
      <Drawer
        activeItem="page1"
        pages={mockPages}
        setActiveItem={mockSetActiveItem}
      />,
    );

    const page2Button = screen.getByText("Page 2");
    fireEvent.click(page2Button);

    expect(mockSetActiveItem).toHaveBeenCalledWith("page2");
    expect(mockSetActiveItem).toHaveBeenCalledTimes(1);
  });

  it("applies correct styling to non-active pages", () => {
    render(
      <Drawer
        activeItem="page1"
        pages={mockPages}
        setActiveItem={mockSetActiveItem}
      />,
    );

    const nonActiveButton = screen.getByText("Page 2");
    expect(nonActiveButton).toHaveClass("bg-white");
    expect(nonActiveButton).toHaveClass("text-primary-base");
    expect(nonActiveButton).toHaveClass("text-sm");
  });
});
