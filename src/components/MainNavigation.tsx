import { colors } from "assets/design-system/colors";
import Link from "next/link";
import React from "react";
import { CustomButton, CustomButtonOutlined } from "./custom-button";

function MainNavigation() {
  return (
    <div
      className="h-[120px] z-[99999999] flex flex-col border-b-[1px]"
      style={{ borderColor: colors.neutral[300] }}
    >
      <div
        style={{
          color: colors.neutral[600],
        }}
        className="flex justify-between pt-5 text-[14px] "
      >
        <div className="flex items-center gap-4 ">
          <p>English</p>
          <p>Support</p>
        </div>
        <div className="flex items-center gap-4 ">
          <p>About</p>
          <p>Blog</p>
        </div>{" "}
      </div>

      {/* main menu  */}
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className=" text-[24px] font-bold">
            CR-CYCLE
          </Link>
          <div
            style={{ color: colors.neutral[800] }}
            className=" text-[17px] flex items-center font-medium gap-8"
          >
            <Link href="/auth">Features</Link>
            {/* <Link href="/about"></Link> */}
            <Link href="/faq">Case Studies</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/faq">FAQs</Link>
            {/* <Link href="/dashboard">ADMIN</Link> */}
          </div>
        </div>

        {/* btns */}
        <div className="flex items-center gap-2">
          <CustomButtonOutlined>Demo</CustomButtonOutlined>
          <CustomButton>
            <Link
            href=""
            //  href="/dashboard"
            >Get started for free </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
