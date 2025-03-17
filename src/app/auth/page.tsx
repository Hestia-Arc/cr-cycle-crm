import React from "react";
import MainNavigation from "../../components/MainNavigation";
import Image from "next/image";
import Bg from "../../assets/texture-bg.png";
import Bg2 from "../../assets/crm-bg-home2.png";

function page() {
  return (
    <div className="h-[100vh] w-full text-[40px] relative">
      <Image
        src={Bg}
        alt="App background"
        // width={500}
        className="!h-[100%]"
        layout="responsive"
      />

      {/* <div className=" absolute top-0 left-0 right-0 bottom-0 "></div> */}

      {/*  */}
      <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between ">
        <div className="pl-24">
        <MainNavigation />
        </div>

        {/*  */}
        <div className=" h-[85%] flex ml-24">
          {/* ------ 1 */}
          <div className="flex-1 flex flex-col gap-5 justify-end">
            {/* <div className="">
              <h4 className="text-[#f2f2f2] text-[24px] font-bold leading-tight">
                Comprehensive architectural solutions
              </h4>
            </div> */}
            <div className=" h-[80%] w-full ">
              {" "}
              <Image
                src={Bg2}
                alt="App background"
                // width={500}
                className="!h-[100%]"
                layout="responsive"
              />
            </div>
          </div>

          {/* ----- 2 */}
          <div className=" flex-1  flex flex-col justify-between ">
            <div className="h-[70%] w-[70%] pl-10">
              <h3 className=" text-orange-700 text-[15px] mb-3 font-semibold">LOG IN</h3>
              {/* <div className="h-full  border border-[#f5f5f550] rounded-md"></div> */}
            </div>

            {/*  */}
            <div className=" h-[120px] w-full bg-[#f3f3f3]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
