import useSnackbar from "@/app/hooks/useSnackbar";
import dashboardRepository from "@/app/repository/dashboard/dashboard";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateLinks() {
  const { setSnack } = useSnackbar();

  return useMutation({
    mutationFn: dashboardRepository.putLinks,
    onError: () => {
      setSnack({
        message: "An error has occurred. Please try again later",
        open: true,
        color: "error",
      });
    },
    onSuccess: () => {
      setSnack({
        message: "Links updated successfully!",
        open: true,
        color: "success",
      });
    },
  });
}
