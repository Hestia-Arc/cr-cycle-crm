import {
  CustomButton,
  CustomButtonOutlined,
} from "@/components/button/custom-button";
import { FormInput } from "@/components/inputs/form-input";
import { TextBody } from "@/components/text/text";
import Link from "next/link";
import React from "react";

function LoginForm() {
  return (
    <form className="flex flex-col gap-3.5 text-[#757474] text-[13px]">
      <FormInput label="Email address" />{" "}
      <div>
        <div className="flex items-center gap-4">
          <FormInput label="Password" />{" "}
        </div>
        <p className="mt-2 text-right text-[13px] text-[#757474]">
          Forgot your password?
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 mt-3">
        <Link href="#" className=" underline font-medium">
          <TextBody className="!text-[13px] " content="Need help?" />
        </Link>
        <CustomButton className="!w-fit">
          <Link href="/dashboard">
            <TextBody className="!text-[14px] !font-medium" content="Log In" />
          </Link>
        </CustomButton>
      </div>
      <div className=" border-t-[1px] mt-2 py-3 flex flex-col justify-center gap-3">
        <p className="mt-3 text-center text-[13px] text-[#757474]">
          Don't have an account?
        </p>
        <CustomButtonOutlined className="!w-full">
          <Link href="/register">
            <TextBody
              className="!text-[14px] !font-medium"
              content="Create Account"
            />
          </Link>
        </CustomButtonOutlined>
      </div>
    </form>
  );
}

export default LoginForm;
