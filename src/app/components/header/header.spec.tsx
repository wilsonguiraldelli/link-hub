import { render, screen } from "@testing-library/react";

import Header from "./header";

interface ImageProps {
  alt: string;
  className?: string;
  height: number;
  src: string;
  width: number;
}

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Header", () => {
  it("renders logo with correct attributes", () => {
    render(<Header />);

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("width", "180");
    expect(logo).toHaveAttribute("height", "30");
    expect(logo).toHaveClass("h-auto");
  });

  it("renders logo with correct link", () => {
    render(<Header />);

    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders AppBar with correct props", () => {
    render(<Header />);

    const appBar = screen.getByRole("banner");
    expect(appBar).toHaveClass("MuiAppBar-root");
    expect(appBar).toHaveClass("MuiAppBar-colorInherit");
    expect(appBar).toHaveClass("MuiAppBar-positionSticky");
  });

  it("renders Toolbar with correct styles", () => {
    render(<Header />);

    const toolbar = screen.getByTestId("toolbar");
    expect(toolbar).toHaveClass("flex");
    expect(toolbar).toHaveClass("justify-between");
    expect(toolbar).toHaveClass("py-3");
  });

  it("renders LogoutButton", () => {
    render(<Header />);

    const logoutButton = screen.getByRole("button", { name: "Exit" });
    expect(logoutButton).toBeInTheDocument();
  });
});
