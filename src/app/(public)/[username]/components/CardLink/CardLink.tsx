"use client";

import Link from "next/link";

import type { TLink } from "@/app/repository/dashboard/types";
import { OpenInNew } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";

type TProps = TLink & {
  color: string;
};

export default function CardLink({ title, url, color, active }: TProps) {
  if (!active) return;
  return (
    <Link href={url} target="_blank">
      <ButtonBase className="rounded-xl w-full">
        <div
          className="flex justify-between items-center p-4 rounded-xl
          border w-full normal-case"
          style={{ borderColor: color }}
        >
          <div className="text-start">
            <p className="font-semibold mb-1">{title}</p>
            <p className="text-xs text-text-primary truncate">{url}</p>
          </div>

          <OpenInNew fontSize="small" />
        </div>
      </ButtonBase>
    </Link>
  );
}
