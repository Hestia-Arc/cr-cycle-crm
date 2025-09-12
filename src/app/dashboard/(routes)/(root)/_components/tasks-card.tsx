import React from "react";

import { TextHeading } from "@/components/text/text";

function TasksCard() {
  return (
    <div className="h-full w-full border rounded p-3">
      <TextHeading content="Tasks" className="!text-[14px] !text-left" />
      {/* <div className="border h-[200px] rounded mt-1"></div> */}
    </div>
  );
}

export default TasksCard;
