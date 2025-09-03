import { colors } from "assets/design-system/colors";
import Link from "next/link";
import React from "react";

function NavigationBar() {
  return (
    <div className="h-[48px] text-[16px] flex justify-end items-center gap-6 px-3 border-gray-400">
      <Link
        href="../"
        style={{ color: colors.primary[600] }}
        className="text-[18px] mr-auto"
      >
        CR-CYCLE
      </Link>

      <Link href="/auth">Logout</Link>
      <Link href="/account">Profile</Link>
    </div>
  );
}

export default NavigationBar;
