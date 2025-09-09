import { TextHeading } from "@/components/text/text";
import React from "react";

function ReportsCard() {
  return (
    <div className="h-full flex-1 border rounded p-3">
      <TextHeading content="Reports" className="!text-[14px] !text-left" />
    </div>
  );
}

export default ReportsCard;
