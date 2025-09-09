"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
// import Bg from "../../../assets/texture-bg.png";
import Bg2 from "../../../assets/crm-bg-home3.jpg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { colors } from "assets/design-system/colors";
import { TextBody, TextHeading } from "@/components/text/text";
import { quicksand } from "../../../../public/fonts/newFont";

function AuthLayoutComponent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const title =
    pathname === "/login" ? "Log into your account" : "Create an account";
  const subTitle =
    pathname === "/login" ? "Welcome back." : "Start exploring the features.";

  return (
    <div
      style={{
        backgroundColor: colors.primary[600],
        backgroundImage: `url(/crm-bg-home3.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      className={`!${quicksand.className} relative h-screen pt-10 px-20 flex w-full text-[40px] overflow-hidden `}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          // background: "rgba(0,0,0,0.7)",
          // rgba(56,127,245,0.9) 600
          // rgba(34, 76, 147, 0.6) 800
          background:
            "linear-gradient(90deg, rgba(56,127,245,1), rgba(56,127,245,0.89), rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div className="h-[550px] w-fit flex z-[9999999] ">
        <div className="flex-1 flex flex-col gap-4 pr-52 mt-32">
          <Link
            style={{
              color: colors.primary[600],
            }}
            href="/"
            className=" text-[16px] font-bold w-fit px-4 py-2 rounded bg-white"
          >
            CR-CYCLE
          </Link>
          <TextBody
            className="!text-[36px] !font-bold !text-[#f4f4f4]"
            content="Predictive Analytics For Your Workflow"
          />
          <TextBody
            className="text-left text-[#f5f5f5]"
            content="Harnesses the power of artificial intelligence to transform your
                business data into actionable insights, propelling you to new
                heights of success."
          />
        </div>
        {/* form */}
        <div className=" w-[580px] py-8 px-8 flex flex-col gap-8 bg-white rounded-md border-[1px] border-gray-300 shadow ">
          <div>
            <TextHeading content={title} className="!text-[24px] !text-left" />
            <TextBody
              content={subTitle}
              className="!text-[15px] !text-[#8f8d8d] !text-left"
            />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayoutComponent;
