"use client";

import { signOut } from "next-auth/react";

import { ExitToApp } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut();
  };

  return (
    <Tooltip title="Exit">
      <IconButton onClick={handleLogout}>
        <ExitToApp color="secondary" />
      </IconButton>
    </Tooltip>
  );
}
