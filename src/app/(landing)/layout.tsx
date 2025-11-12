import { ReactNode } from "react";

import MainNavigation from "app/(landing)/_components/navigation";

import Footer from "./_components/footer";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <MainNavigation />
      <div className="flex min-h-[calc(100dvh-64px)] flex-col">
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
}
