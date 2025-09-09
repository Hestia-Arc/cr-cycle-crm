import React from "react";
import LeadScoringCard from "./_components/lead-scoring-card";
import TasksCard from "./_components/tasks-card";
import CalenderCard from "./_components/calender-card";
import ReportsCard from "./_components/reports-card";

function OverviewPage() {
  return (
    <div className="flex gap-4 h-full">
      {/* Daily priorities, active transactions, urgent notifications */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="h-[200px] border rounded"></div>
        <div className="flex flex-1 gap-4">
          <LeadScoringCard />
          <ReportsCard />
        </div>
      </div>

      {/* 2 */}
      <div className="w-[300px] flex flex-col gap-5 h-full ">
        <CalenderCard />
        <TasksCard />
      </div>
    </div>
  );
}

export default OverviewPage;
