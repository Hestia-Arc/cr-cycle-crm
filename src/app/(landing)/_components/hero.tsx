import { BsHddNetwork, BsStars } from "react-icons/bs";
import { TbServerCog } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";

import {
  CustomButton,
  CustomButtonOutlined,
} from "@/components/button/custom-button";
import { TextBody, TextHeading } from "@/components/text/text";
import { colors } from "assets/design-system/colors";

export default function Hero() {
  return (
    <div className="">
      {/* hero */}
      <div className="pt-28 pb-20">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="flex flex-col gap-10 items-center">
            <div className=" flex flex-col gap-4 items-center">
              <div className="flex items-center gap-2 px-3 py-2 rounded-[20px] border shadow">
                <div
                  style={{ color: colors.primary[600] }}
                  className="font-bold"
                >
                  <BsStars height={20} width={20} />
                </div>
                <TextBody content="Generative Business Intelligence for Real Estate Agents" />
              </div>
              <TextHeading content="  Revolutionizing Business Decisions with AI-Powered CRM" />
              <TextBody
                className="text-center w-2/3"
                content="Harnesses the power of artificial intelligence to transform your
                business data into actionable insights, propelling you to new
                heights of success."
              />
            </div>

            {/* btns */}
            <div className="flex items-center gap-4">
              <CustomButton>Get started for free</CustomButton>
              <CustomButtonOutlined>Watch demo</CustomButtonOutlined>
            </div>
          </div>

          {/* screen */}
          <div
            className=" h-[480px] w-full rounded-3xl "
            style={{ backgroundColor: colors.primary[600] }}
          ></div>
        </div>
      </div>

      {/* partners  */}
      <div className="pt-10 pb-[60px] flex flex-col items-center gap-5">
        <TextBody content="160,000+ customers in over 120 countries grow their businesses with CR-CYCLE" />

        <div className=" grid grid-cols-5 py-5 gap-6 ">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="shadow h-12 w-[184px] py-3"></div>
            ))}
        </div>
      </div>
    </div>
  );
}

export const listContents = [
  {
    icon: <TbServerCog className="h-7 w-8" />,
    title: "AI-Driven Lead Generation",
    body: "Harness the unmatched power of artificial intelligence with CR-CYCLE. Dive deep into predictive analytics, anticipate market trends, and stay steps ahead of your competition. Make informed decisions backed by data-driven insights",
  },
  {
    icon: <BsHddNetwork className="h-7 w-7" />,
    title: "Connect & Streamline",
    body: "CR-CYCLE seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that bridges the gaps in your data ecosystem, ensuring you have a holistic view of your operations",
  },
  {
    icon: <TbDeviceAnalytics className="h-7 w-8" />,
    title: "Instant Insights",
    body: "In the fast-paced world of business, every second counts. CR-CYCLE processes data in real-time, ensuring you're always working with the most up-to-date information. React to changes as they happen and pivot your strategies instantly.",
  },
];
