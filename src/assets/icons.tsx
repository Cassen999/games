import type { JSX } from "react";

export function createXIconSVG(): JSX.Element {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8"
        y1="8"
        x2="42"
        y2="42"
        stroke="black"
        stroke-width="12"
        stroke-linecap="round"
      />
      <line
        x1="42"
        y1="8"
        x2="8"
        y2="42"
        stroke="black"
        stroke-width="12"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function createOIconSVG(): JSX.Element {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="18"
        fill="none"
        stroke="black"
        stroke-width="12"
      />
    </svg>
  );
}

export const BombIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    {/* Bomb body */}
    <circle cx="10" cy="12" r="7" fill="black" />

    {/* Fuse */}
    <line
      x1="10"
      y1="2"
      x2="10"
      y2="6"
      stroke="black"
      strokeWidth="2"
    />

    {/* Spark */}
    <circle cx="10" cy="2" r="2" fill="orange" />
  </svg>
);

export const SmileyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    {/* Face */}
    <circle
      cx="10"
      cy="10"
      r="8"
      fill="yellow"
      stroke="black"
      strokeWidth="1"
    />

    {/* Eyes */}
    <circle cx="7" cy="8" r="1" fill="black" />
    <circle cx="13" cy="8" r="1" fill="black" />

    {/* Smile */}
    <path
      d="M7 12.5 Q10 14.5 13 12.5"
      stroke="black"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
