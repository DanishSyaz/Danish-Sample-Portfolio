import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = "h-8 w-auto object-contain", size = 48 }: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="Consultant Brand Mark"
    >
      <rect width="48" height="48" rx="10" fill="#0F172A" />
      <path d="M14 34V14L24 24L14 34Z" fill="#2563EB" opacity="0.9" />
      <path d="M24 24L34 14V34L24 24Z" fill="#0EA5E9" opacity="0.85" />
      <circle cx="24" cy="24" r="3.5" fill="#FFFFFF" />
      <circle cx="34" cy="14" r="2" fill="#60A5FA" />
      <circle cx="14" cy="14" r="2" fill="#93C5FD" />
    </svg>
  );
}
