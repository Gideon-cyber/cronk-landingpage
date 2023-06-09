import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-blackSec py-[3rem]">
      <div className="flex items-center flex-col justify-center max-w-7xl mx-auto w-full gap-9 px-5">
        <div className="flex items-center justify-between w-full">
          <span className="font-b-600 font-Bebas md:text-[28px]">
            <Link href="#">Cronkcro</Link>
          </span>
          <div className="flex items-center gap-3">
            <Link href="#" className="text-[22px]">
              <Icon icon="bxl:telegram" />
            </Link>

            <Link href="#" className="text-[22px]">
              <Icon icon="bxl:discord-alt" />
            </Link>

            <Link href="#" className="text-[22px]">
              <Icon icon="bxl:twitter" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="w-full h-[2px] bg-blackTert"></div>
          <span className="text-[12px] leading-[20px] text-white/30">{`Copyright © ${new Date().getFullYear()}. CronkCro`}</span>
        </div>
      </div>
    </footer>
  );
};
