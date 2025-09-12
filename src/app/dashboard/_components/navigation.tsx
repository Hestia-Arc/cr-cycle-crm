import Link from "next/link";
import React from "react";

import { TextHeading } from "@/components/text/text";

function NavigationBar() {
  return (
    <div className="h-[40px] pt-2 mb-2 text-[15px] flex justify-between items-center gap-6 px-3 border-gray-400">
      <TextHeading
        className="!text-[16px] !text-left"
        content="Good morning Loretta,"
      />

      <div className="flex items-center gap-4">
        <Link href="/auth">Logout</Link>
        <Link href="/account">Profile</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
