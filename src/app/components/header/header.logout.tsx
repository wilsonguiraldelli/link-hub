"use client";

import { signOut } from "next-auth/react";

import useToggle from "@/app/hooks/useToggle";
import { ExitToApp } from "@mui/icons-material";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";

export default function LogoutButton() {
  const [isLoading, toggleLoading] = useToggle(false);
  const handleLogout = () => {
    toggleLoading();
    signOut();
  };

  if (isLoading) return <CircularProgress color="secondary" size="24px" />;

  return (
    <Tooltip title="Exit">
      <IconButton onClick={handleLogout}>
        <ExitToApp color="secondary" />
      </IconButton>
    </Tooltip>
  );
}
