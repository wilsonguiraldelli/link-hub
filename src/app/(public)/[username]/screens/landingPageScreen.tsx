import type { TProfile } from "@/app/repository/dashboard/types";
import colors from "@/app/theme/colors";
import { Avatar } from "@mui/material";

import Card from "../components/card";
import CardLink from "../components/CardLink";

type TProps = {
  profile?: TProfile;
};

export default function LandingPageScreen({ profile }: TProps) {
  const primary = profile?.theme?.primary || colors.primary.base;
  const secondary = profile?.theme?.secondary || colors.secondary.dark;

  return (
    <div
      className="flex justify-center items-center w-full h-screen p-4"
      style={{ backgroundColor: secondary }}
    >
      <div className="flex justify-center items-center w-full md:w-[40%]">
        <Card>
          <div className="flex flex-col gap-4 w-full items-center">
            <Avatar
              className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] text-5xl"
              sx={{
                bgcolor: profile?.theme?.primary,
              }}
            >
              {profile?.username?.charAt(0)}
            </Avatar>
            <h1 className="text-2xl font-semibold">{profile?.username}</h1>
            <i className="text-text-secondary text-center">
              {profile?.description}
            </i>
          </div>
          <div className="flex flex-col w-full gap-4">
            {profile?.links?.map((link) => (
              <CardLink
                active={link.active}
                color={primary}
                id={link.id}
                key={link.id}
                title={link.title}
                url={link.url}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
