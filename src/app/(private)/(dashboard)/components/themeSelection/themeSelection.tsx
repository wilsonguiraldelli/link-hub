import type { TTheme } from "@/app/repository/dashboard/types";
import { Check } from "@mui/icons-material";
import { Badge, ButtonBase } from "@mui/material";

type Tprops = {
  themes: TTheme[];
  currentTheme: TTheme | null;
  onSelect: (theme: TTheme) => void;
};

export default function ThemeSelection({
  themes,
  currentTheme,
  onSelect,
}: Tprops) {
  return (
    <div className="flex justify-around w-full">
      {themes.map((theme, index) => {
        const isSelected =
          theme.primary === currentTheme?.primary &&
          theme.secondary === currentTheme?.secondary;

        return (
          <Badge
            badgeContent={!isSelected ? 0 : <Check className="h-2 w-2" />}
            color="primary"
            key={index}
            overlap="circular"
          >
            <ButtonBase
              className="rounded-full overflow-hidden"
              onClick={() => onSelect(theme)}
            >
              <div className="flex h-8 w-8 md:h-14 md:w-14 rounded-full border-[4px] border-neutral-100">
                <div
                  className="w-[50%] h-full rounded-s-full"
                  style={{ backgroundColor: theme.primary }}
                />
                <div
                  className="w-[50%] h-full rounded-e-full"
                  style={{ backgroundColor: theme.secondary }}
                />
              </div>
            </ButtonBase>
          </Badge>
        );
      })}
    </div>
  );
}
