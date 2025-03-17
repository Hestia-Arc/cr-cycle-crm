import React from "react";
import PropertyCard from "./PropertyCard";

function page() {
  return (
    <div className="h-full w-full flex gap-3 pl-2 overflow-y-hidden">
      {/* page
        - list of Properties
        - location
        - name
        - state (e.g ABJ, KW, LAG)
        - city 
        - price 
        - property typw
        --------------------
        - add/upload property
        - crud operations
        - sort/filter
        - when viewing a property, suggest clients who suit it 
        - tags on properties to show availability/ rent out */}
      {/* --- right */}
      <div className="flex-grow h-screen">
        <div className="h-[12vh] w-full bg-stone-400"></div>

        {/* ----- cards */}
        <div className="mt-6">
          <h6 className="font-semibold text-[18px]">Properties</h6>
        
          <div className="h-[64vh] flex flex-col gap-3 mt-2 pr-2 overflow-y-auto">
          {[1, 2, 3, 4,5]?.map((item, i) => {
            return <PropertyCard />;
          })}
        </div>
        </div>
       
      </div>

      {/* ------- left */}
      <div className=" basis-[280px] bg-[#f2f2f2] rounded-md p-2">
        <h6 className=" font-semibold text-[18px]">Filters</h6>
      </div>
    </div>
  );
}

export default page;
