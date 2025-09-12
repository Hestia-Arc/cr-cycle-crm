"use client";

import Link from "next/link";
import React, { useState } from "react";

import { CustomButton } from "@/components/button/custom-button";
import {
  FormInputEmail,
  FormInputPassword,
  FormInputText,
} from "@/components/inputs/form-input";
import { TextBody } from "@/components/text/text";

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmPassword: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-3 text-[#757474] text-[13px]"
    >
      <div>
        {formData.lastName} {formData.firstName} {formData.email}{" "}
        {formData.password}
      </div>
      <div className="flex items-center gap-4 ">
        <FormInputText
          label="First name"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
        />{" "}
        <FormInputText
          label="First name"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
        />{" "}
      </div>
      <FormInputEmail
        label="Email address"
        name="email"
        value={formData.email}
        onChange={onChange}
      />{" "}
      <div>
        <div className="flex items-center gap-4">
          <FormInputPassword
            label="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />{" "}
          <FormInputPassword
            label="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChange}
          />{" "}
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
          <TextBody className="!text-[14px] !font-medium" content="Register" />
        </CustomButton>
      </div>
    </form>
  );
}

export default RegisterForm;
