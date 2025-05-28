import { getServerSession } from "next-auth";

import dashboardRepository from "@/app/repository/dashboard/dashboard";
import authOptions from "@config/nextAuth";

import { DashboardScreen } from "./screens";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const links = await dashboardRepository.getLinks(session?.user.id);

  return (
    <DashboardScreen initalLinks={links} userId={session?.user.id || ""} />
  );
}
