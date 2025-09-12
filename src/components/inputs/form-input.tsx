import { ChangeEvent } from "react";

import { DMSans } from "../../../public/fonts/newFont";
import { Input } from "../ui/input";

export const FormInputText = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor="" className={`${DMSans.className} font-medium`}>
        {label}
      </label>
      <Input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        className="!text-[#121212]"
      />
    </div>
  );
};

export const FormInputEmail = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor="" className={`${DMSans.className} font-medium`}>
        {label}
      </label>
      <Input
        type="email"
        value={value}
        name={name}
        onChange={onChange}
        className="!text-[#121212]"
      />
    </div>
  );
};

export const FormInputPassword = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor="" className={`${DMSans.className} font-medium`}>
        {label}
      </label>
      <Input
        type="password"
        value={value}
        name={name}
        onChange={onChange}
        className="!text-[#121212]"
      />
    </div>
  );
};
