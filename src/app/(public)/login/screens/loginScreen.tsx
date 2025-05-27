import Image from "next/image";

import Logo from "@images/logo.png";
import { Paper } from "@mui/material";

import LoginForm from "../components/form";

export default function LoginScreen() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-neutral-50">
      <Paper className="h-screen w-[400px] sm:h-auto pb-2 flex flex-col justify-center">
        <div className="flex flex-col p-4 justify-center items-center">
          <Image alt="Full logo" className="h-auto" src={Logo} width={280} />
          <i className="text-sm text-text-secondary">
            Link smart. Live simpler
          </i>
        </div>
        <LoginForm />
      </Paper>
    </div>
  );
}
