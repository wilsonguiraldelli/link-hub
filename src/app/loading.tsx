import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <CircularProgress color="secondary" size={56} />
    </div>
  );
}
