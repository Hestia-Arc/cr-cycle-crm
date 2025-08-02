import { ReactNode } from "react";
import MainNavigation from "@/components/MainNavigation";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className=" relative ">
      <MainNavigation />
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
