import useSnackbar from "@/app/hooks/useSnackbar";
import dashboardRepository from "@/app/repository/dashboard";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateProfile() {
  const { setSnack } = useSnackbar();

  return useMutation({
    mutationFn: dashboardRepository.putProfile,
    onError: () => {
      setSnack({
        message: "An error has occurred. Please try again later",
        open: true,
        color: "error",
      });
    },
    onSuccess: () => {
      setSnack({
        message: "Profile updated successfully!",
        open: true,
        color: "success",
      });
    },
  });
}
