import React from "react";
import LeadScoringCard from "./_components/lead-scoring-card";

function OverviewPage() {
  return (
    <div className=" grid gap-5 ">
      {/* Daily priorities, active transactions, urgent notifications */}

      <LeadScoringCard />
    </div>
  );
}

export default OverviewPage;
