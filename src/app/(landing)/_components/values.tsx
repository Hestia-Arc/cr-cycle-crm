import {
  CustomButton,
  CustomButtonOutlined,
} from "@/components/button/custom-button";
import { TextHeading, TextBody } from "@/components/text/text";
import { colors } from "assets/design-system/colors";

import { listContents } from "./hero";

function Values() {
  return (
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
  );
}

export default Values;
