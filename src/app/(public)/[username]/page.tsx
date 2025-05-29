import { notFound } from "next/navigation";

import landingRepository from "@/app/repository/landing";

import { LandingPageScreen } from "./screens";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;

  const profile = await landingRepository.getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  return <LandingPageScreen profile={profile} />;
}
