import { getServerSession } from "next-auth";

import dashboardRepository from "@/app/repository/dashboard/dashboard";
import authOptions from "@config/nextAuth";

import ProfileProvider from "./contexts/profileContext";
import { DashboardScreen } from "./screens";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const profile = await dashboardRepository.getProfile(session?.user.id);

  return (
    <ProfileProvider profile={profile}>
      <DashboardScreen />
    </ProfileProvider>
  );
}
