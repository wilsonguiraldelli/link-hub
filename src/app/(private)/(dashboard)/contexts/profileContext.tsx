"use client";

import { createContext, type ReactNode } from "react";

import type { TProfile } from "@/app/repository/dashboard/types";

type TProviderContext = {
  profile: TProfile;
};

export const ProviderContext = createContext({} as TProviderContext);

type TProps = {
  children: ReactNode | ReactNode[];
  profile: TProfile;
};

export default function ProfileProvider({ children, profile }: TProps) {
  return (
    <ProviderContext.Provider value={{ profile }}>
      {children}
    </ProviderContext.Provider>
  );
}
