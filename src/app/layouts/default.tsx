import type { ReactNode } from "react";

import Header from "../components/header";

type TProps = {
  children: ReactNode;
};

export default function Default({ children }: TProps) {
  return (
    <div className="flex flex-col justify-between min-h-full bg-white sm:bg-multi-neutral-50">
      <Header />
      <main className="flex flex-1 bg-neutral-50">{children}</main>
    </div>
  );
}
