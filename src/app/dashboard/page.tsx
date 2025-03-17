import React from "react";

function page() {
  return (
    <div className=" flex gap-5">
      {/* 1 */}
      <div className="flex-1 ">
        {/* --- a */}
      <div className=" h-[180px] flex gap-2 items-center justify-between">
        <div className="h-full w-2/3  bg-stone-600 bg-opacity-40 rounded-lg"> left</div>
        <div className="h-full w-2/3  bg-stone-600 bg-opacity-40  rounded-lg">l2</div>
        <div className="h-full w-2/3 bg-stone-600 bg-opacity-40  rounded-lg">l3</div>
      </div>

      {/* ---- b */}
      <div className=" h-[345px] flex gap-2 items-center justify-between mt-5">
        <div className="h-full w-2/3  bg-stone-600 bg-opacity-40 rounded-lg"> left</div>
        <div className="h-full w-2/3  bg-stone-600 bg-opacity-40  rounded-lg">l2</div>
      </div>
      </div>
     

      {/* 2 */}
      <div className=" flex-shrink-0 flex-grow-0 basis-56 flex flex-col gap-2 justify-between h-full">
        <div className="basis-60 bg-stone-600 rounded-lg">right</div>
        <div className="basis-32 bg-stone-600 rounded-lg"> r2</div>
        <div className='basis-32 bg-stone-600 rounded-lg'>r3</div>
      </div>
    </div>
  );
}

export default page;
