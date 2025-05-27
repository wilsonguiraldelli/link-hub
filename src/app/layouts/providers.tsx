"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

import SnackbarProvider from "@components/snackbarProvider";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import materialTheme from "@theme/mui";
type TProps = {
  children: ReactNode;
};

export default function Providers({ children }: TProps) {
  const queryClient = new QueryClient();

  return (
    <AppRouterCacheProvider>
      <SnackbarProvider>
        <SessionProvider>
          <ThemeProvider theme={materialTheme}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ThemeProvider>
        </SessionProvider>
      </SnackbarProvider>
    </AppRouterCacheProvider>
  );
}
