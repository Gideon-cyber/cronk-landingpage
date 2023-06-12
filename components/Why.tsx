import React from "react";
import { motion } from "framer-motion";

export const Why = () => {
  return (
    <div className="w-full pt-[6rem] pb-[7rem] px-5 bg-black">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
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
          NFT Lending Pool
        </motion.h1>
        <motion.p
          className="text-[14px] leading-[24px] text-[#E5E6ED] text-center w-[70%] lg:text-[20px] lg:leading-[36px]"
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
          Checkout Cronkcro NFT lending pool below
        </motion.p>
        <motion.div
          className="mt-5 w-full h-[500px]"
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <iframe
            src="https://app.withmantra.com/loans/pool/0xb99c7e9abf010254a3c1fa0df1c1fd1d5baac8fddb4fe3732823cf681ad33c8d?chain_id=25"
            className="w-full h-[500px] rounded-[12px] md:h-full"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};
