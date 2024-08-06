import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const buttonVariants = cva(
  "max-w-fit overflow-hidden rounded-sm text-[20px] font-medium",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-white",
        outline: "transparent border-2 border-primary text-primary",
      },
      size: {
        default: "h-[52px] px-8 py-2",
        md: "h-[65px] px-4 py-3",
        lg: "h-[74px] px-10 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps;

export function Button({
  children,
  variant,
  size,
  type = "button",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
