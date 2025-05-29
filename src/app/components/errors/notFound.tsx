"use client";

import Image from "next/image";
import Link from "next/link";

import NotFoundImage from "@images/404.png";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <div className="mb-8">
        <Image
          alt="Page Not Found"
          height={300}
          priority
          src={NotFoundImage}
          width={400}
        />
      </div>

      <Link href="/" legacyBehavior passHref>
        <Button
          className="normal-case"
          color="primary"
          disableElevation
          variant="contained"
        >
          Come back to home page
        </Button>
      </Link>
    </div>
  );
}
