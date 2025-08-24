import { colors } from "assets/design-system/colors";
import { typography } from "assets/design-system/typography";
import { DMSans } from "../../../public/fonts/newFont";

export default function Home() {
  return (
    <div className="">
      {/* hero */}
      <div className="pt-28 pb-20">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="flex flex-col gap-10 items-center">
            <div className=" flex flex-col gap-4 items-center">
              <div className="flex items-center gap-4 px-3 py-2 rounded-[20px] border shadow">
                <div style={{color:colors.primary[600]}} className="text-2xl font-bold">++</div>
                <p>Generative Business Intelligence for Real Estate Agents</p>
              </div>
              <h2
                style={{
                  ...typography.heading.h1,
                  textAlign: "center",
                  width: "80%",
                }}
                className={`${DMSans.className}`}
              >
                Revolutionizing Business Decisions with AI-Powered CRM
              </h2>
              <p className="text-center w-2/3">
                Harnesses the power of artificial intelligence to transform your
                business data into actionable insights, propelling you to new
                heights of success.
              </p>
            </div>

            {/* btns */}
            <div></div>
          </div>

          {/* screen */}
          <div
            className=" h-[480px] w-full rounded-3xl "
            style={{ backgroundColor: colors.primary[600] }}
          ></div>
        </div>
      </div>

      {/*  */}
      <div></div>

      {/*  */}
      <div></div>

      {/*  */}
      <div></div>

      {/*  */}
      <div></div>

      {/*  */}
      <div></div>

      {/*  */}
      <div></div>
    </div>
  );
}
