"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import Bg from "../../../assets/texture-bg.png";
import Bg2 from "../../../assets/crm-bg-home2.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { colors } from "assets/design-system/colors";
import { TextBody, TextHeading } from "@/components/text/text";

function AuthLayoutComponent({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const title = pathname === "/login" ? "Login" : "Register";

  return (
    <div className="h-[100vh] w-full text-[40px] bg-[#f3f3f3] relative">
      <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between ">
        <div className="absolute top-5 left-24 ">
          <Link
            href="/"
            style={{
              color: colors.primary[600],
            }}
            className=" text-[24px] font-bold leading-tight"
          >
            CR-CYCLE CRM
          </Link>
        </div>

        {/*  */}
        <div className=" h-[100%] flex ml-24">
          {/* ------ 1 */}
          <div className="flex-1 flex flex-col gap-5 justify-end">
            {/* <div className="">
              <h4 className="text-[#f2f2f2] text-[24px] font-bold leading-tight">
                Comprehensive architectural solutions
              </h4>
            </div> */}
            <div className=" h-[80%] w-full ">
              {" "}
              <Image
                src={Bg2}
                alt="App background"
                // width={500}
                className="!h-[100%]"
                layout="responsive"
              />
            </div>
          </div>

          {/* ----- 2 */}
          <div className=" flex-1  flex flex-col justify-between pt-28 ">
            <div className="h-[70%] w-[70%] pl-10">
              <TextHeading
                content={title}
                className="!text-[24px] !text-left"
              />

              <div className=" h-[120px] w-full bg-[#f3f3f3]">{children}</div>

              {/* <div className="h-full  border border-[#f5f5f550] rounded-md"></div> */}
            </div>

            {/*  */}
            {/* <div className=" h-[120px] w-full bg-[#f3f3f3]">{children}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayoutComponent;
