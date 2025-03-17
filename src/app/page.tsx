import Image from "next/image";
import homeBg from "../assets/crm-bg-home3.jpg";
import MainNavigation from "../components/MainNavigation";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

// =============== hero
const Hero = () => {
  return (
    <div className="h-[100vh] w-full text-[40px] relative">
      <Image
        src={homeBg}
        alt="App background"
        // width={500}
        className="!h-[100%]"
        layout="responsive"
      />

      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#121212] bg-opacity-55"></div>

      {/*  */}
      <div className=" absolute top-0 left-[8%] right-0 bottom-0 flex flex-col justify-between ">
        <MainNavigation />

        {/*  */}
        <div className="mb-20">
          <h2 className="text-[#f2f2f2] font-bold leading-tight">
            Comprehensive <br /> architectural solutions
          </h2>
          <p className="text-[18px] text-[#f3f3f3]">Quality</p>
        </div>

        {/*  */}
        <div className="relative h-[150px] bg-[#121212] ">
          <div className=" h-[260px] w-[250px] absolute top-[-80px] left-0 bg-orange-700"></div>
        </div>
      </div>
    </div>
  );
};

// ===========

// ==========

// ========== footer
