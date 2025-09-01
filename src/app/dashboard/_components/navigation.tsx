import Link from "next/link";
import React from "react";

function NavigationBar() {
  return (
    <div className="h-[66px] flex justify-end items-center gap-6 px-3 border-b-[1px] border-gray-400">
      <Link href="../" className="text-[24px] mr-auto">
        CR-CYCLE
      </Link>

      <Link href="/auth">Logout</Link>
      <Link href="/account">Profile</Link>
    </div>
  );
}

export default NavigationBar;
