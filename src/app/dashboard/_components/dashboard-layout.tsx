"use client"

import AppSidebar from "@/components/app-sidebar";
import NavigationBar from "@/components/NavigationBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { quicksand } from "../../../../public/fonts/newFont";
import { ErrorBoundary } from "react-error-boundary";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
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
    </div>
  );
};

function DashboardLayout({ children }: LayoutProps) {
  return (
    <Layout>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        {children}
      </ErrorBoundary>
    </Layout>
  );
}

export default DashboardLayout;
