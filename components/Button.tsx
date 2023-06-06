import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  bg: boolean;
  color?: string;
};

const Button = ({ text, onClick, bg = true, color }: Props) => {
  return (
    <button
      className={`rounded-full border-[2px] w-full md:w-auto md:rounded-[8px]  px-11 py-3 flex items-center justify-center whitespace-nowrap ${
        bg ? "bg-black text-white border-black" : "text-black"
      }`}
      onClick={onClick}
    >
      <span
        className="flex items-center justify-center"
        style={{ color: color }}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
