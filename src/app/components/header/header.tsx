import Image from "next/image";
import Link from "next/link";

import Logo from "@images/logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import LogoutButton from "./header.logout";

export default function Header() {
  return (
    <AppBar color="inherit" elevation={3} position="sticky">
      <Toolbar className="flex justify-between py-3">
        <Link href="/">
          <Image
            alt="logo"
            className="h-auto"
            height={30}
            src={Logo}
            width={180}
          />
        </Link>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
}
