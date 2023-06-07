import Link from "next/link";
import React from "react";
import { Button } from "./Button";

export const Buy = () => {
  return (
    <div className="w-full pt-[6rem] pb-[7rem] px-5 md:px-0 bg-blackTert">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 md:auto-rows-fr gap-8">
        <div className="flex items-start flex-col flex-1 gap-5">
          <h1 className="font-bold text-[28px] leading-[110%] md:text-[48px] md:leading-[65px]">
            Buy CronkCro
          </h1>
          <p className="text-[14px] leading-[24px] text-[#E5E6ED] lg:text-[20px] lg:leading-[36px]">
            CronkCro Wants to Dominate DeFi TVL. With a community roadmap for
            2022, the network aims to be one of the top 5 public blockchains by
            TVL by the en
          </p>
          <div className="bg-white/10 py-2.5 px-6 rounded-[12px] lg:text-center">
            <p className="text-[20px] leading-[27px]">
              Exchange any currency for CRO or CROGE
            </p>
          </div>
        </div>
        <iframe
          src="https://app.xy.finance?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&sourceChainId=1&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&targetChainId=56&amount=&slippage=1"
          className="w-full h-[500px] rounded-[12px] md:h-full md:row-span-3"
        ></iframe>
        <Link
          href="https://app.xy.finance/?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&sourceChainId=1&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&targetChainId=56&amount=&slippage=1/"
          className=""
        >
          <Button text="Exchange here" onClick={() => {}} bg={true} />
        </Link>
      </div>
    </div>
  );
};