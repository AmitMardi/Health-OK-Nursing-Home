import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  variant = "primary",
  children,
  className,
  ...props
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryStyles =
    "bg-[#013142] text-white hover:bg-[#024a63] focus:ring-[#013142]";
  const outlineStyles =
    "border-2 border-[#0081cc] text-[#0081cc] hover:bg-[#0081cc] hover:text-white focus:ring-[#0081cc]";

  const combinedClasses = cn(
    baseStyles,
    variant === "primary" ? primaryStyles : outlineStyles,
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
