import { CustomButton } from "@/components/button/custom-button";
import { TextBody } from "@/components/text/text";
import Link from "next/link";
import React from "react";
import { FormInput } from "@/components/inputs/form-input";

function RegisterForm() {
  return (
    <form className="flex flex-col gap-3 text-[#757474] text-[13px]">
      <div className="flex items-center gap-4 ">
        <FormInput label="First name" /> <FormInput label="First name" />{" "}
      </div>
      <FormInput label="Email address" />{" "}
      <div>
        <div className="flex items-center gap-4">
          <FormInput label="Password" />{" "}
          <FormInput label="Confirm your password" />{" "}
        </div>
        <p className="mt-3 text-[13px] text-[#757474]">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
        <p className="mt-2">Show password </p>
      </div>
      <div className="flex items-center justify-between gap-4 mt-4">
        <Link href="/login" className=" underline font-medium">
          <TextBody className="!text-[13px] " content="Log in instead" />
        </Link>
        <CustomButton className="!w-fit">
          <Link href="/dashboard">
            <TextBody
              className="!text-[14px] !font-medium"
              content="Register"
            />
          </Link>
        </CustomButton>
      </div>
    </form>
  );
}

export default RegisterForm;
