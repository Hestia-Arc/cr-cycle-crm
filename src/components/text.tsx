import React from "react";
import { DMSans } from "../../public/fonts/newFont";
import { typography } from "assets/design-system/typography";

interface IProp {
  content: string;
  className?: string;
  size?: string;
  style?: React.CSSProperties;
}

export const TextBody = ({ content, className, style}: IProp) => {
  return <div style={style} className={`${className} text-[16px] `}>{content}</div>;
};

export const TextHeading = ({ content, className }: IProp) => {
  return (
    <h2
      style={{
        ...typography.heading.h1,
        textAlign: "center",
        width: "80%",
      }}
      className={`${DMSans.className} ${className}`}
    >
      {content}
    </h2>
  );
};
