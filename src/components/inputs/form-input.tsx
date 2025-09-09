import { DMSans } from "../../../public/fonts/newFont";
import { Input } from "../ui/input";

export const FormInput = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor="" className={`${DMSans.className} font-medium`}>
        {label}
      </label>
      <Input />
    </div>
  );
};
