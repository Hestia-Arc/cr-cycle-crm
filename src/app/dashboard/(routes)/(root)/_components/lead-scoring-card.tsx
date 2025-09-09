import { TextHeading } from "@/components/text/text";
import React from "react";

function LeadScoringCard() {
  return (
    <div className="h-full w-[300px] border rounded p-3">
      <TextHeading content="Leads" className="!text-[14px] !text-left" />
    </div>
  );
}

export default LeadScoringCard;
