"use client";

import { signIn } from "next-auth/react";

import { Button } from "@mui/material";

export default function LoginScreen() {
  const handleLogin = async () => {
    await signIn("credentials", {
      redirect: true,
      email: "admin@admin.com",
      password: "12345",
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
