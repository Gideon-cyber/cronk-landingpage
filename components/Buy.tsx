import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const Buy = () => {
  return (
    <div className="w-full pt-[6rem] pb-[7rem] px-5 bg-blackTert">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 md:auto-rows-fr gap-8">
        <div className="flex items-start flex-col flex-1 gap-5">
          <motion.h1
            className="font-bold text-[28px] leading-[110%] md:text-[48px] md:leading-[65px]"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            Bridge and swap to $CROnk
          </motion.h1>
          <motion.p
            className="text-[14px] leading-[24px] text-[#E5E6ED] lg:text-[20px] lg:leading-[36px]"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            Swap from over 16 EVM chains to $CROnk on cronos network.
          </motion.p>
          <motion.div
            className="bg-white/10 py-2.5 px-6 rounded-[12px] lg:text-center"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <p className="text-[20px] leading-[27px]">
              Exchange any token/coin for CRO/CROnk
            </p>
          </motion.div>
        </div>
        <motion.iframe
          src="https://app.xy.finance?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&sourceChainId=1&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&targetChainId=56&amount=&slippage=1&swap?outputCurrency=0x35bEC47922B187d819C3d71CE872086F2260477"
          className="w-full h-[500px] rounded-[12px] md:h-full md:row-span-3"
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        ></motion.iframe>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          <Link href="https://crodex.app" className="">
            <Button text="Swap on Crodex" onClick={() => {}} bg={true} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
