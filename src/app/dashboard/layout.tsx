import type { Metadata } from "next";
import DashboardLayoutComponent from "./_components/dashboard-layout";
export const metadata: Metadata = {
  title: "Dashboard - CR-Cycle CRM",
  description: "CRM System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}

// bg-[#8b8b8b46]
