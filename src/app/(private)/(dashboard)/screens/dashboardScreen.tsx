"use client";

import { signOut, useSession } from "next-auth/react";

import { Button } from "@mui/material";

export default function DashboardScreen() {
  const { data: session } = useSession();
  const handleSignOut = async () => {
    const res = await signOut();
    console.log("RES", res);
  };

  console.log("SESSION", session);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Button onClick={handleSignOut}>Sair</Button>
    </div>
  );
}
