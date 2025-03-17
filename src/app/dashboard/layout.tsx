import type { Metadata } from "next";
import NavigationBar from "../../components/NavigationBar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { quicksand } from "../../fonts/newFont";
import AppSidebar from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Dashboard - CR-Cycle CRM",
  description: "CRM System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col sm:flex-row h-screen p-1 gap-2 overflow-hidden  bg-stone-200  ${quicksand.className} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <main className=" flex-grow ">
            <NavigationBar />
            <div className=" h-[86vh] overflow-y-auto pr-1 rounded my-3">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

// bg-[#8b8b8b46]
