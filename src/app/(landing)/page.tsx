import Image from "next/image";
import homeBg from "@/assets/crm-bg-home3.jpg";

export default function Home() {
  return (
<>
    {/* // =========== hero section */}
    <div className=" h-[600px] w-full text-[40px] relative">
      <Image
        src={homeBg}
        alt="App background"
        // width={500}
        className="!h-[100%] w-full object-cover"
        layout="responsive"
      />

      {/* overlay */}
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#121212] opacity-55"></div>

      {/*  */}
      <div className=" absolute top-0 left-[8%] right-0 bottom-0 pt-36 flex flex-col justify-between ">
        {/*  */}
        <div className="">
          <h2 className="text-[#f2f2f2] font-bold leading-tight">
            Comprehensive <br /> architectural solutions
          </h2>
          <p className="text-[18px] text-[#f3f3f3]">Quality</p>
        </div>

        {/*  */}
        <div className="relative h-[90px] bg-[#121212] ">
          <div className=" h-[200px] w-[240px] absolute top-[-80px] left-0 bg-orange-700"></div>
        </div>
      </div>
    </div>


{/* // ======== features */}
<div className="h-[500px] px-20 py-14 bg-[#121212] flex justify-center ">
  <h3 className="text-[#fff] text-[34px]">Features</h3>
</div>
</>
  );
}

// ===========

// ==========

// ========== footer
