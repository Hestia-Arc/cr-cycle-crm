import Link from "next/link";
import React from "react";

function MainNavigation() {
  return (
    <div className="h-[66px] flex justify-end items-center gap-6 pr-16 text-[#f2f2f2] text-[15px] font-medium ">
      <Link href="/" className="mr-auto">CR-CYCLE CRM</Link>
      <div className=" flex justify-end  gap-6">
        <Link href="/auth">SIGNUP</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/dashboard">ACCOUNT</Link>
      </div>
    </div>
  );
}

export default MainNavigation;
