import { ReactNode } from "react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className=" relative px-32 mx-auto sm:max-w-xl md:max-w-full">
      <MainNavigation />
      <main className="">{children}</main>
      <Footer/>
    </div>
  );
}
