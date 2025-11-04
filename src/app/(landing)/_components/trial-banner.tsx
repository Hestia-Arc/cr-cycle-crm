import React from "react";
import { BsStars } from "react-icons/bs";

import { CustomButton } from "@/components/button/custom-button";
import { TextHeading, TextBody } from "@/components/text/text";
import { colors } from "assets/design-system/colors";

import { listContents } from "./hero";

const TrialBanner = () => {
  return (
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
  );
};

export default TrialBanner;
