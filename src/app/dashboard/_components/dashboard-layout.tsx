"use client";

import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "app/dashboard/_components/app-sidebar";
import NavigationBar from "app/dashboard/_components/navigation";

import { quicksand } from "../../../../public/fonts/newFont";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row h-screen p-1 gap-1 overflow-hidden  bg-[#fff]  ${quicksand.className} antialiased`}
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className=" flex-grow ">
          <NavigationBar />
          <main className="h-[90vh] overflow-y-auto pr-1 rounded my-1">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

function DashboardLayoutComponent({ children }: LayoutProps) {
  return (
    <Layout>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        {children}
      </ErrorBoundary>
    </Layout>
  );
}

export default DashboardLayoutComponent;
