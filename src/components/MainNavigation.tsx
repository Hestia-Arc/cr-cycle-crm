import Link from "next/link";
import React from "react";

function MainNavigation() {
  return (
    <div className="absolute top-2 right-2 left-2 mx-2 rounded border-[1px] shadow-sm px-8 z-[99999999] h-[66px] flex justify-end items-center gap-6 pr-10 text-orange-600 text-[15px] font-medium bg-[#f4f4f4] ">
      <Link href="/" className="mr-auto font-bold">
        CR-CYCLE CRM
      </Link>
      <div className=" flex justify-end  gap-6">
        <Link href="/auth">SIGNUP</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/pricing">PRICING</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/dashboard">ADMIN</Link>
      </div>
    </div>
  );
}

export default MainNavigation;
