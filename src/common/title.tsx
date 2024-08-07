import { cn } from "@/lib/utils";
import { FontWrapper } from "./fontWrapper";
import * as React from "react";

type Props = {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
};
export function Title({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}: Readonly<Props>) {
  return (
    <div className="mx-auto mb-16 text-center text-primary">
      <FontWrapper fontName="robotoSlab">
        <h1
          className={cn("mb-4 text-[64px] leading-[84.41px]", titleClassName)}
        >
          {title}
        </h1>
      </FontWrapper>
      <FontWrapper fontName="poppins">
        <h2 className={cn("text-[22px] leading-[33px]", subtitleClassName)}>
          {subtitle}
        </h2>
      </FontWrapper>
    </div>
  );
}
