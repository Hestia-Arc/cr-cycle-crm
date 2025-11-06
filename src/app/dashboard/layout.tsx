import type { Metadata } from "next";
import { Toaster } from "sonner";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "./_components/app-sidebar";
// import DashboardLayoutComponent from "./_components/dashboard-layout";
import { inter } from "../../../public/fonts/newFont";

export const metadata: Metadata = {
  title: "CR-Cycle - Dashboard",
  description: "CRM System",
};

// return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}

// bg-[#8b8b8b46]
