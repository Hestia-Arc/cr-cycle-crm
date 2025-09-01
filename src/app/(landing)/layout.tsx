import { ReactNode } from "react";
import MainNavigation from "app/(landing)/_components/navigation";
import Footer from "./_components/footer";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className=" relative px-32 mx-auto sm:max-w-xl md:max-w-full">
      <MainNavigation />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
