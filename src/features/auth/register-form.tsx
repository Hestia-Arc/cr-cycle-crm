import { CustomButton } from "@/components/button/custom-button";
import { TextBody } from "@/components/text/text";
import Link from "next/link";
import React from "react";

function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" className=" shadow-md" />
      <input type="text" className=" shadow-md" />

      <CustomButton className="!w-fit">
        <Link href="/dashboard">
          <TextBody content="Register" />
        </Link>
      </CustomButton>
    </form>
  );
}

export default RegisterForm;
