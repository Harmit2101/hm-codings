// HMLogo.tsx
import React from "react";

const HMLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="155"
    height="50"
    viewBox="0 0 150 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6C63FF" />
        <stop offset="100%" stopColor="#00F0FF" />
      </linearGradient>
    </defs>
    <text
      x="0"
      y="40"
      fontFamily="Poppins, sans-serif"
      fontWeight="700"
      fontSize="36"
      fill="url(#grad)"
    >
      HM
    </text>
    <text
      x="65"
      y="36"
      fontFamily="Poppins, sans-serif"
      fontWeight="500"
      fontSize="24"
      fill="url(#grad)"
    >
      Codings
    </text>
  </svg>
);

export default HMLogo;
