import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import type { TLoginCredentials } from "@/app/repository/auth/types";
import useSnackbar from "@hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const { setSnack } = useSnackbar();
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: TLoginCredentials) => {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (!res?.ok) throw Error();
      return;
    },
    onError: () => {
      setSnack({
        message: "An error has occurred. Please try again later",
        open: true,
        color: "error",
      });
    },
    onSuccess: () => {
      router.push("/");
    },
  });
}
