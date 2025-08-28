import { colors } from "assets/design-system/colors";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface IButtonProp {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CustomButton = ({ children, className }: IButtonProp) => {
  return (
    <Button className={className} style={{  backgroundColor: colors.primary[600] }}>
      {children}{" "}
    </Button>
  );
};

export const CustomButtonOutlined = ({ children }: IButtonProp) => {
  return (
    <Button
      style={{
        border: "1px solid",
        borderColor: colors.primary[600],
        color: colors.primary[600],
        backgroundColor: "white",
      }}
    >
      {children}{" "}
    </Button>
  );
};
