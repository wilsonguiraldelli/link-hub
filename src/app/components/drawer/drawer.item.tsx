import { ButtonBase } from "@mui/material";

export default function DrawerItem({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <ButtonBase
      className={`w-full text-left p-4 rounded-r-full cursor-pointer
        ${isActive ? "bg-primary-lightest text-primary-dark font-semibold" : "bg-white text-primary-base text-sm"}
        hover:bg-primary-lightest
      `}
      disableRipple={false}
      onClick={onClick}
    >
      {label}
    </ButtonBase>
  );
}
