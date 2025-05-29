"use client";

import { useState } from "react";

import { TTheme } from "@/app/repository/dashboard/types";
import { colorCombinations } from "@/app/theme/colors";
import { Avatar } from "@mui/material";

import ProfileForm from "../components/profileForm";
import type { TProfileInputs } from "../components/profileForm/profileForm.fields";
import ThemeSelection from "../components/themeSelection";
import useProfile from "../hooks/useProfile";
import useUpdateProfile from "../hooks/useUpdateProfile";

export default function ProfileScreen() {
  const { profile } = useProfile();
  const { mutateAsync: onUpdateProfile, isLoading } = useUpdateProfile();
  const [currentTheme, setCurrentTheme] = useState<TTheme | null>(
    profile.theme,
  );

  const handleSave = async (values: TProfileInputs) => {
    await onUpdateProfile({
      ...values,
      id: profile.id,
      links: profile.links,
      theme: currentTheme,
      image: profile.image,
    });
  };

  const handleChangeTheme = (theme: TTheme) => setCurrentTheme(theme);

  return (
    <div className="md:w-[60%] xl:w-[50%] m-auto">
      <div className="flex flex-col items-center justify-center gap-8 p-4 rounded-xl border bg-white">
        <Avatar
          className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] text-5xl"
          sx={{
            bgcolor: currentTheme?.primary,
          }}
        >
          {profile.username.charAt(0)}
        </Avatar>
        <ThemeSelection
          currentTheme={currentTheme}
          onSelect={handleChangeTheme}
          themes={colorCombinations}
        />
        <ProfileForm
          isLoading={isLoading}
          onSave={handleSave}
          profile={profile}
        />
      </div>
    </div>
  );
}
