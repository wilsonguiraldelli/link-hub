import DefaultLayout from "@/app/layouts/default";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
