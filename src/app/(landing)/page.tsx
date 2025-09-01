import { colors } from "assets/design-system/colors";
import { TextBody, TextHeading } from "@/components/text/text";
import {
  CustomButton,
  CustomButtonOutlined,
} from "@/components/button/custom-button";
import { TbServerCog } from "react-icons/tb";
import { BsHddNetwork, BsStars } from "react-icons/bs";
import { TbDeviceAnalytics } from "react-icons/tb";

export default function Home() {
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

      {/* Values */}
      <div className="py-20 flex justify-center items-center">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="flex flex-col gap-2 items-center">
            <TextHeading content="Improve your Continuous Design Data workflow" />
            <TextBody content="Specify helps you gain control of your design system across teams and products." />
            <div className="flex items-center gap-4 mt-8">
              <CustomButton>Get a demo</CustomButton>
              <CustomButtonOutlined>Research</CustomButtonOutlined>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <div className="flex items-center gap-4">
              {listContents?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 px-5 py-4 ${
                    index === 0 ? "rounded-2xl shadow" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="">{item.icon}</div>
                    <TextBody
                      size="bodybase semibold"
                      style={{ color: colors.neutral[1000] }}
                      className="font-semibold "
                      content={item.title}
                    />
                  </div>
                  <TextBody content={item.body} />
                </div>
              ))}
            </div>

            {/* screen */}
            <div
              className=" h-[480px] w-full rounded-3xl "
              style={{ backgroundColor: colors.primary[600] }}
            ></div>
          </div>
        </div>
      </div>

      {/*  */}
      <div></div>

      {/* trial banner */}
      <div className="py-[60px]">
        <div
          className=" min-h-[450px] w-full rounded-3xl p-14 flex "
          style={{ backgroundColor: colors.primary[600] }}
        >
          <div className="flex flex-col gap-10 w-[75%]">
            <TextHeading
              className=" !leading-[58px] !text-left text-[#fff] !text-[44px]"
              content="Experience the Future of Business Analytics with CR-CYCLE"
            />
            <CustomButton className="!bg-[#ffffff28] !w-fit !px-8 !py-6 !font-bold">
              Get started for free
              <BsStars />
            </CustomButton>
          </div>

          <div className="w-[415px] flex flex-col gap-4">
            {listContents?.map((item, index) => (
              <div
                key={index}
                style={{ color: colors.neutral[200] }}
                className={`flex items-center gap-3 p-2 pr-4 !bg-[#ffffff18] rounded-2xl shadow}`}
              >
                <div className="!bg-[#ffffff20] flex justify-center items-center rounded-[12px] p-2 h-full">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-1">
                  <TextBody
                    size="bodybase semibold"
                    style={{ color: colors.neutral[1000] }}
                    className="font-semibold !text-[#fff]  "
                    content={item.title}
                  />
                  <TextBody content={item.body.slice(0, 70)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* solutions  */}
      <div className="py-[60px]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-2 items-center">
            <TextHeading content="Insights and predictions made easy" />
            <TextBody content="Advanced business intelligence tools enhance efficiency across your entire operation. By predicting future revenue and dissecting marketing effectiveness, these tools provide you with the critical insights needed for informed decision-making." />
          </div>

          <div></div>
        </div>
      </div>

      {/*  */}
      <div></div>
    </div>
  );
}

const listContents = [
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
