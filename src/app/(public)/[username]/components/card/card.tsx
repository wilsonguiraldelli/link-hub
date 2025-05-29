import type { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function Card({ children }: TProps) {
  return (
    <div
      className="flex flex-col rounded-xl border bg-white w-full gap-8 px-4 py-8 items-center
      max-h-[800px] overflow-y-auto"
    >
      {children}
    </div>
  );
}
